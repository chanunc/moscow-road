contract Crowdfund {

  address public repo_owner;
  string public repo_web_address;
  bool public repo_owner_set;
  Funder[] public funders;

  struct Funder {
    address addr;
    uint amount;
  }

  function Crowdfund(
  ){
    repo_owner = 0;
    repo_owner_set = false;
  }

  /* The function without name is the default function that is called whenever anyone sends funds to a contract */
  function(){
    uint amount = msg.value;
    funders[funders.length++] = Funder({
      addr: msg.sender,
      amount: amount
    });
  }

  function setRepoOwner(address _repo_owner, string _repo_web_address){
    if (repo_owner_set == false){
      repo_owner = _repo_owner;
      repo_web_address = _repo_web_address;
      repo_owner_set = true;
    }
    /*else*/
      /*throw;*/
  }


  /* If the agent decides the crowdfund is successful it is closed */
  function sendTo(address recepient){
    if (msg.sender == repo_owner)
      suicide(recepient); // Send all funds to recepient
    else
      throw;
  }

  /* Cancel the crowdfund and return money to funders*/
  function cancel() {
    if (msg.sender == repo_owner){
      for (uint i = 0; i < funders.length; ++i) {
        funders[i].addr.send(funders[i].amount);
      }
      suicide(repo_owner); //delete the contract and give whatever money is leftover to the owner of the repository
    }
    else
      throw;
  }

  /* debug function */
  function greet() constant returns (string) {
      return "works";
  }

  /* debug function */
  function getRepoOwner() constant returns (address) {
      return repo_owner;
  }

  /* debug function */
  function getRepoAddress() constant returns (string) {
      return repo_web_address;
  }
}
