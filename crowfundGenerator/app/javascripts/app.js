var accounts;
var account;
var owner;
var balance;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  // var meta = MetaCoin.deployed();
  // meta.getBalance.call(account, {from: account}).then(function(value) {
  //   var balance_element = document.getElementById("balance");
  //   balance_element.innerHTML = value.valueOf();
  // }).catch(function(e) {
  //   console.log(e);
  //   setStatus("Error getting balance; see log.");
  // });
};

function refreshContractBalance() {

    var crowdfund = Crowdfund.deployed();
    var balance = web3.eth.getBalance(Crowdfund.deployed_address).toNumber();
    var balance_element = document.getElementById("contract_balance");
    balance_element.innerHTML = balance;

    var address_element = document.getElementById("contract_address");
    var owner_element = document.getElementById("repo_owner");
    var location_element = document.getElementById("issue_location");


    address_element.innerHTML = Crowdfund.deployed_address;
    // crowdfund.getRepoOwner.call().then(
    //   function (address) {
    //       owner_element.innerHTML = address;
    //   });
    // crowdfund.getRepoAddress.call().then(
    //   function (address) {
    //       location_element.innerHTML = address;
    //   });

};



function sendCoin() {
  var meta = MetaCoin.deployed();

  var amount = parseInt(document.getElementById("amount").value);
  var receiver = document.getElementById("receiver").value;

  setStatus("Initiating transaction... (please wait)");

  meta.sendCoin(receiver, amount, {from: account}).then(function() {
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

function pump() {
  var crowdfund = Crowdfund.deployed();

  var amount = 1;
  var receiver = Crowdfund.deployed_address;

  // setStatus("Initiating transaction... (please wait)");

  refreshContractBalance();
  web3.eth.sendTransaction({value:amount, from:account, to:receiver, gas:1000000});
  refreshContractBalance();

}


function cancel() {
  var crowdfund = Crowdfund.deployed();
  crowdfund.cancel({from: owner}).then(function() {
    refreshContractBalance();
  });
}

function sendTo() {
  var crowdfund = Crowdfund.deployed();
  crowdfund.sendTo(recepient, {from: owner}).then(function() {
    refreshContractBalance();
  });
}

function createCrowdfund() {

    var factory = Factory.deployed();
    var crowdfund_address;
    var crowdfund;

    return factory.sayHi.call()
      .then(function (message){
        return console.log(message);
      }).then(function() {
        return factory.createContract(owner, "https://github.com/timothyylim/moscow-road/issues/1", {from: owner});
      }).then(function() {
        return factory.getContract(0, {from: owner});
      }).then(function (address){
        crowdfund = Crowdfund.at(address);
        return crowdfund;
      }).then(function (crowdfund){
        return displayCrowdfund(crowdfund);
      }).then(function(){
        return factory.getNumberOfContracts.call();
      }).then(function(num){
        return console.log(num.toNumber());
      });
};

function displayCrowdfund(crowdfund) {
  crowdfund.getRepoOwner.call().then(function (message){console.log(message);});
  crowdfund.getRepoAddress.call().then(function (message){console.log(message);});

  var repoOwner;
  var crowdfundDiv = $('<div></div>');
  crowdfundDiv.append('<h3>issue</h3>')

  return crowdfund.getRepoOwner.call()
    .then(function(message){
      return message;
    }).then(function (message){
      return crowdfundDiv.append("<p>Owner: </p>").append($("<p>").html(message));
    }).then(function(){
      return crowdfund.getRepoAddress.call();
    }).then(function(message){
      return message;
    }).then(function (message){
      return crowdfundDiv.append("<p>Location: </p>").append($("<a>").html(message));
    }).then(function(){
      return $(".container").append(crowdfundDiv);
    });
}

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    owner = accounts[0];
    funder1 = accounts[1];
    funder2 = accounts[2];
    recepient = accounts[3];

    // console.log(web3.eth.getBalance(Factory.deployed_address).toNumber());
    // console.log(Crowdfund.deployed().greet.call({from : account}));
    // console.log(Crowdfund.deployed().getRepoOwner());

    // setOwner();
    // refreshBalance();
    // refreshContractBalance();
  });
}
