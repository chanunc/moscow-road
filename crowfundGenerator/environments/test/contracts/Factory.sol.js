// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"sayHi","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"_repo_owner","type":"address"},{"name":"_repo_web_address","type":"string"}],"name":"createContract","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"getNumberOfContracts","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"getContract","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"crowdfunds","outputs":[{"name":"addr","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052610a00806100126000396000f3606060405260e060020a60003504630c49c36c8114610047578063375d523414610083578063485ee05e1461015f5780636ebc8c861461016a578063ac42b1d6146101b4575b005b6101f9600060605260c0604052600b60809081527f48656c6c6f20746865726500000000000000000000000000000000000000000060a0525b90565b6080602060248035600481810135601f81018590049094028501604052606084815261026795823595929460449492939201919081908382808284375094965050505050505060006000600060405161066d80610393833901809050604051809103906000f091506020604051908101604052808381526020015060006000506000600050805480919060010190908154818355818115116102965781836000526020600020918201910161029691905b8082111561038f57805473ffffffffffffffffffffffffffffffffffffffff19168155600101610134565b610284600054610080565b6102676004356000600060005082815481101561000257505080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630154600160a060020a031690565b610267600435600080548290811015610002575080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630154600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b505050815481101561000257906000526020600020900160005060008201518160000160006101000a815481600160a060020a030219169083021790555090505081905080600160a060020a031663b6c7dd0786866040518360e060020a0281526004018083600160a060020a03168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103665780820380516001836020036101000a031916815260200191505b5093505050506000604051808303816000876161da5a03f1156100025750919695505050505050565b509056606060405260008054600160a060020a03191690556002805460ff191690556106418061002c6000396000f3606060405236156100825760e060020a600035046308e85a8281146100f45780631dd90164146101005780633e3fb1a4146101685780634b232c2d1461017a578063b6c7dd07146101d7578063cfae3217146102c4578063d4493e8d1461030c578063dc0d3dff14610320578063e6d2524514610394578063ea8a1af0146103bc575b610476604080518082019091523381523460208201819052600380546001810180835592939282908280158290116104785760020281600202836000526020600020918201910161047891905b808211156104b7578054600160a060020a0319168155600060018201556002016100cf565b6104bb60025460ff1681565b6104cf604080516020818101835260008252825160018054600281831615610100026000190190911604601f810184900484028301840190955284825292939092918301828280156105ab5780601f10610580576101008083540402835291602001916105ab565b61053d600054600160a060020a031681565b6104cf60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105e25780601f106105b7576101008083540402835291602001916105e2565b60408051602060248035600481810135601f8101859004850286018501909652858552610476958135959194604494929390920191819084018382808284375094965050505050505060025460ff161515600014156105fa5760008054600160a060020a031916831781556001805483519282905290917fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf66020600284861615610100026000190190941693909304601f9081018490048201938601908390106105fe57805160ff19168380011785555b506105ea9291505b808211156104b757600081556001016102b0565b6104cf604080516020818101835260009091528151808301909252600582527f776f726b73000000000000000000000000000000000000000000000000000000908201525b90565b61053d600054600160a060020a0316610309565b61055a60043560038054829081101561000257506000526002027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b8101547fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c9190910154600160a060020a03919091169082565b610476600435600054600160a060020a033381169116141561062e5780600160a060020a0316ff5b61047660008054600160a060020a033381169116141561062e575b6003548110156106335760038054829081101561000257600082815282546002929092027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0154600160a060020a03169290918490811015610002576040516002919091027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c0154915082818181858883f150505050506001016103d7565b005b505050815481101561000257906000526020600020906002020160005081518154600160a060020a031916178155602091909101516001919091015550565b5090565b604080519115158252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561052f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b6040518083600160a060020a031681526020018281526020019250505060405180910390f35b820191906000526020600020905b81548152906001019060200180831161058e57829003601f168201915b50505050509050610309565b820191906000526020600020905b8154815290600101906020018083116105c557829003601f168201915b505050505081565b50506002805460ff191660011790555b5050565b828001600101855582156102a8579182015b828111156102a8578251826000505591602001919060010190610610565b610002565b600054600160a060020a0316ff",
    unlinked_binary: "6060604052610a00806100126000396000f3606060405260e060020a60003504630c49c36c8114610047578063375d523414610083578063485ee05e1461015f5780636ebc8c861461016a578063ac42b1d6146101b4575b005b6101f9600060605260c0604052600b60809081527f48656c6c6f20746865726500000000000000000000000000000000000000000060a0525b90565b6080602060248035600481810135601f81018590049094028501604052606084815261026795823595929460449492939201919081908382808284375094965050505050505060006000600060405161066d80610393833901809050604051809103906000f091506020604051908101604052808381526020015060006000506000600050805480919060010190908154818355818115116102965781836000526020600020918201910161029691905b8082111561038f57805473ffffffffffffffffffffffffffffffffffffffff19168155600101610134565b610284600054610080565b6102676004356000600060005082815481101561000257505080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630154600160a060020a031690565b610267600435600080548290811015610002575080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630154600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b505050815481101561000257906000526020600020900160005060008201518160000160006101000a815481600160a060020a030219169083021790555090505081905080600160a060020a031663b6c7dd0786866040518360e060020a0281526004018083600160a060020a03168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103665780820380516001836020036101000a031916815260200191505b5093505050506000604051808303816000876161da5a03f1156100025750919695505050505050565b509056606060405260008054600160a060020a03191690556002805460ff191690556106418061002c6000396000f3606060405236156100825760e060020a600035046308e85a8281146100f45780631dd90164146101005780633e3fb1a4146101685780634b232c2d1461017a578063b6c7dd07146101d7578063cfae3217146102c4578063d4493e8d1461030c578063dc0d3dff14610320578063e6d2524514610394578063ea8a1af0146103bc575b610476604080518082019091523381523460208201819052600380546001810180835592939282908280158290116104785760020281600202836000526020600020918201910161047891905b808211156104b7578054600160a060020a0319168155600060018201556002016100cf565b6104bb60025460ff1681565b6104cf604080516020818101835260008252825160018054600281831615610100026000190190911604601f810184900484028301840190955284825292939092918301828280156105ab5780601f10610580576101008083540402835291602001916105ab565b61053d600054600160a060020a031681565b6104cf60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105e25780601f106105b7576101008083540402835291602001916105e2565b60408051602060248035600481810135601f8101859004850286018501909652858552610476958135959194604494929390920191819084018382808284375094965050505050505060025460ff161515600014156105fa5760008054600160a060020a031916831781556001805483519282905290917fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf66020600284861615610100026000190190941693909304601f9081018490048201938601908390106105fe57805160ff19168380011785555b506105ea9291505b808211156104b757600081556001016102b0565b6104cf604080516020818101835260009091528151808301909252600582527f776f726b73000000000000000000000000000000000000000000000000000000908201525b90565b61053d600054600160a060020a0316610309565b61055a60043560038054829081101561000257506000526002027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b8101547fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c9190910154600160a060020a03919091169082565b610476600435600054600160a060020a033381169116141561062e5780600160a060020a0316ff5b61047660008054600160a060020a033381169116141561062e575b6003548110156106335760038054829081101561000257600082815282546002929092027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0154600160a060020a03169290918490811015610002576040516002919091027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c0154915082818181858883f150505050506001016103d7565b005b505050815481101561000257906000526020600020906002020160005081518154600160a060020a031916178155602091909101516001919091015550565b5090565b604080519115158252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561052f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b6040518083600160a060020a031681526020018281526020019250505060405180910390f35b820191906000526020600020905b81548152906001019060200180831161058e57829003601f168201915b50505050509050610309565b820191906000526020600020905b8154815290600101906020018083116105c557829003601f168201915b505050505081565b50506002805460ff191660011790555b5050565b828001600101855582156102a8579182015b828111156102a8578251826000505591602001919060010190610610565b610002565b600054600160a060020a0316ff",
    address: "0x1909bcc44275a79cb5786c1d6e488bf0a6bac4e9",
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
