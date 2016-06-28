contract('Factory', function(accounts) {
  it("should say hi", function(done) {
    // var factory = Factory.at(Factory.deployed_address);
    Factory.new().then(
      function(factory){
        factory.sayHi().then(
      function(message){
        console.log(message);
        done();
      });
      }
    );
  });

  it("create a new contract", function(done) {

    var fac;
    Factory.new().then(
      function(factory){
        fac = factory;
        return factory.createContract(accounts[0],"some address");
      }).then(
      function(address) {
        console.log(address);
      }).then(
      function(){
        return factory.getContract(0);
      }).then(
      function(address){
        console.log(address);
        done();
      }).catch(done);


  });


  // it("create a new contract", function(done) {
  //
  //   Factory.new().then(
  //     function(factory){
  //       factory.createContract("first guy", "hi", {from: accounts[1]});
  //       console.log(factory.deployed_address);
  //       return factory.getContract(0, {from: accounts[1]});
  //     }).then(
  //     function(address){
  //       console.log(address);
  //     }).then(
  //     function(){
  //       done();
  //     }).catch(done);
  //
  //
  // });

});
