# target-block

A module to check for a specific block height to reach
---
Just need to define your RPC node(provider) and number of confirmations you wish to wait for. :smirk:


## Get started

1. Create your project: `mkdir project`
2. Enter your project folder: `cd project`
3. Download and install `target-block` package: `npm i target-block`
4. Create new file in your project. for example: `index.js`
5.Use the `target-block` package into your codes like this:

```javascript
const waitForTargetBlock = require('target-block');
const RPC_URL = "https://singapore.rpc.blxrbdn.com";
const howManyConfirmations = 5;

waitForTargetBlock(howManyConfirmations, RPC_URL)
.then((result) => {
    console.log("Target block reached:", result);
})
.catch((error) => {
    console.log("Error:", error);
})
```

<div class="warning" style='padding:0.1em; background-color:#E9D8FD; color:#69337A'>
<span>
<p style='margin-top:1em; text-align:center'>
<b>Main motivation behind target-block</b></p>
<p style='margin-left:1em;'>
I was trying to verify my contract programatically on Sepolia testnet. When I supposed to <span style='color:green'>deploy and verify smart contract</span> on block explorers(such as etherscan.io) I noted that, <span style='color:red'>we can't do both  at the same time!</span><br/><br/>
<b>So how to figure it out??<br/>
How to wait for a certain block heigth??</b><br/><br/>
Easily with the help of <i style='color: red;'>target-block package!!</i>

</p>
<p style='margin-bottom:1em; margin-right:1em; text-align:right; font-family:Georgia'> <b>- Bahador Ghadamkheir</b> <i>(target-block first release, 2023-07)</i>
</p></span>
</div>

---

🕊️ **Helping to getting even better**

If you found any issues, or have any recommendation on this package, I would be more than happy to see your comments. *Also pull requests are very welcomed.*
    