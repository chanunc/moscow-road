// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"deleteContract","outputs":[{"name":"","type":"string"}],"type":"function"}],
    binary: "606060405260568060106000396000f3606060405260e060020a60003504636893d3368114601a575b005b60806040526000606090815260206080908152600060a0819052819060c0908290808381848160046003f1509050509250505060405180910390f3",
    unlinked_binary: "606060405260568060106000396000f3606060405260e060020a60003504636893d3368114601a575b005b60806040526000606090815260206080908152600060a0819052819060c0908290808381848160046003f1509050509250505060405180910390f3",
    address: "",
    generated_with: "2.0.9",
    contract_name: "AbstractFactory"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("AbstractFactory error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("AbstractFactory error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("AbstractFactory error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("AbstractFactory error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.AbstractFactory = Contract;
  }

})();
