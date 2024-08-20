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
        <div class="container text-center my-3 ">
            <h1>Kneel Diamonds</h1>
        </div>
    <div class="border mx-4 bg-white p-3">
        <article class="choices" class=>
        <div class="container  ">
            <div class="row  justify-content-center" style="gap: 50px">
                <div class="col-xxs-12 col-md-3 border   px-4">
                    <section class="choices__metals options p-3">
                        <h2 class="text-center">Metals</h2>
                        ${metals}
                    </section>
                </div>
                <div class="col-xxs-12 col-md-3  border    ">
                    <section class="choices__sizes options p-3 px-4">
                        <h2 class="text-center">Sizes</h2>
                        ${sizesHTML}
                    </section>
                </div>
                <div class="col-xxs-12  col-md-3 border   px-4 ">
                    <section class="choices__styles options p-3">
                        <h2 class="text-center">Styles</h2>
                        ${stylesHTML}
                    </section>
                </div>
            </div>
        </div>
        </article>

        <article class="order text-center m-5">
            ${SubmitButtonHTML}


        </article>

        <article class="customOrders  m-3 d-inline-block border">
            <h2>Custom Jewelry Orders</h2>
            ${orderList}
    </div>
        </article>
    
    `
    const mainSection = document.querySelector("#main-section")
    mainSection.innerHTML = HTML
}
document.addEventListener("newOrder", render)
render();