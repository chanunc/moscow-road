contract('Factory', function(accounts) {

  it("create a new contract", function(done) {

    Factory.new({from: accounts[0]}).then(
      function(factory) {
        factory.createContract()
      }).catch(done);
  });


});
