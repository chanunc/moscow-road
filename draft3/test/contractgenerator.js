contract('Factory', function(accounts) {

  it("create a new contract", function(done) {

  Factory.new({from: accounts[0]}).then(
    function(factory) {
      var crowdfund_address;
      factory.createContract(accounts[0],"some address").then(
        function(address) {
          crowdfund_address = address;
        }).then(
        function() {
          var crowdfund = Crowdfund.at(crowdfund1_address);
          crowdfund.greet.call();
          return factory.getNumber();
        }).then(
        function(number) {
          assert.equal(number, 1, "One contract should have been created");
          done();
        }).catch(done);
    }).catch(done);
  });


});
