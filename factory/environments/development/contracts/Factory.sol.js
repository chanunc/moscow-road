// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"sayHi","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"getAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260fe806100116000396000f3606060405260e060020a60003504630c49c36c81146024578063b93f9b0a1460a0575b005b600060605260c0604052601660809081527f4675636b20796f752c206d6f746865726675636b65720000000000000000000060a052602060c0908152601660e081905281906101009060a09080838184600060046012f15050815169ffffffffffffffffffff1916909152505060405161012081900392509050f35b60f4600435600060016000508281548110156002575090527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6015473ffffffffffffffffffffffffffffffffffffffff1690565b6060908152602090f3",
    unlinked_binary: "606060405260fe806100116000396000f3606060405260e060020a60003504630c49c36c81146024578063b93f9b0a1460a0575b005b600060605260c0604052601660809081527f4675636b20796f752c206d6f746865726675636b65720000000000000000000060a052602060c0908152601660e081905281906101009060a09080838184600060046012f15050815169ffffffffffffffffffff1916909152505060405161012081900392509050f35b60f4600435600060016000508281548110156002575090527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6015473ffffffffffffffffffffffffffffffffffffffff1690565b6060908152602090f3",
    address: "0xf9626a25f5206bc15e2ac7e3fd63e39e0611c0b4",
    generated_with: "2.0.9",
    contract_name: "Factory"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Factory error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Factory error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Factory error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Factory error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Factory = Contract;
  }

})();
