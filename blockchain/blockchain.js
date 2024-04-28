class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
  }

  createGenesisBlock() {
    return {
      index: 0,
      timestamp: Date.now(),
      data: "Genesis Block",
      prevHash: "0",
      hash: this.calculateHash(this.chain[0]),
      nonce: 0,
    };
  }

  calculateHash(block) {
    const { index, timestamp, data, prevHash, nonce } = block;
    return sha256(index + timestamp + data + prevHash + nonce).toString();
  }

  addBlock(data) {
    const newBlock = {
      index: this.chain.length,
      timestamp: Date.now(),
      data,
      prevHash: this.chain[this.chain.length - 1].hash,
      hash: null,
      nonce: 0,
    };

    while (newBlock.hash === null || newBlock.hash.startsWith("0".repeat(this.difficulty))) {
      newBlock.nonce++;
      newBlock.hash = this.calculateHash(newBlock);
    }

    this.chain.push(newBlock);
  }
}

module.exports = Blockchain;
