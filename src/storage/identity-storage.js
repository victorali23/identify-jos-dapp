class IdentityStorage {
    identities;

    constructor() {
        this.identities = new Map();
    }

    /**
     * ### IdentityStorage addOne
     * @description store a single identity document.
     * @param {*} identity IdentityModel
     */
    addOne(identity) {
        const userId = identity.userId;
        if (!this.identities.has(userId)) {
            this.identities.set(userId, new Map());
        }
        this.identities.get(userId).set(identity.id, identity);
    }

    /**
     * ### IdentityStorage getOneById
     * @description get a single identity document given a userId and documentId.
     * @param {*} userId UUID
     * @param {*} documentId UUID
     * @returns IdentityModel | undefined (not found)
     */
    getOneById(userId, documentId) {
        if (this.identities.has(userId)) {
            return this.identities.get(userId).get(documentId);
        }
        return undefined;
    }

    /**
     * ### IdentityStorage updateOne
     * @description update a single identity document.
     * @param {*} identity IdentityModel
     */
    updateOne(identity) {
        if (this.identities.has(identity.userId)) {
            this.identities.get(identity.userId).set(identity.id, identity);
        }
    }
}

export const identityStorage = new IdentityStorage();
