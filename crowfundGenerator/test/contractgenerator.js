contract('Factory', function(accounts) {

  // //Show that a contract can be generated by the factory
  // it("create a new contract", function(done) {
  //
  // Factory.new({from: accounts[0]}).then(
  //
  //   function(factory) {
  //
  //     factory.createContract(accounts[0],"some address").then(
  //       function(){
  //         return factory.getNumberOfContracts();
  //       }).then(
  //       function(number) {
  //         assert.equal(number, 1, "One contract should have been created");
  //         done();
  //
  //       }).catch(done);
  //   }).catch(done);
  //
  // });

  // Attempt to get a generated contract to say hello
  // it("test a generated contract", function() {
  //   return Factory.new({ from: accounts[0] })
  //     .then(function(factory) {
  //       factory.createContract(accounts[0], "descriptor text", { from: accounts[0] });
  //       return factory;
  //     }).then(function(factory){
  //       return factory.getContract(0,{ from: accounts[0] });
  //     }).then(function(address) {
  //       var crowdfund = Crowdfund.at(address);
  //       return crowdfund.greet.call();
  //     })
  //     .then(function(greeting) {
  //       assert.equal(greeting, "works", "Check that the contract can say hi");
  //     })
  // });
  //
  // // Check that the site can be stored
  // it("Initial conditions should match", function() {
  //   var fact;
  //   return Factory.new({ from: accounts[0] })
  //     .then(function(factory) {
  //       fact = factory;
  //       factory.createContract(accounts[0], "descriptor text", { from: accounts[0] });
  //       return factory;
  //     }).then(function(factory){
  //       return factory.getContract(0,{ from: accounts[0] });
  //     }).then(function(address) {
  //       var crowdfund = Crowdfund.at(address);
  //       return crowdfund.getRepoAddress.call();
  //     }).then(function(address) {
  //       assert.equal(address, "descriptor text", "Check that the repo address is set correctly");
  //       return fact;
  //     }).then(function(factory){
  //       return factory.getContract(0,{ from: accounts[0] });
  //     }).then(function(address) {
  //       var crowdfund = Crowdfund.at(address);
  //       return crowdfund.getRepoAddress.call();
  //     }).then(function(address) {
  //       assert.equal(address, "descriptor text", "Check that the repo address is set correctly");
  //     })
  // });
  //
  //
  // it("A single funder should be able to send funds", function() {
  //
  //   var fact;
  //   var repo_owner = accounts[1];
  //   var funder1 = accounts[2];
  //
  //   return Factory.new({ from: accounts[0] })
  //     .then(function(factory) {
  //       fact = factory;
  //       factory.createContract(accounts[0], "descriptor text", { from: accounts[0] });
  //       return factory;
  //     }).then(function(factory){
  //       return factory.getContract(0,{ from: accounts[0] });
  //     }).then(function(address) {
  //       var crowdfund = Crowdfund.at(address);
  //       web3.eth.sendTransaction({value:1, from:funder1, to:crowdfund.address, gas:1000000});
  //       return crowdfund;
  //     }).then(function(crowdfund) {
  //       assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), 1, "balance should match");
  //     })
  // });
  //
  // it("Cancel a crowdfund", function() {
  //
  //   var fact;
  //   var repo_owner = accounts[1];
  //   var funder1 = accounts[2];
  //
  //   return Factory.new({ from: accounts[0] })
  //     .then(function(factory) {
  //       fact = factory;
  //       factory.createContract(repo_owner, "descriptor text", { from: accounts[0] });
  //       return factory;
  //     }).then(function(factory){
  //       return factory.getContract(0,{ from: accounts[0] });
  //     }).then(function(address) {
  //       var crowdfund = Crowdfund.at(address);
  //       web3.eth.sendTransaction({value:1, from:funder1, to:crowdfund.address, gas:1000000});
  //       return crowdfund;
  //     }).then(function(crowdfund) {
  //       assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), 1, "balance should match");
  //       return crowdfund;
  //     }).then(function(crowdfund) {
  //       return crowdfund.cancel({from: repo_owner}).then(function() {
  //         assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), 0, "balance should match");
  //       })
  //     })
  // });
  //
  //
  // it("Release funds of a successful crowdfund", function() {
  //
  //   var fact;
  //   var repo_owner = accounts[1];
  //   var funder1 = accounts[2];
  //   var funder2 = accounts[3];
  //   var recepient = accounts[4];
  //
  //
  //   return Factory.new({ from: accounts[0] })
  //     .then(function(factory) {
  //       fact = factory;
  //       factory.createContract(repo_owner, "descriptor text", { from: accounts[0] });
  //       return factory;
  //     }).then(function(factory){
  //       return factory.getContract(0,{ from: accounts[0] });
  //     }).then(function(address) {
  //       var crowdfund = Crowdfund.at(address);
  //       web3.eth.sendTransaction({value:1, from:funder1, to:crowdfund.address, gas:1000000});
  //       web3.eth.sendTransaction({value:1, from:funder2, to:crowdfund.address, gas:1000000});
  //       return crowdfund;
  //     }).then(function(crowdfund) {
  //       assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), 2, "balance should match");
  //       return crowdfund;
  //     }).then(function(crowdfund){
  //       console.log("start");
  //       console.log(web3.eth.getBalance(recepient));
  //       return crowdfund.sendTo(recepient, {from: repo_owner}).then(function() {
  //         assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), 0, "balance should match");
  //         console.log(web3.eth.getBalance(recepient));
  //       })
  //     })
  // });

// TO DELETE
  // it("Retrieve item from a map", function(){
  //   var fac;
  //   var account_zero = accounts[0];
  //
  //   return Factory.new({ from: accounts[0] })
  //     .then(function(factory) {
  //         factory.createContract2(accounts[0], "moscow-road","issue1", { from: accounts[0] })
  //         return factory;
  //       }).then(function(factory){
  //           return factory.getContractByName.call("moscow-road");
  //       }).then(function(addr){
  //           var crowdfund = Crowdfund.at(addr);
  //           return crowdfund;
  //       }).then(function(crowdfund){
  //          return crowdfund.getRepoAddress.call();
  //       }).then(function(message){
  //           assert.equal(message, "issue1", "Message failed");
  //       })
  //   })
  //
  // it("Retrieve an item from an array in a map", function(){
  //
  //   return Factory.new({from: accounts[0]})
  //     .then(function(factory){
  //       factory.createContract3(accounts[0], "moscow-road","issue1", { from: accounts[0] })
  //       return factory
  //     }).then(function(factory){
  //       return factory.getContractFromArray.call("moscow-road",0);
  //     }).then(function(addr){
  //         var crowdfund = Crowdfund.at(addr);
  //         return crowdfund;
  //     }).then(function(crowdfund){
  //        return crowdfund.getRepoAddress.call();
  //     }).then(function(message){
  //         assert.equal(message, "issue1", "Message failed");
  //     })
  // })
  //
  // it("Retrieve the length of an array of a map", function(){
  //
  //   return Factory.new({from: accounts[0]})
  //     .then(function(factory){
  //       factory.createContract3(accounts[0], "moscow-road","issue1", { from: accounts[0] })
  //       return factory
  //     }).then(function(factory){
  //       factory.createContract3(accounts[0], "moscow-road","issue2", { from: accounts[0] })
  //       return factory
  //     }).then(function(factory){
  //       return factory.getLengthOfArray.call("moscow-road");
  //     }).then(function(len){
  //       assert.equal(len, 2, "Lengths should equal")
  //     })
  // })


  it("Creates a contract then cancels it", function(){

    var fact;
    var cf;

    return Factory.new({from: accounts[0]})
      .then(function(factory){
        fact = factory;
        return factory.getLengthOfArray.call("moscow-road");
      }).then(function(len){
          assert.equal(len.toNumber(), 0, "Array should be empty")
          return fact;
      }).then(function(factory){
        factory.createContract3(accounts[0], "moscow-road","issue1", { from: accounts[0] })
        return factory
      }).then(function(factory){
        factory.createContract3(accounts[0], "moscow-road","issue2", { from: accounts[0] })
        return factory
      }).then(function(factory){
        return factory.deleteContract.call();
      }).then(function(len){
        assert.equal(len.toNumber(), 1, "Failed deleting contract")
      })
  })


  // it("Create a contract and adds it to the map", function(){
  //   var fact;
  //
  //   return Factory.new({from: accounts[0]})
  //     .then(function(factory){
  //       factory.createContractTest("moscow-road",accounts[0],"timothyylim.github.io");
  //       return factory;
  //     }).then(function(factory){
  //       return factory.getContractTest("moscow-road", 0,{from: accounts[0]});
  //     }).then(function(addr){
  //       console.log(addr);
  //       // var cf = Crowdfund.at(addr);
  //     })
  //     // .then(function(greeting) {
  //     //   assert.equal(greeting, "works", "Check that the contract can say hi");
  //     // })
  // });
});
