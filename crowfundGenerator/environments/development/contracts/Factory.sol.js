// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"sayHi","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"_repo_owner","type":"address"},{"name":"_repo_web_address","type":"string"}],"name":"createContract","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"getNumberOfContracts","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"deleteContract","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"getContract","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"crowdfunds","outputs":[{"name":"addr","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052610df5806100126000396000f3606060405236156100565760e060020a60003504630c49c36c8114610058578063375d5234146100a0578063485ee05e146101575780636893d336146101625780636ebc8c86146102ca578063ac42b1d614610302575b005b610335604080516020818101835260009091528151808301909252600b82527f48656c6c6f207468657265000000000000000000000000000000000000000000908201525b90565b60408051602060248035600481810135601f81018590048502860185019096528585526103a3958135959194604494929390920191819084018382808284375094965050505050505060006000600060006040516107fb806105da833901809050604051809103906000f08154600181018084559194509082908280158290116103d2578183600052602060002091820191016103d291905b80821115610596578054600160a060020a0319168155600101610139565b6103c060005461009d565b61033560043560408051602081019091526000808252805460001901831461024e5780548190600019810190811015610002575080548180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56281019250849081101561000257818052600080516020610dd583398151915201905060008054600019810190811015610002575090548254600160a060020a031916600160a060020a03919091161782558054829190859081101561000257818052600080516020610dd583398151915201905090548154600160a060020a031916600160a060020a03919091161790555b60008054600019810190811015610002575080548180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e562018054600160a060020a03191690558054600019810180835590919082801582901161059a5761059a90600080516020610dd5833981519152908101908301610139565b6103a3600435600060006000508281548110156100025750508052600080516020610dd58339815191520154600160a060020a031690565b6103a360043560008054829081101561000257508052600080516020610dd58339815191520154600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103955780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b50505091506020604051908101604052808481526020015060006000508381548110156100025750808052600080516020610dd58339815191528401905090518154600160a060020a03191617905550604080517fb6c7dd07000000000000000000000000000000000000000000000000000000008152600160a060020a0387811660048381019182526024840194855288516044850152885187959386169463b6c7dd07948c948c9490939192606401916020868101928291859183918691600091601f850104600f02600301f150905090810190601f1680156104cb5780820380516001836020036101000a031916815260200191505b5093505050506000604051808303816000876161da5a03f1156100025750505080600160a060020a03166340a5737f836040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f115610002575050604080517f47c484e900000000000000000000000000000000000000000000000000000000815230600160a060020a0316600482015290516347c484e991602481810192600092909190829003018183876161da5a03f115610002575093979650505050505050565b5090565b505060408051808201909152600f81527f616464726573732064656c6574656400000000000000000000000000000000006020820152959450505050505600606060405260008054600160a060020a03191690556003805460a060020a60ff02191690556107c9806100326000396000f3606060405236156100cf5760e060020a600035046308e85a8281146101415780631dd90164146101545780631e2186ae146101bc5780632986c0e51461026d5780633e3fb1a41461027657806340a5737f1461028857806347c484e9146102a35780634b232c2d146102ba57806381045ead14610317578063938b5f3214610321578063b6c7dd0714610333578063cce8c26a1461042b578063cfae321714610436578063d4493e8d1461047f578063dc0d3dff14610493578063e6d2524514610507578063ea8a1af01461052f575b6102b8604080518082019091523381523460208201819052600480546001810180835592939282908280158290116105e9576002028160020283600052602060002091820191016105e991905b80821115610628578054600160a060020a03191681556000600182015560020161011c565b61062c60035460a060020a900460ff1681565b610640604080516020818101835260008252825160018054600281831615610100026000190190911604601f8101849004840283018401909552848252929390929183018282801561071c5780601f106106f15761010080835404028352916020019161071c565b6106406040805160208181018352600080835283516003546002547f6893d336000000000000000000000000000000000000000000000000000000008352600483015294519394600160a060020a031693636893d33693602483810194919383900301908290876161da5a03f11561000257505060408051808201909152600e81527f64657374726f7965642073656c660000000000000000000000000000000000006020820152915061031e9050565b61029160025481565b6106ae600054600160a060020a031681565b60043560028190555b60408051918252519081900360200190f35b60038054600160a060020a0319166004351790555b005b61064060018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156107535780601f1061072857610100808354040283529160200191610753565b6102916002545b90565b6106ae600354600160a060020a031681565b60408051602060248035600481810135601f81018590048502860185019096528585526102b8958135959194604494929390920191819084018382808284375094965050505050505060035460a060020a900460ff161515600014156107825760008054600160a060020a0319168317815581516001805492819052916020600282851615610100026000190190921691909104601f9081018290047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6908101939290919086019083901061078657805160ff19168380011785555b5061075b9291505b808211156106285760008155600101610417565b61029160045461031e565b610640604080516020818101835260009091528151808301909252600582527f776f726b730000000000000000000000000000000000000000000000000000009082015261031e565b6106ae600054600160a060020a031661031e565b6106cb60043560048054829081101561000257506000526002027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b8101547f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c9190910154600160a060020a03919091169082565b6102b8600435600054600160a060020a03338116911614156107b65780600160a060020a0316ff5b6102b860008054600160a060020a03338116911614156107b6575b6004548110156107bb5760048054829081101561000257600082815282546002929092027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0154600160a060020a03169290918490811015610002576040516002919091027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c0154915082818181858883f1505050505060010161054a565b505050815481101561000257906000526020600020906002020160005081518154600160a060020a031916178155602091909101516001919091015550565b5090565b604080519115158252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156106a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b6040518083600160a060020a031681526020018281526020019250505060405180910390f35b820191906000526020600020905b8154815290600101906020018083116106ff57829003601f168201915b5050505050905061031e565b820191906000526020600020905b81548152906001019060200180831161073657829003601f168201915b505050505081565b50506003805474ff0000000000000000000000000000000000000000191660a060020a1790555b5050565b8280016001018555821561040f579182015b8281111561040f578251826000505591602001919060010190610798565b610002565b600054600160a060020a0316ff290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563",
    unlinked_binary: "6060604052610df5806100126000396000f3606060405236156100565760e060020a60003504630c49c36c8114610058578063375d5234146100a0578063485ee05e146101575780636893d336146101625780636ebc8c86146102ca578063ac42b1d614610302575b005b610335604080516020818101835260009091528151808301909252600b82527f48656c6c6f207468657265000000000000000000000000000000000000000000908201525b90565b60408051602060248035600481810135601f81018590048502860185019096528585526103a3958135959194604494929390920191819084018382808284375094965050505050505060006000600060006040516107fb806105da833901809050604051809103906000f08154600181018084559194509082908280158290116103d2578183600052602060002091820191016103d291905b80821115610596578054600160a060020a0319168155600101610139565b6103c060005461009d565b61033560043560408051602081019091526000808252805460001901831461024e5780548190600019810190811015610002575080548180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56281019250849081101561000257818052600080516020610dd583398151915201905060008054600019810190811015610002575090548254600160a060020a031916600160a060020a03919091161782558054829190859081101561000257818052600080516020610dd583398151915201905090548154600160a060020a031916600160a060020a03919091161790555b60008054600019810190811015610002575080548180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e562018054600160a060020a03191690558054600019810180835590919082801582901161059a5761059a90600080516020610dd5833981519152908101908301610139565b6103a3600435600060006000508281548110156100025750508052600080516020610dd58339815191520154600160a060020a031690565b6103a360043560008054829081101561000257508052600080516020610dd58339815191520154600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103955780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b50505091506020604051908101604052808481526020015060006000508381548110156100025750808052600080516020610dd58339815191528401905090518154600160a060020a03191617905550604080517fb6c7dd07000000000000000000000000000000000000000000000000000000008152600160a060020a0387811660048381019182526024840194855288516044850152885187959386169463b6c7dd07948c948c9490939192606401916020868101928291859183918691600091601f850104600f02600301f150905090810190601f1680156104cb5780820380516001836020036101000a031916815260200191505b5093505050506000604051808303816000876161da5a03f1156100025750505080600160a060020a03166340a5737f836040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f115610002575050604080517f47c484e900000000000000000000000000000000000000000000000000000000815230600160a060020a0316600482015290516347c484e991602481810192600092909190829003018183876161da5a03f115610002575093979650505050505050565b5090565b505060408051808201909152600f81527f616464726573732064656c6574656400000000000000000000000000000000006020820152959450505050505600606060405260008054600160a060020a03191690556003805460a060020a60ff02191690556107c9806100326000396000f3606060405236156100cf5760e060020a600035046308e85a8281146101415780631dd90164146101545780631e2186ae146101bc5780632986c0e51461026d5780633e3fb1a41461027657806340a5737f1461028857806347c484e9146102a35780634b232c2d146102ba57806381045ead14610317578063938b5f3214610321578063b6c7dd0714610333578063cce8c26a1461042b578063cfae321714610436578063d4493e8d1461047f578063dc0d3dff14610493578063e6d2524514610507578063ea8a1af01461052f575b6102b8604080518082019091523381523460208201819052600480546001810180835592939282908280158290116105e9576002028160020283600052602060002091820191016105e991905b80821115610628578054600160a060020a03191681556000600182015560020161011c565b61062c60035460a060020a900460ff1681565b610640604080516020818101835260008252825160018054600281831615610100026000190190911604601f8101849004840283018401909552848252929390929183018282801561071c5780601f106106f15761010080835404028352916020019161071c565b6106406040805160208181018352600080835283516003546002547f6893d336000000000000000000000000000000000000000000000000000000008352600483015294519394600160a060020a031693636893d33693602483810194919383900301908290876161da5a03f11561000257505060408051808201909152600e81527f64657374726f7965642073656c660000000000000000000000000000000000006020820152915061031e9050565b61029160025481565b6106ae600054600160a060020a031681565b60043560028190555b60408051918252519081900360200190f35b60038054600160a060020a0319166004351790555b005b61064060018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156107535780601f1061072857610100808354040283529160200191610753565b6102916002545b90565b6106ae600354600160a060020a031681565b60408051602060248035600481810135601f81018590048502860185019096528585526102b8958135959194604494929390920191819084018382808284375094965050505050505060035460a060020a900460ff161515600014156107825760008054600160a060020a0319168317815581516001805492819052916020600282851615610100026000190190921691909104601f9081018290047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6908101939290919086019083901061078657805160ff19168380011785555b5061075b9291505b808211156106285760008155600101610417565b61029160045461031e565b610640604080516020818101835260009091528151808301909252600582527f776f726b730000000000000000000000000000000000000000000000000000009082015261031e565b6106ae600054600160a060020a031661031e565b6106cb60043560048054829081101561000257506000526002027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b8101547f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c9190910154600160a060020a03919091169082565b6102b8600435600054600160a060020a03338116911614156107b65780600160a060020a0316ff5b6102b860008054600160a060020a03338116911614156107b6575b6004548110156107bb5760048054829081101561000257600082815282546002929092027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0154600160a060020a03169290918490811015610002576040516002919091027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c0154915082818181858883f1505050505060010161054a565b505050815481101561000257906000526020600020906002020160005081518154600160a060020a031916178155602091909101516001919091015550565b5090565b604080519115158252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156106a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b6040518083600160a060020a031681526020018281526020019250505060405180910390f35b820191906000526020600020905b8154815290600101906020018083116106ff57829003601f168201915b5050505050905061031e565b820191906000526020600020905b81548152906001019060200180831161073657829003601f168201915b505050505081565b50506003805474ff0000000000000000000000000000000000000000191660a060020a1790555b5050565b8280016001018555821561040f579182015b8281111561040f578251826000505591602001919060010190610798565b610002565b600054600160a060020a0316ff290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563",
    address: "0xfdf2ed1e10d30d15a94d346ab9485a33b1dfe0bb",
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
