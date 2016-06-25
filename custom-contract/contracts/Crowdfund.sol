contract Crowdfund {

  address public repo_owner;
  Funder[] public funders;

  struct Funder {
    address addr;
    uint amount;
  }

  function Crowdfund(
    address _repo_owner
  ){
    repo_owner = _repo_owner;
  }

  /* The function without name is the default function that is called whenever anyone sends funds to a contract */
  function(){
    uint amount = msg.value;
    funders[funders.length++] = Funder({
      addr: msg.sender,
      amount: amount
    });
  }

  /* If the agent decides the crowdfund is successful it is closed */
  function sendTo(address recepient){
    if (msg.sender == repo_owner)
      suicide(recepient); // Send all funds to seller
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
}
