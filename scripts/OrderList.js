

export const OrderList = async () =>{
    const response =  await fetch("http://localhost:8088/orders")
    const orderList = await response.json();
    let html = `<div>
                    <ul>`
    let orderListArray = orderList.map(order =>{
        return `<li class="order">Order #${order.id} costs $`
    })
    html += orderListArray.join("");
    html+= `</ul>
        </div>`
    return html

}