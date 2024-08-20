import { setSizeChoice } from "./transientState.js";

const sizeChoiceEvent = (event) =>{
    if (event.target.name === "sizes") {
        setSizeChoice(parseInt(event.target.value))
    }
}
document.addEventListener("change", sizeChoiceEvent)

export const Sizes = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json();
    let html = `<div id="size-choices">`
    const divStringArray = sizes.map(size =>{
        return `<div class="sizes">
                    <input type="radio" name="sizes" value="${size.id}">${size.carets}
                </div>` 
    })
    html += divStringArray.join("")
    html +=`</div>`
    return html
    
}