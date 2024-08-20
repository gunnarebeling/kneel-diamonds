import { Metals } from "./Metals.js";
import { OrderList } from "./OrderList.js";
import { SubmitButton } from "./OrderSubmitButton.js";
import { Sizes } from "./Sizes.js";
import { Styles } from "./Styles.js";

const render = async () =>{
    const metals = await Metals();
    const stylesHTML = await Styles()
    const sizesHTML = await Sizes();
    const SubmitButtonHTML = SubmitButton()
    const orderList = await OrderList()
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
            ${SubmitButtonHTML}


        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${orderList}

        </article>
    `
    const mainSection = document.querySelector("#main-section")
    mainSection.innerHTML = HTML
}
document.addEventListener("newOrder", render)
render();