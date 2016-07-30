module.exports = function(deployer) {
  deployer.deploy(AbstractFactory);
  deployer.autolink();
  deployer.deploy(Factory);
  deployer.deploy(Crowdfund);
};
