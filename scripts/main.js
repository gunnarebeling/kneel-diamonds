import { Metals } from "./Metals.js";
import { Sizes } from "./Sizes.js";
import { Styles } from "./Styles.js";

const render = async () =>{
    const metals = await Metals();
    const stylesHTML = await Styles()
    const sizesHTML = await Sizes();
     let HTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metals}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizesHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${stylesHTML}
            </section>
        </article>

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `
    const mainSection = document.querySelector("#main-section")
    mainSection.innerHTML = HTML
}
render();