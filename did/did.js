class DID {
  constructor(didDocument) {
    this.didDocument = didDocument;
  }

  static create(subject, publicKey) {
    const didDocument = {
      id: `${subject}#${publicKey.kid}`,
      publicKey: [publicKey],
      authentication: [`${subject}#${publicKey.kid}`],
      service: [],
    };

    return new DID(didDocument);
  }

  static resolve(did) {
    // Implement DID resolution logic here
  }

  static verifySignature(did, data, signature) {
    const publicKey = this.getPublicKey(did, signature.keyId);
    return publicKey.verify(data, signature.signatureValue);
  }

  static getPublicKey(did, keyId) {
    const didDocument = this.resolve(did);
    return didDocument.publicKey.find((key) => key.id === keyId);
  }
}

module.exports = DID;
