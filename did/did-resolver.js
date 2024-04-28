const DID = require("./did");

async function resolve(did) {
  return DID.resolve(did);
}

module.exports = {
  resolve,
};
