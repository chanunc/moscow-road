contract('Factory', function(accounts) {
  it("should say hi", function(done) {
    // var factory = Factory.at(Factory.deployed_address);
    Factory.new().then(
      function(factory){
        factory.sayHi().then(
      function(message){
        done();
      });
      }
    );
  });

  it("create a new contract", function(done) {

    Factory.new().then(
      function(factory){
        factory.createContract("first guy", "hi", {from: accounts[1]});
        console.log(factory.deployed_address);
        return factory.getAddress(0, {from: accounts[1]});
      }).then(
      function(address){
        console.log(address);
      }).then(
      function(){
        done();
      }).catch(done);


  });

});
