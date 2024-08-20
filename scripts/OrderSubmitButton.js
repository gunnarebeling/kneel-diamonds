import { OrderCreation } from "./transientState.js"

const submitEvent = (event) =>{
    if (event.target.id === "submit"){
        OrderCreation()
    }
}

export const SubmitButton = () =>{
    document.addEventListener("click", submitEvent)
    return `<div>
                <button id="submit">Submit</button>
            </div>`
}