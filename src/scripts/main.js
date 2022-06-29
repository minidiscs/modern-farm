import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createSoybean } from "./seeds/soybean.js";


console.log("Welcome to the main module")

const yearlyPlan = createPlan()

console.log(yearlyPlan)

const asparagus = (createAsparagus())

console.log(asparagus)