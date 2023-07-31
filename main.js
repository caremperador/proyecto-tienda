// URL de la imagen del carrito
let imgInfoCart = "./icons/bt_add_to_cart.svg";

// Seleccionar elementos del DOM
const cardsContainer = document.querySelector(".cards-container"),
      menuEmail = document.querySelector(".navbar-email"),
      menuHamIcon = document.querySelector(".menu"),
      menuCarritoIcon = document.querySelector(".navbar-shopping-cart"),
      flechitaIcon = document.querySelector("#flechita-menu-mobile"),
      desktopMenu = document.querySelector(".desktop-menu"),
      mobileMenu = document.querySelector(".mobile-menu"),
      aside = document.querySelector(".product-detail");

// Añadir event listeners
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
flechitaIcon.addEventListener("click", closedMenuMobile);

// Funciones de manejador de eventos
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

// URL de la API
const apiURL = 'https://fakestoreapi.com/products';

// Usa la API Fetch para obtener los datos
fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    // Cuando la respuesta sea exitosa, convierte la respuesta a JSON
    return response.json();
  })
  .then(products => {
    // 'products' es un array de objetos de productos
    for (let product of products) {
      // Ahora puedes usar los datos del producto aquí
      // por ejemplo, puedes crear tarjetas de producto como en tu código anterior
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
      productInfoName.innerHTML = product.title; // 'title' en lugar de 'name' en esta API

      const productInfoFigure = document.createElement("figure");
      const productImgCart = document.createElement("img");
      productImgCart.setAttribute("src", imgInfoCart);

      productInfoFigure.appendChild(productImgCart);

      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
      cardsContainer.appendChild(productCard);
    }
  })
  .catch(function() {
    // Si ocurre algún error, se ejecutará este código
    console.log("Hubo un problema con la solicitud Fetch.");
  });
