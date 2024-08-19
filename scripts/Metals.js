export const Metals = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json();
    let html = `<div id="metal-choices">`
    for (const metal of metals) {
        html += `<input type="radio" name="metals" value=${metal.id}>${metal.metal} `
        
    }
    return html
}