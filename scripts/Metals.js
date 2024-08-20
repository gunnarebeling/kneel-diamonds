import { setMetalChoice } from "./transientState.js";

const handleMetalChoice = (event) => {
    if (event.target.name === "metals") {
        setMetalChoice(parseInt(event.target.value))
    }
}
document.addEventListener("change", handleMetalChoice)

export const Metals = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json();
    let html = `<div id="metal-choices" >`
    for (const metal of metals) {
        html += `<div class="form-check">
                    <input type="radio" name="metals" class="form-check-input me-1" value=${metal.id}> ${metal.metal} 
                </div>`
        
    }
    return html

}