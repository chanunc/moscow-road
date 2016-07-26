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
      uint _index = crowdfunds.length++;
      crowdfunds[_index] = CrowdfundStructure({
        addr: crowdfund_address
      });

      // Set initial conditions
      Crowdfund crowdfund = Crowdfund(crowdfund_address);
      crowdfund.setRepoOwner(_repo_owner, _repo_web_address);
      crowdfund.setIndex(_index);
      crowdfund.setOrigin(this);
      return crowdfund_address;
  }

  function deleteContract(uint index) returns (string) {

    if (index != crowdfunds.length-1){
      CrowdfundStructure temp = crowdfunds[crowdfunds.length-1];
      crowdfunds[crowdfunds.length-1] = crowdfunds[index];
      crowdfunds[index] = temp;
    }

    delete crowdfunds[crowdfunds.length-1];
    crowdfunds.length--;
    return "address deleted";
  }

  function getNumberOfContracts() returns (uint256){
    return crowdfunds.length;
  }

  function getContract (uint i) constant returns (address){
    return crowdfunds[i].addr;
  }

  function sayHi() constant returns (string){
    return "Hello there";
  }

}
