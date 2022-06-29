//function will return array of seed objects
export const harvestPlants = (field) => {
    let harvest = []
    for (const plant of field) {
        if (plant.type === "Corn") {
            for (let i=0; i < (plant.output / 2); i++) {
                harvest.push(plant)
            }   
        }
        else {
            for (let i=0; i < plant.output; i++) {
                harvest.push(plant)
            }   
        }
    }
    return harvest
}