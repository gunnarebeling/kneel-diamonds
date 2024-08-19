export const Sizes = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json();
    let html = `<div id="size-choices">`
    for (const size of sizes) {
        html += `<input type="radio" name="sizes" value=${size.id}>${size.carets} `
        
    }
    return html
}