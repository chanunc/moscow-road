contract Factory {
  bytes32[] Names;
  address[] newContracts;

  function Factory(){}
  /*function createContract (bytes32 name, string message) {
      address newContract = new Contract(name, message);
      newContracts.push(newContract);
  }

  function getName (uint i) {
      Contract con = Contract(newContracts[i]);
      Names[i] = con.Name();
  }*/

  /* debug function */
  function getAddress(uint i) constant returns (address) {
      return newContracts[i];
  }

  function sayHi() constant returns (string){
    return "Fuck you, motherfucker";
  }
}

/*contract Contract {

  bytes32 public Name;
  string public Message;

  function Contract (bytes32 name, string message) {
    Name = name;
    Message = message;
  }

}*/
