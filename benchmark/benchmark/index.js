import Benchmark from "benchmark";
import { CartRmPropNew } from "./car-rm-prop-new.js";
import { CartRmPropOld } from "./car-rm-prop-old.js";
import { CartRmPropReduce } from "./car-rm-prop-reduce.js";
import { CartIdNew } from "./cart-id-new.js";
import { CartIdOld } from "./cart-id-old.js";
import { CartPriceNew } from "./cart-price-new.js";
import { CartPriceOld } from "./cart-price-old.js";
import database from "../database.js";

const suite = new Benchmark.Suite();

// suite
//   .add("Cart#UUID", function () {
//     new CartIdOld();
//   })
//   .add("Cart#CRYPTO", function () {
//     new CartIdNew();
//   })
//   .on("cycle", (event) => console.log(String(event.target)))
//   .on("complete", function (event) {
//     console.log(`Fastest is ${this.filter("fastest").map("name")}`);
//   })
//   .run();

/**
  Cart#UUID x 1,929,547 ops/sec ±0.43% (95 runs sampled)
  Cart#CRYPTO x 5,659,203 ops/sec ±0.34% (95 runs sampled)
  Fastest is Cart#CRYPTO
 */

const data = {
  products: [
    {
      id: "aew",
      n: undefined,
      a: null,
      abc: undefined,
      b: 123,
    },
    {
      id: "aew",
      n: undefined,
      a: null,
      abc: undefined,
      b: 123,
    },
  ],
};

// suite
//   .add("Cart#MapReduce", function () {
//     new CartRmPropOld(data);
//   })
//   .add("Cart#For", function () {
//     new CartRmPropNew(data);
//   })
//   .add("Cart#Reduce", function () {
//     new CartRmPropReduce(data);
//   })
//   .on("cycle", (event) => console.log(String(event.target)))
//   .on("complete", function (event) {
//     console.log(`Fastest is ${this.filter("fastest").map("name")}`);
//   })
//   .run({ async: true });

/**
  Cart#MapReduce x 473,552 ops/sec ±0.44% (92 runs sampled)
  Cart#For x 1,578,195 ops/sec ±0.36% (92 runs sampled)
  Cart#Reduce x 1,464,381 ops/sec ±0.44% (92 runs sampled)
  Fastest is Cart#For
 */

// suite
//   .add("Cart#PriceReduce", function () {
//     new CartPriceOld(database);
//   })
//   .add("Cart#PriceFor", function () {
//     new CartPriceNew(database);
//   })
//   .on("cycle", (event) => console.log(String(event.target)))
//   .on("complete", function (event) {
//     console.log(`Fastest is ${this.filter("fastest").map("name")}`);
//   })
//   .run({ async: true });

/**
  Cart#PriceReduce x 4,288,959 ops/sec ±0.51% (89 runs sampled)
  Cart#PriceFor x 3,475,558 ops/sec ±0.50% (97 runs sampled)
  Fastest is Cart#PriceReduce
*/
