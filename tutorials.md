simple escrow:

https://blog.stakeventures.com/articles/from-contract-to-smart-contract-in-ethereum


https://medium.com/@ConsenSys/a-101-noob-intro-to-programming-smart-contracts-on-ethereum-695d15c1dab4#.vnnvjeuym

greeter tutorial:

```
Install geth: bash <(curl -L https://install-geth.ethereum.org)
Launch geth in developer mode so that we do not need to fetch the entire blockchain and can mine our own test-ether: geth --dev console
Create a test account from geth console : personal.newAccount()
Check your account balance (should be 0): eth.getBalance(eth.accounts[0])
Start the miner and let it run: miner.start()
Attach to geth via a second terminal session: geth attach
Check that your account balance has increased: eth.getBalance(eth.accounts[0])
Go to the online solidity compiler/editor at https://chriseth.github.io/browser-solidity/. It defaults to a Greeter contract.
Copy and paste the greeter's Web3 deploy code to a text editor and replace /* var of type string here */ with "Hello World"
Copy and paste the updated code to geth and wait for the Contract mined!.. message
Test the contract with greeter.greet()
You can destroy the contract with greeter.kill.sendTransaction({from:eth.accounts[0]})
```


testing and debugging:

https://ethereum.gitbooks.io/frontier-guide/content/testing_contracts_and_transactions.html


eth.sendTransaction({from: secondary, to: tertiary, value: web3.toWei(1, "ether")});

miner.start(); admin.sleepBlocks(1); miner.stop();

web3.fromWei(eth.getBalance(tertiary), "ether");

https://ethereum.gitbooks.io/frontier-guide/content/sending_ether.html
