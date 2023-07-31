// Path a la imagen del carrito
let imgInfoCart = "./icons/bt_add_to_cart.svg";

// Referencias a elementos del DOM
const cardsContainer = document.querySelector(".cards-container");
const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const flechitaIcon = document.querySelector("#flechita-menu-mobile");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

// Añadiendo event listeners a los elementos del DOM
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
flechitaIcon.addEventListener("click", closedMenuMobile);

// Funciones para manejar eventos de click
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  if (!aside.classList.contains("inactive")) {
    aside.classList.toggle("inactive");
  }
}

function toggleCarritoAside() {
  aside.classList.toggle("inactive");
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.toggle("inactive");
  }
}

function closedMenuMobile() {
  aside.classList.add("inactive");
}

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json()) // Esto convierte la respuesta en un objeto JSON
  .then((data) => {
    for (let product of data) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.width=240;
        productImg.height=240;
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productInfoPrice = document.createElement("p");
        productInfoPrice.innerHTML = "$ " + product.price;
    
        const productInfoName = document.createElement("p");
        productInfoName.innerHTML = product.title;
    
        // Aquí añadí el nombre y el precio al div de información del producto
        productInfoDiv.appendChild(productInfoName);
        productInfoDiv.appendChild(productInfoPrice);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", imgInfoCart);
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        // Aquí añadí la tarjeta de producto al contenedor de tarjetas
        cardsContainer.appendChild(productCard);}
    
  })
  .catch((error) => console.error("Error:", error)); // Aquí se captura cualquier error que pueda ocurrir



/* // Creando lista de productos
const productList = [];
productList.push({
  name: productNames,
  price: 120,
  image: "https://picsum.photos/240/240", // Aquí corregí el "Image" a "image" para mantener la consistencia
});
productList.push({
  name: "Computadora",
  price: 1200,
  image: "https://picsum.photos/240/240", // Aquí corregí el "Image" a "image" para mantener la consistencia
});
productList.push({
  name: "Gata",
  price: 120,
  image: "https://picsum.photos/240/240", // Aquí corregí el "Image" a "image" para mantener la consistencia
}); */

// Iterando sobre la lista de productos para crear las tarjetas de producto
/* function renderProducts(arr) {
  for (let product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productInfoPrice = document.createElement("p");
    productInfoPrice.innerHTML = "$ " + product.price;

    const productInfoName = document.createElement("p");
    productInfoName.innerHTML = product.title;

    // Aquí añadí el nombre y el precio al div de información del producto
    productInfoDiv.appendChild(productInfoName);
    productInfoDiv.appendChild(productInfoPrice);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", imgInfoCart);

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    // Aquí añadí la tarjeta de producto al contenedor de tarjetas
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
 */
