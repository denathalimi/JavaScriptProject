let carts = document.querySelectorAll('.buy-now');
let products = [
    {
        name: 'Personal',
        tag: 'Personal',
        size: '128 MB',
        bandwidth: '20GB Bandwidth',
        support: 'Unlimited Email Support',
        price: 7,
        inCart: 0
    },

    {
        name: 'Team',
        tag: 'Team',
        size: '512 MB',
        bandwidth: '50GB Bandwidth',
        support: 'Unlimited Email Support',
        price: 14,
        inCart: 0
    },

    {
        name: 'Corporate',
        tag: 'Corporate',
        size: '1024 MB',
        bandwidth: 'Unlimited Bandwidth',
        support: 'Unlimited Email Support',
        price: 23,
        inCart: 0
    }
]

for(let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart-badge span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt((productNumbers));

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-badge span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-badge span').textContent = 1;
    }
    setItem(product);
}

function setItem(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems))
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost')
    if(cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", cartCost + product.price)
    } else {
        localStorage.setItem("totalCost", product.price)
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem('totalCost')
    cartItems = JSON.parse(cartItems);
    let productTable = document.querySelector(".table-cartitems")
    
    if (cartItems && productTable) {
        productTable.innerHTML = '';
        Object.values(cartItems).map(item => {
            productTable.innerHTML += `
            <tr>
                <th scope="row">${item.name}</th>
                <td>${item.size}</td>
                <td>${item.bandwidth}</td>
                <td>${item.support}</td>
                <td>$${item.price}</td>
                <td>${item.inCart}</td>
                <td>$${item.inCart * item.price}</td>
            </tr>
            `;
        });

        productTable.innerHTML += `
        <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Basket Total :</td>
            <td>$${cartCost}.00</td>
        </tr>
        `
    }
}

// onLoadCartNumbers();
displayCart();