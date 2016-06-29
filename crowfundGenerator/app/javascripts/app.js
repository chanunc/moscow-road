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

function setOwner() {
    var crowdfund = Crowdfund.deployed();
    crowdfund.setRepoOwner(owner, "www.google.com",{from: account});
    // console.log(Crowdfund.deployed().getRepoOwner());
    // console.log(Crowdfund.deployed().getRepoAddress());

};

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
    account = accounts[0];
    owner = accounts[1];
    recepient = accounts[2];
    // console.log(web3.eth.getBalance(Crowdfund.deployed_address).toNumber());
    // console.log(Crowdfund.deployed().greet.call({from : account}));
    // console.log(Crowdfund.deployed().getRepoOwner());

    setOwner();
    refreshBalance();
    refreshContractBalance();
  });
}
