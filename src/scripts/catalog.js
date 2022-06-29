export const catalog = (harvest) => {
    let html = ""
    for (const food of harvest) {
        html += `<section class="plant">${food.type}</section>`
    }
    return html
}
