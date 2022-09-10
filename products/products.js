function Product(id, name, price, imgSrc, categories) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imgSrc = imgSrc;
    this.categories = categories;
}
const prods = [];
let shownProds = []
let cart = []
let pImgs = ['a', 'p', 'a', 'a', 'g', 'h']
const categories = ['home', 'laptop', 'mobiles']

function generateProds() {
    // let productIndex = 0;
    const products = 6;


    for (let i = 0; i < products; i++) {
        prods.push(
            new Product(
                `${i}`,
                `${pImgs[i]}`,
                eval(`${i}* 6+50`) + '$',
                `./Imgs/p${i + 1}.jpg`,
                categories[i % categories.length]
            )
        );
    }

    // console.log(prods);
    return prods;
}


function showProducts() {
    const prodsContainer = document.querySelector("main");
    prodsContainer.innerHTML = "";
    shownProds.forEach(product => {
        let prodDiv = document.createElement("div");
        prodsContainer.appendChild(prodDiv)
        prodDiv.id = `div_${product.id}`;
        prodDiv.className = "prodDiv";
        prodDiv.innerHTML = `
            <img class="productImg" src="${product.imgSrc}">
            <div class="prodInfo">
            <span class="prodName">
            ${product.name}
            </span>
            <span class="prodPrice">
            ${product.price}
            </span>
            </div>
            <button id="btn_${product.id}" class="addCart" onclick="addToCart(this.id)">Add to Cart</button>
        `;
    });
}

/////////////////////////////////// customistion

document.querySelector("#all").addEventListener("click", () => {
    shownProds = prods;
    showProducts();
})

document.querySelectorAll(".ctg").forEach((btn) =>
    btn.addEventListener("click", (e) => {
        shownProds = prods.filter(product => product.categories.includes(e.target.id));
        showProducts();
    })
);


function addToCart(btnId) {

    const productId = btnId.split("_")[1];
    const foundProdInCart = cart.find((product) => product.id === productId);
    if (!foundProdInCart) {
        const prod = prods.find((product) => product.id === productId);
        cart.push(prod);

    }
    setCookie("cart", JSON.stringify(cart), 1);
    loadCartFromCookie()

}

function loadCartFromCookie() {

    cart = getCookie("cart") ? JSON.parse(getCookie("cart")) : [];
    // console.log(typeof (cart), cart);
    let cartLength = document.getElementById("cartLength")
    return cartLength.innerText = `${cart.length}`

}

function genAndShowAllProds() {
    loadCartFromCookie()
    generateProds();
    shownProds = prods;
    showProducts();

}


window.addEventListener("load", () => genAndShowAllProds());