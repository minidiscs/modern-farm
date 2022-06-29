import { createPlan } from "./plan.js"
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

console.log("Welcome to the main module")

const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const fieldArray = usePlants()

const harvest = harvestPlants(fieldArray)

let html = document.querySelector(".container")

html.innerHTML = catalog(harvest)
