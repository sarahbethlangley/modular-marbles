const { createMarble } = require("./marbleMaker.js")
const { weaveBag } = require("./bagMaker.js")

const marble = createMarble("house-sized")
console.log(marble)

const bag = weaveBag("leather")
console.log(bag)