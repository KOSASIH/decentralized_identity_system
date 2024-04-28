const DID = require("./did");
const DIDResolver = require("./did-resolver");

class DIDManager {
  constructor() {
    this.resolver = new DIDResolver();
  }

  async createDid(subject, publicKey) {
    const did = DID.create(subject, publicKey);
    return did.didDocument;
  }

  async resolveDid(did) {
    return this.resolver.resolve(did);
  }

  async verifySignature(did, data, signature) {
    return DID.verifySignature(did, data, signature);
  }
}

module.exports = DIDManager;
