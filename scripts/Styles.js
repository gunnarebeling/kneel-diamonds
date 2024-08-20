import { setStyleChoice } from "./transientState.js";

const styleChoiceEvent = (event) => {
    if (event.target.name === "styles") {
        setStyleChoice(parseInt(event.target.value))
    }
}
document.addEventListener("change", styleChoiceEvent)
export const Styles = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles= await response.json();
    let html = `<div id="style-choices">`
    const divStringArray = styles.map(style =>{
        return `<div class="style">
                    <input type="radio" name="styles"  value="${style.id}">${style.style}
                </div>` 
    })
    html += divStringArray.join("")
    html +=`</div>`
    return html
}