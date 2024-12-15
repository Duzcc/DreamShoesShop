const data = [
    {
        name: "Plotum Sneakers, Beige",
        image: "images/a1.jfif.png",
        tag: "-$20",
        type: "men",
        oldPrice: "$540.00",
        newPrice: "$520.00",
    },
    {
        name: "MLB BOSTON",
        image: "images/a2.jpg",
        tag: "new",
        type: "woman",
        oldPrice: "$610.00",
        newPrice: ""
    },
    {
        name: "MLB CHUNKY JOGGER NEW YORK YANKEES 'IVORY",
        image: "images/a5.jpg",
        tag: "sale",
        type: "woman",
        oldPrice: "$120.00",
        newPrice: ""
    },
    {
        name: "MLB NY VINTAGE",
        image: "images/a6.jpg",
        tag: "new",
        type: "woman",
        oldPrice: "$410.00",
        newPrice: ""
    },
    {
        name: "1970S WHITE LOW",
        image: "images/a3.jpg",
        tag: "sale",
        type: "men",
        oldPrice: "$180.00",
        newPrice: ""
    },
    {
        name: "1970S BLACK LOW",
        image: "images/a6.jfif.png",
        tag: "-$20",
        type: "men",
        oldPrice: "$700.00",
        newPrice: "$680.00"
    },
    {
        name: "VANS VAULT STYLE 36 - BLUE",
        image: "images/a4.jpg",
        tag: "sale",
        type: "woman",
        oldPrice: "$610.00",
        newPrice: ""
    },
    {
        name: "DUNK LOW 'COAST'",
        image: "images/a8.jpg",
        tag: "sale",
        type: "woman",
        oldPrice: "$120.00",
        newPrice: ""
    },
    {
        name: "AIR JORDAN 1 RETRO HIGH OG 'SHADOW' 2018",
        image: "images/a9.jpg",
        tag: "new",
        type: "men",
        oldPrice: "$410.00",
        newPrice: ""
    },
    {
        name: "STAN SMITH HOLOGRAM",
        image: "images/a10.jfif.png",
        tag: "new",
        type: "men",
        oldPrice: "$180.00",
        newPrice: ""
    },
    {
        name: "STAN SMITH HOLOGRAM",
        image: "images/a10.jfif.png",
        tag: "new",
        type: "unisex",
        oldPrice: "$180.00",
        newPrice: ""
    }, {
        name: "STAN SMITH HOLOGRAM",
        image: "images/a10.jfif.png",
        tag: "new",
        type: "unisex",
        oldPrice: "$180.00",
        newPrice: ""
    },
    {
        name: "RUN STAR HIKE PLATFORM SNEAKER",
        image: "images/women.jpg",
        tag: "sale",
        type: "woman",
        oldPrice: "$580.00",
        newPrice: ""
    },
    {
        name: "NIKE JORDANS MOCHA",
        image: "images/new.jpg",
        tag: "new",
        type: "men",
        oldPrice: "$340.00",
        newPrice: ""
    },
    {
        name: "CONVERSE HIGH TOPS",
        image: "images/new1.jpg",
        tag: "new",
        type: "woman",
        oldPrice: "$100.00",
        newPrice: ""
    },
    {
        name: "WHITE JORDANS",
        image: "images/new2.jpg",
        tag: "-$20",
        type: "woman",
        oldPrice: "$700.00",
        newPrice: ""
    }

]
const productItemMen = document.querySelector('#productItemMen');
const productItemWomen = document.querySelector('#productItemWomen');
const productItemUnisex = document.querySelector('#productItemUnisex');
let menProduct = "";
let womenProduct = "";
let unisexProduct = "";
data.forEach((item, index) => {
    let data = `<div class="col l-3">
    <div class="product-item full-width">
        <div class="product_image">
            <img src="../${item.image}" alt="${item.name}" style="width:245px;height:250px;">
        </div>
        <div class="favorite">
            ${item.tag === "new" ? '<i class="fas fa-heart heart-icon"></i>' : ''}
        </div>
        <div class="product_bubble ${item.tag !== "new" && item.tag !== "sale" ? 'r-10 product_bubble_red' : 'product_bubble_left product_bubble_green'} d-flex flex-column align-items-center">
            <span class=${item.tag === "sale" ? "sale" : ""}>${item.tag}</span>
        </div>
        <div class="product_info">
            <h6 class="product_name" style="height:45px"><a href="">${item.name}</a></h6>
            <div class="product_price" style="height:30px">${item.newPrice}${item.newPrice != "" ? `<span>${item.oldPrice}</span>` : item.oldPrice}</div>
        </div>
        <div class="buttons">
            <button class="cart-button">
                <span class="add-to-cart">Add to cart</span>
                <span class="added">Item Added</span>
                <i class="fa fa-shopping-cart"></i>
                <i class="fa fa-square"></i>
            </button>
        </div>
    </div>
    </div>`;
    if (item.type === "men") {
        menProduct += data;
    } else if (item.type === "woman") {
        womenProduct += data;
    } else {
        unisexProduct += data;
    }
});
productItemMen != null ? productItemMen.innerHTML = menProduct : "";
productItemWomen != null ? productItemWomen.innerHTML = womenProduct : "";
productItemUnisex != null ? productItemUnisex.innerHTML = unisexProduct : "";