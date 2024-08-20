import { OrderCreation } from "./transientState.js"

const submitEvent = (event) =>{
    if (event.target.id === "submit"){
        const groups = ["metals","sizes", "styles"]
        let valid = true;

        groups.forEach(group => {
            const selected = document.querySelector(`input[name="${group}"]:checked`);
            if (!selected) {
            valid = false;
            alert(`Please select all fields.`); // You can also show error messages in the form
            }
        
            
        });
    if (valid) {
        OrderCreation();
        
    }
    }
}

export const SubmitButton = () =>{
    document.addEventListener("click", submitEvent)
    return `<div>
                <button id="submit">Submit</button>
            </div>`

}