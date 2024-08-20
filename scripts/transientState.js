let transientState = {
    sizeId: 0,
    styleId:0,
    metalId: 0 ,
}

export const setMetalChoice = (currentState) => {
    transientState.metalId = currentState;
}

export const setSizeChoice = (currentState) => {
    transientState.sizeId = currentState
}
export const setStyleChoice = (currentState) => {
    transientState.styleId = currentState
}

export const OrderCreation = async () => {
    const postOptions = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)
    const newOrder = new CustomEvent("newOrder")
    document.dispatchEvent(newOrder)

    
}