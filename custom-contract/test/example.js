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
