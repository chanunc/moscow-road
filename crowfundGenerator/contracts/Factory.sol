import "Crowdfund.sol";

contract Factory {

  // Array to hold generated crowdfund contracts
  CrowdfundStructure[] public crowdfunds;

  // Simple structure to hold Crowfunds, extensible
  struct CrowdfundStructure {
    address addr;
  }

  function Factory(){}

  function createContract (address _repo_owner, string _repo_web_address) returns (address){

      address crowdfund_address = new Crowdfund();

      crowdfunds[crowdfunds.length++] = CrowdfundStructure({
        addr: crowdfund_address
      });

      // Set initial conditions
      Crowdfund crowdfund = Crowdfund(crowdfund_address);
      crowdfund.setRepoOwner(_repo_owner, _repo_web_address);

      return crowdfund_address;
  }

  function getNumberOfContracts() constant returns (uint256){
    return crowdfunds.length;
  }

  function getContract (uint i) constant returns (address){
    return crowdfunds[i].addr;
  }

  function sayHi() constant returns (string){
    return "Hello there";
  }
}
