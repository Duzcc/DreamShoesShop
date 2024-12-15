// Get data
let myCart;
let cartItemWrapper = document.querySelector('.cart-item-wrapper')
let moneyMoney = document.querySelector(".total-amount")
let itemsCount = document.querySelector('.items')
let checkOutCount = document.querySelector('#checkout_items')
let openSearchBar = document.querySelector('#openSearchBar');

function renderData() {
    if (localStorage.length) {
        myCart = JSON.parse(localStorage.getItem('myCart'))
    } else {
        myCart = []
    }
    let total = 0
    let count = 0
    cartItemWrapper.innerHTML = "" // dau tien reset cho no ve rong da
    for (let x of myCart) {
        total += Number(x.price)
        count++;
        cartItemWrapper.innerHTML +=
            `<div class="Cart-Items">
            <div class="image-box">
                <img src="${x.image.split('..')[0] == "" ? x.image : '../' + x.image}" />
            </div>
            <div class="about">
                <h1 class="title">${x.name}</h1>
                <h3 class="subtitle">New!</h3>
            </div> 
            <div class="prices">
                <div class="amount">$${x.price}</div>
                <div class="remove" id="${x.name}" onclick="removeItem(this)" ><u>Remove</u></div>
            </div>
        </div>`
    }
    checkOutCount.innerHTML = `${count}`
    itemsCount.innerHTML = `${count} items`
    moneyMoney.innerHTML = `$${total}`
}
renderData()


let addItem = document.querySelectorAll('.buttons')
for (let x of addItem) {
    x.onclick = () => {
        let data = {
            image: "",
            name: "",
            price: "",
        }
        let a = x.parentElement.children
        data.image = a[0].children[0].attributes[0].value
        data.name = a[3].children[0].children[0].innerHTML
        data.price = a[3].children[1].innerText.split("$")[1]
        myCart.push(data)
        localStorage.setItem('myCart', JSON.stringify(myCart))
        renderData()
    }
}

function removeItem(e) {
    for (let i = 0; i < myCart.length; ++i) {
        if (myCart[i].name == e.id) {
            myCart.splice(i, 1)
            break;
        }
    }
    localStorage.setItem('myCart', JSON.stringify(myCart))
    renderData()
}

// Cart
let showMyCart = document.querySelector('.show-my-cart')
const showCartItem = document.querySelector('.show-cart-item')
const blackWrapper = document.querySelector('.black-wrapper')
let closeMyCart = document.querySelector('.close-my-cart')
showMyCart.onclick = () => {
    showCartItem.style.display = "block"
    blackWrapper.style.display = "block"
}

closeMyCart.onclick = () => {
    showCartItem.style.display = 'none'
    blackWrapper.style.display = "none"
}

//Add to cart
document.addEventListener("DOMContentLoaded", function (event) {
    let cartButtons = document.querySelectorAll('.cart-button');
    cartButtons.forEach(button => {
        button.addEventListener('click', cartClick);
    });

    function cartClick() {
        let button = this;
        button.classList.add('clicked');
    }
});

// Search Bar function
function fadeSearchBar() {
    openSearchBar.style.width = getComputedStyle(openSearchBar).width;
    openSearchBar.style.transition = 'width .5s ease-in-out';
    openSearchBar.offsetWidth;
    openSearchBar.style.width = '265px';
    openSearchBar.classList.add("navbar__search");
}

function closeSearchBar() {
    openSearchBar.style.width = getComputedStyle(openSearchBar).width;
    openSearchBar.style.transition = 'width .5s ease-in-out';
    openSearchBar.offsetWidth;
    openSearchBar.style.width = '40px';
    openSearchBar.classList.remove("navbar__search");
}