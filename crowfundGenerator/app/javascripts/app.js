var accounts;
var account;
var owner;
var balance;
var cf;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  console.log("balance: ");
  console.log(web3.eth.getBalance(cf.address).toNumber());
};


function pump() {
  
  var amount = 1;
  var receiver = cf.address;

  web3.eth.sendTransaction({value:amount, from:owner, to:receiver, gas:1000000});
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
        cf = crowdfund;
        return displayCrowdfund(crowdfund);
      }).then(function(){
        return factory.getNumberOfContracts.call();
      }).then(function(num){
        // return console.log(num.toNumber());
        return;
      });
};

function displayCrowdfund(crowdfund) {
  // crowdfund.getRepoOwner.call().then(function (message){console.log(message);});
  // crowdfund.getRepoAddress.call().then(function (message){console.log(message);});
  var repoOwner;
  var crowdfundDiv = $('<div class="issue"></div>');


  // console.log(web3.eth.getBalance(crowdfund.address).toNumber());


  crowdfundDiv.append('<b>issue</b>' + ' ' + crowdfund.address + '</br>')
  crowdfundDiv.append('Balance: ' + ' ' + web3.eth.getBalance(crowdfund.address).toNumber())

  return crowdfund.getRepoOwner.call()
    .then(function(message){
      return message;
    }).then(function (message){
      return crowdfundDiv.append("<p>Owner: </p>" + message);
    }).then(function(){
      return crowdfund.getRepoAddress.call();
    }).then(function(message){
      return message;
    }).then(function (message){
      return crowdfundDiv.append("<p>Location: </p>" + message);
    }).then(function(){
      return $(".container").append(crowdfundDiv);
    });
}

function refresh(){

  $(".container").empty();
  var factory = Factory.deployed();

  return factory.getNumberOfContracts.call()
    .then(function(message){
      var len = message.toNumber();
      for (var i = 0; i < len; i++){
          factory.getContract(i).
          then(function(address){

            crowdfund = Crowdfund.at(address);
            return crowdfund;
          }).then(function (crowdfund){
            return displayCrowdfund(crowdfund);

          });
      }

      return;
    });


}

function printIndicies(){

  console.log("printing");

  var factory = Factory.deployed();

  return factory.getNumberOfContracts.call()
    .then(function(message){
      var len = message.toNumber();
      for (var i = 0; i < len; i++){
          factory.getContract(i).
          then(function(address){

            crowdfund = Crowdfund.at(address);
            return crowdfund;
          }).then(function (crowdfund){
            return crowdfund.getIndex();
          }).then(function(index){
            console.log(index.toNumber());
            return;
          });
      }

      return;
    });
}

function deleteContract(){
  console.log("deleting");

  // get the first contract
  var factory = Factory.deployed();

  return factory.getContract(0)
    .then(function(address){
      crowdfund = Crowdfund.at(address);
      crowdfund.destroySelf({from: owner});
    })
}



window.onload = function() {


  refresh();

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
