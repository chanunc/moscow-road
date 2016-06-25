contract('Crowdfund', function(accounts) {
  it("Initial crowdfund settings should match", function(done) {

    var crowdfund = Crowdfund.at(Crowdfund.deployed_address);
    var repo_owner = accounts[1];
    var funder1 = accounts[2];
    var funder2 = accounts[3];
    var recepient = accounts[4];

    // Check the repository owner's address matches the stored address
    Crowdfund.new(repo_owner).then(
      function(crowdfund){
      crowdfund.repo_owner.call().then(
        function(repoOwner){
          assert.equal(accounts[1], repoOwner, "Repository owners account not store properly");
        }).then(
        function(){
          web3.eth.sendTransaction({value:1, from:funder1, to:crowdfund.address, gas:1000000});
        }).then(
        function(){
          assert.equal(web3.eth.getBalance(crowdfund.address).toNumber(), 1, "balance should match1");
          done();
        }).catch(done);
      }).catch(done);




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
