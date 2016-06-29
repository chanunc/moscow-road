// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"value","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"val","type":"uint256"}],"name":"setValue","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "60606040526000805560408060146000396000f3606060405260e060020a60003504633fa4f245811460245780635524107714602c575b005b603660005481565b6004356000556022565b6060908152602090f3",
    unlinked_binary: "60606040526000805560408060146000396000f3606060405260e060020a60003504633fa4f245811460245780635524107714602c575b005b603660005481565b6004356000556022565b6060908152602090f3",
    address: "0xc7e23119e8a5ac7fbf30d58a25d4db8369b7089b",
    generated_with: "2.0.9",
    contract_name: "Example"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Example error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Example error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Example error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Example error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Example = Contract;
  }

})();
