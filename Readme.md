![Retriever Banner](./assets/banner.png)

# Retriever
#### The RNS SDK

Not to be confused with RNS itself. That is a dApp on the JUNO Network which can be found [here](https://rns.jackaldao.com).

## Installation
```
npm install retriever
```

## Use

Retriever will use data from the RNS contract to resolve the name. In this example we assume `jackal.rns` is a name already registered with RNS.

### resolveName(name: string, prefix: string, contractAddress: string <Optional>)
#### name 
The name you wish to resolve without the suffix of `.rns`. For example resolving `jackal.rns` would require `jackal` in the name field.
#### prefix
The network you wish to resolve from. Every cosmos address starts with its' own prefix. For example, Juno uses `juno`, Secret uses `secret` and Osmosis uses `osmo`.
#### contractAddress 
Overrides default contract address to query from.

### Example use-case
```javascript
const retriever = require("retriever");

retriever.resolveName("jackal", "juno").then((res) => {
    console.log(res); // juno1...
}).catch((err) => {
    console.error(err); // name not found.
});
```

