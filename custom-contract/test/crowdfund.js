contract('Crowdfund', function(accounts) {
  it("Initial crowdfund settings should match", function(done) {

    var crowdfund = Crowdfund.at(Crowdfund.deployed_address);
    var repo_owner = accounts[1];

    // Check the repository owner's address matches the stored address
    Crowdfund.new(repo_owner).then(
      function(crowdfund){
      crowdfund.repo_owner.call().then(
        function(repoOwner){
          assert.equal(accounts[1], repoOwner, "Repository owners account not store properly");
          done();
        }).catch(done);
      }).catch(done);

  });

  it("A single funder should be able to send funds", function(done) {

    var crowdfund = Crowdfund.at(Crowdfund.deployed_address);
    var repo_owner = accounts[1];
    var funder1 = accounts[2];

    // Check the repository owner's address matches the stored address
    Crowdfund.new(repo_owner).then(
        function(){
          web3.eth.sendTransaction({value:1, from:funder1, to:crowdfund.address, gas:1000000});
        }).then(
        function(){
          assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), 1, "balance should match");
          done();
        }).catch(done);
  });

  it("Two funders should be able to send funds", function(done) {

    var crowdfund = Crowdfund.at(Crowdfund.deployed_address);
    var repo_owner = accounts[1];
    var funder1 = accounts[2];
    var funder2 = accounts[3];

    var initial = web3.eth.getBalance(crowdfund.address).toNumber();

    Crowdfund.new(repo_owner).then(
        function(){
          web3.eth.sendTransaction({value:1, from:funder1, to:crowdfund.address, gas:1000000});
        }).then(
        function(){
          assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), initial+1, "balance should be 1");
        }).then(
        function(){
          web3.eth.sendTransaction({value:1, from:funder2, to:crowdfund.address, gas:1000000});
        }).then(
        function(){
          assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), initial+2, "balance should be 2");
          done();
        }).catch(done);
  });

  it("Check that a fund with one funder can be cancelled", function(done){

    var crowdfund = Crowdfund.at(Crowdfund.deployed_address);
    var repo_owner = accounts[1];
    var funder1 = accounts[2];

    var initial_contract

    Crowdfund.new(repo_owner, { from: funder1}).then(

      function(crowdfund){

      initial_contract = web3.eth.getBalance(crowdfund.address).toNumber();

      crowdfund.greet.call().then(
        function(greeting){
          assert.equal(greeting, "works", "Contract should still be active");
        }).then(
        function(){
          web3.eth.sendTransaction({value:1, from:funder1, to:crowdfund.address, gas:1000000});
          assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), initial_contract+1 , "Initial contract balance should now be incremented by 1 ether");
        }).then(
        function(){
          return crowdfund.cancel({from: repo_owner});
        }).then(
        function(){
          assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), initial_contract , "Balance should now be decremented by back to the intial value");
          done();
        }).catch(done);
    });
  });

  it("Check that a fund with one funders can be cancelled", function(done){

    var crowdfund = Crowdfund.at(Crowdfund.deployed_address);
    var repo_owner = accounts[1];
    var funder1 = accounts[2];
    var funder2 = accounts[3];

    var initial_contract

    Crowdfund.new(repo_owner, { from: funder1}).then(

      function(crowdfund){

      initial_contract = web3.eth.getBalance(crowdfund.address).toNumber();

      crowdfund.greet.call().then(
        function(greeting){
          assert.equal(greeting, "works", "Contract should still be active");
        }).then(
        function(){
          web3.eth.sendTransaction({value:1, from:funder1, to:crowdfund.address, gas:1000000});
          assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), initial_contract+1 , "Initial contract balance should now be incremented by 1 ether");
        }).then(
        function(){
          web3.eth.sendTransaction({value:1, from:funder2, to:crowdfund.address, gas:1000000});
          assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), initial_contract+2 , "Initial contract balance should now be incremented by 1 ether");
        }).then(
        function(){
          return crowdfund.cancel({from: repo_owner});
        }).then(
        function(){
          assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), initial_contract , "Balance should now be decremented by back to the intial value");
          done();
        }).catch(done);
    });
  });
});



// contract('Example', function(accounts){
//   it("should assert true", function(done) {
//     var example = Example.at(Example.deployed_address);
//
//     example.value.call().then(function(value){
//       assert .equal(value, 0, "Value should be zero after deployment");
//     }).then(function() {
//       return example.setValue(5); //send a transaction
//     }).then(function(tx){
//       return example.value.call();
//     }).then(function(value){
//       assert.equal(value, 5, "Value should be five");
//     })
//     .then(done).catch(done);
//   });
// });

// console.log(web3.eth.getBalance(accounts[0]).toNumber());
// console.log(web3.eth.getBalance(accounts[1]).toNumber());
// console.log(web3.eth.getBalance(accounts[2]).toNumber());
//
// var crowdfund = Crowdfund.at(Crowdfund.deployed_address);
// console.log(web3.eth.getBalance(Crowdfund.deployed_address).toNumber());
// web3.eth.sendTransaction({value:1, from:accounts[0], to:Crowdfund.deployed_address, gas:1000000});
// console.log(web3.eth.getBalance(Crowdfund.deployed_address).toNumber());
// done();
