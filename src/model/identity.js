import crypto from 'node:crypto';

export class Identity {
    id;
    userId;
    documentType;
    documentData;
    verified;
    submittedAt;

    /**
     * ### Identity model
     * @requires userId: UUID {*}
     * @requires documentType: string {*}
     * @requires documentData: string {*}
     */
    constructor({ userId, documentType, documentData }) {
        this.id = crypto.randomUUID();
        this.userId = userId;
        this.documentType = documentType;
        this.documentData = documentData;
        this.verified = false;
        this.submittedAt = Date.now();
    }

    /**
     * ### Identity getData
     * @description return identity document basic data.
     * @returns {*}
     * identity {
     * id: UUID
     * userId: UUID
     * documentType: string
     * documentData: string
     * verified: boolean
     * submittedAt: number
     * }
     */
    getData() {
        return {
            id: this.id,
            userId: this.userId,
            documentType: this.documentType,
            documentData: this.documentData,
            verified: this.verified,
            submittedAt: this.submittedAt,
        };
    }

    /**
     * ### Identity verify
     * @description mark the identity as verified.
     */
    verify() {
        this.verified = true;
    }
}
