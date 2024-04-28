const Blockchain = require("./blockchain");
const DIDManager = require("./did-manager");
const AuthService = require("./service-auth");
const AuthorizationService = require("./service-authz");
const VerificationService = require("./service-verification");

const blockchain = new Blockchain();
const didManager = new DIDManager();
const authService = new AuthService();
const authorizationService = new AuthorizationService();
const verificationService = new VerificationService();

// Example usage
blockchain.addBlock("Example data");

const did = await didManager.createDid("did:example:123", {
  kid: "public-key-1",
  publicKey: "public-key-value",
});

const isAuthenticated = await authService.authenticate(did, "Example data", {
  keyId: "public-key-1",
  signatureValue: "signature-value",
});

const isAuthorized = await authorizationService.authorize(did, "example-resource", "example-action");

const isVerified = await verificationService.verify(did, "Example data");
