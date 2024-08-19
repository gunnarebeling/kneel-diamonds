export const Styles = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles= await response.json();
    let html = `<div id="style-choices">`
    for (const style of styles) {
        html += `<input type="radio" name="style" value=${style.id}>${style.style} `
        
    }
    return html
}