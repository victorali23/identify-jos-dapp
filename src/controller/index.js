import { IdentityController } from './identity-controller';

const identityController = new IdentityController();

export const controller = {
    submitIdentity: identityController.submitIdentity,
    verifyIdentity: identityController.verifyIdentity,
    getIdentityById: identityController.getIdentityById,
};
