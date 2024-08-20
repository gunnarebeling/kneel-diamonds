

export const OrderList = async () =>{
    const response =  await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orderList = await response.json();

    let html = `<div>
                    <ul>`
    let orderListArray = orderList.map(order =>{
        let orderPrice = 0
        orderPrice = order.metal.price + order.style.price+order.size.price;

        return `<li class="order">Order #${order.id} costs $${orderPrice.toFixed(2)}</li>`
    })
    html += orderListArray.join("");
    html+= `</ul>
        </div>`
    return html

}