# Node Express clustering

Example of clustering implementation in a Express Node.js App.


### Installation

*node-express-clustering* requires [Node.js](https://nodejs.org/) v10.14.10+ to run.

Install the dependencies and devDependencies.

```sh
$ cd node-express-clustering
$ npm install
```

## Running the tests

Start the server in singlecore mode:

```sh
$ npm run start-singlecore
```

Run the tests doing requests in cascade or parallel:
```sh
$ npm run test-cascade
$ npm run test-parallel
```

Stop the server and start it again in multicore mode:

```sh
$ npm run start-multicore
```

Run the tests doing requests in cascade or parallel:
```sh
$ npm run test-cascade
$ npm run test-parallel
```


### Results

Cascade requests tests results:

| Cascade Test |      Singlecore     |      Multicore      | Difference |
|:------------:|:-------------------:|:-------------------:|:----------:|
|  10 requests |      6403.801ms     |      7620.085ms     |    +18%    |
|  20 requests |  12027.581ms (+87%) |  12740.468ms (+67%) |     +5%    |
|  30 requests | 18013.031ms (+181%) | 18422.040ms (+141%) |     +2%    |


Parallel requests tests results:

| Parallel Test |  Singlecore |  Multicore | Difference |
|:-------------:|:-----------:|:----------:|:----------:|
|  10 requests  |  6259.903ms | 3812.932ms |    -39%    |
|  20 requests  | 12175.566ms | 6148.470ms |    -50%    |
|  30 requests  | 17551.717ms | 8309.466ms |    -52%    |

## Inspired by

* **Sleva** - *A simple Koa clustering example.* - [node-server-clustering](https://github.com/micheleriva/node-server-clustering)
