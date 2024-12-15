const data = [
    {
        name: "Plotum Sneakers, Beige",
        image: "./images/a1.jfif.png",
        tag: "-$20",
        type: "men",
        oldPrice: "$540.00",
        newPrice: "$520.00",
    },
    {
        name: "MLB BOSTON",
        image: "./images/a2.jpg",
        tag: "new",
        type: "woman",
        oldPrice: "$610.00",
        newPrice: ""
    },
    {
        name: "MLB CHUNKY JOGGER NEW YORK YANKEES 'IVORY",
        image: "./images/a5.jpg",
        tag: "sale",
        type: "woman",
        oldPrice: "$120.00",
        newPrice: ""
    },
    {
        name: "MLB NY VINTAGE",
        image: "./images/a6.jpg",
        tag: "new",
        type: "woman",
        oldPrice: "$410.00",
        newPrice: ""
    },
    {
        name: "1970S WHITE LOW",
        image: "./images/a3.jpg",
        tag: "sale",
        type: "men",
        oldPrice: "$180.00",
        newPrice: ""
    },
    {
        name: "1970S BLACK LOW",
        image: "./images/a6.jfif.png",
        tag: "-$20",
        type: "men",
        oldPrice: "$700.00",
        newPrice: "$680.00"
    },
    {
        name: "VANS VAULT STYLE 36 - BLUE",
        image: "./images/a4.jpg",
        tag: "sale",
        type: "woman",
        oldPrice: "$610.00",
        newPrice: ""
    },
    {
        name: "DUNK LOW 'COAST'",
        image: "./images/a8.jpg",
        tag: "sale",
        type: "woman",
        oldPrice: "$120.00",
        newPrice: ""
    },
    {
        name: "AIR JORDAN 1 RETRO HIGH OG 'SHADOW' 2018",
        image: "./images/a9.jpg",
        tag: "new",
        type: "men",
        oldPrice: "$410.00",
        newPrice: ""
    },
    {
        name: "STAN SMITH HOLOGRAM",
        image: "./images/a10.jfif.png",
        tag: "new",
        type: "men",
        oldPrice: "$180.00",
        newPrice: ""
    },
]
const productWrapper = document.querySelector('.product-item-wrapper')
for (let x of data) {
    if (x.tag == "new") {
        productWrapper.innerHTML += ` 
        <div class="product-item ${x.type}" >
            <div class="product_image">
                <img src="${x.image}" alt="" style="width:245px;height:250px">
            </div>
            <div class="favorite">
                <i class="fas fa-heart heart-icon"></i>
            </div>
            <div
                class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
                <span>${x.tag}</span>
            </div>
            <div class="product_info">
                <h6 class="product_name" style="height:45px"><a href="single.html">${x.name}</a></h6>
                <div class="product_price" style="height:30px">${x.oldPrice}</div>
            </div>
            <div class="buttons"> <button class="cart-button"> <span class="add-to-cart">Add to cart</span> <span class="added">Item Added</span> <i class="fa fa-shopping-cart"></i> <i class="fa fa-square"></i> </button> </div>
            </div>
        </div>
        `
    } else if (x.tag == 'sale') {
        productWrapper.innerHTML += ` 
        <div class="product-item ${x.type}">
            <div class="product_image">
                <img src="${x.image}" alt="" style="width:245px;height:250px">
            </div>
            <div class="favorite"></div>
            <div
                class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
                <span class="sale">${x.tag}</span>
            </div>
            <div class="product_info">
                <h6 class="product_name" style="height:45px"><a href="single.html">${x.name}</a></h6>
                <div class="product_price" style="height:30px">${x.oldPrice}</div> 
            </div>
            <div class="buttons"> <button class="cart-button"> <span class="add-to-cart">Add to cart</span> <span class="added">Item Added</span> <i class="fa fa-shopping-cart"></i> <i class="fa fa-square"></i> </button> </div>
            </div>
        </div>
        `
    } else {
        productWrapper.innerHTML += `
        <div class="product-item ${x.type}">
            <div class="product_image">
                <img src="${x.image}" alt="" style="width:245px;height:250px">
            </div>
            <div class="favorite"></div>
            <div
                class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                <span>${x.tag}</span>
            </div>
            <div class="product_info">
            <h6 class="product_name" style="height:45px;"><a href="#single.html">${x.name}</a></h6>
            <div class="product_price" style="height:30px">${x.newPrice}<span>${x.oldPrice}</span></div>
            </div>
            <div class="buttons"> <button class="cart-button"> <span class="add-to-cart">Add to cart</span> <span class="added">Item Added</span> <i class="fa fa-shopping-cart"></i> <i class="fa fa-square"></i> </button> </div>
            </div>
        </div>
        `

    }
}

let seller = [
    {
        name: "CORTEZ LEATHER WHITE RED",
        image: "./images/a11.jpg",
        tag: "-$20",
        type: "men",
        oldPrice: "$540.00",
        newPrice: "$520.00",
    },
    {
        name: "AIR JORDAN 'LIGHT OREWOOD",
        image: "./images/a12.jpg",
        tag: "new",
        type: "women",
        oldPrice: "$610.00",
        newPrice: "",
    },
    {
        name: "1970S BLACK HIGH",
        image: "./images/a13.jfif.png",
        tag: "sale",
        type: "women",
        oldPrice: "$120.00",
        newPrice: "",
    },
    {
        name: "AIR FORCE 1 LOW BY YOU CUSTOM",
        image: "./images/a14.jpg",
        tag: "sale",
        type: "women",
        oldPrice: "$410.00",
        newPrice: "",
    },
    {
        name: "MLB BOSTON",
        image: "./images/a2.jpg",
        tag: "sale",
        type: "men",
        oldPrice: "$180.00",
        newPrice: "",
    },
    {
        name: "1970S WHITE LOW",
        image: "./images/a3.jpg",
        tag: "-$20",
        type: "men",
        oldPrice: "$580.00",
        newPrice: "$560.00",
    },
    {
        name: "VANS VAULT STYLE 36 - BLUE",
        image: "./images/a4.jpg",
        tag: "new",
        type: "women",
        oldPrice: "$610.00",
        newPrice: "",
    },
    {
        name: "MLB CHUNKY JOGGER NEW YORK YANKEES 'IVORY",
        image: "./images/a5.jpg",
        tag: "sale",
        type: "men",
        oldPrice: "$120.00",
        newPrice: "",
    },
    {
        name: "MLB NY VINTAGE",
        image: "./images/a6.jpg",
        tag: "sale",
        type: "men",
        oldPrice: "$410.00",
        newPrice: "",
    },
    {
        name: "M2K TEKNO",
        image: "./images/a7.jpg",
        tag: "new",
        type: "men",
        oldPrice: "$180.00",
        newPrice: "",
    },
]
let foodWrapper = document.querySelector('.Seller')
for (let y of seller) {
    if (y.tag == "new") {
        foodWrapper.innerHTML += `
            <div class="product-item ${y.type} ">
                <div class="product discount">
                    <div class="product_image">
                        <img src="${y.image}" alt="" style="width:245px;height:250px">
                    </div>
                    <div class="favorite favorite_left"></div>
                    <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>${y.tag}</span></div>
                    <div class="product_info">
                    <h6 class="product_name" style="height:45px;"><a href="#single.html">${y.name}</a></h6>
                    <div class="product_price" style="height:30px">${y.oldPrice}</div>
                    </div>
                    <div class="buttons"> <button class="cart-button"> <span class="add-to-cart">Add to cart</span> <span class="added">Item Added</span> <i class="fa fa-shopping-cart"></i> <i class="fa fa-square"></i> </button> </div>
                    </div>
                    </div>
                </div>
         
        </div>`
    } else if (y.tag == "-$20") {
        foodWrapper.innerHTML += `
           
                <div class="product-item ${y.type}">
                    <div class="product discount">
                        <div class="product_image">
                            <img src="${y.image}" alt="" style="width:245px;height:250px">
                        </div>
                        <div class="favorite favorite_left"></div>
                        <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>${y.tag}</span></div>
                        <div class="product_info">
                        <h6 class="product_name" style="height:45px;"><a href="#single.html">${y.name}</a></h6>
                        <div class="product_price" style="height:30px">${y.newPrice}<span>${y.oldPrice}</span></div>
                        </div>
                        <div class="buttons"> <button class="cart-button"> <span class="add-to-cart">Add to cart</span> <span class="added">Item Added</span> <i class="fa fa-shopping-cart"></i> <i class="fa fa-square"></i> </button> </div>
                        
                        </div>
                        </div>
                    </div>
                
            </div>`

    } else if (y.tag == "sale") {
        foodWrapper.innerHTML += `
        
        <div class="product-item ${y.type} ">
            <div class="product">
                <div class="product_image">
                    <img src="${y.image}" alt="" style="width:245px;height:250px">
                </div>
                <div class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>${y.tag}</span></div>
                <div class="favorite favorite_left"></div>
                <div class="product_info">
                <h6 class="product_name" style="height:45px;"><a href="#single.html">${y.name}</a></h6>
                <div class="product_price" style="height:30px">${y.oldPrice}</div>
                </div>
                <div class="buttons"> <button class="cart-button"> <span class="add-to-cart">Add to cart</span> <span class="added">Item Added</span> <i class="fa fa-shopping-cart"></i> <i class="fa fa-square"></i> </button> </div>
                </div>
                </div>
            </div>
      
    </div>`
    }
}