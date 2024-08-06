import { Identity } from '../models/identity';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { identityStorage } from '../storage/identity-storage';

export class IdentityController {
    /**
     * ### IdentityController submitIdentity
     * @description Submit an identity document.
     * @param {*} required {userId: UUID, documentType: string, documentData: string}
     */
    async submitIdentity(data) {
        if (!data.userId || !data.documentType || !data.documentData) {
            return await RollupStateHandler.handleReport({
                error: 'User ID, document type, and document data must be provided.',
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newIdentity = new Identity(data);
            identityStorage.addOne(newIdentity);

            return {
                ok: true,
                message: `Identity submitted successfully for user '${data.userId}'!`,
                data: newIdentity.getData(),
            };
        });
    }

    /**
     * ### IdentityController verifyIdentity
     * @description Verify an identity document.
     * @param {*} required {userId: UUID, documentId: UUID}
     */
    async verifyIdentity(data) {
        const { userId, documentId } = data;
        const identity = identityStorage.getOneById(userId, documentId);

        if (!identity) {
            return await RollupStateHandler.handleReport({
                error: `Identity document not found for user '${userId}' and document '${documentId}'.`,
            });
        }

        identity.verify();

        identityStorage.updateOne(identity);

        return {
            ok: true,
            message: `Identity verified successfully for document '${documentId}'!`,
        };
    }

    /**
     * ### IdentityController getIdentityById
     * @description Get a verified identity by ID.
     * @param {*} required {userId: UUID, documentId: UUID}
     */
    async getIdentityById(data) {
        const { userId, documentId } = data;
        const identity = identityStorage.getOneById(userId, documentId);

        if (!identity) {
            return await RollupStateHandler.handleReport({
                error: `Identity document not found for user '${userId}' and document '${documentId}'.`,
            });
        }

        return await RollupStateHandler.inspectWrapper(() => ({
            details: identity.getData(),
        }));
    }
}
