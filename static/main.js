const menuEmail = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const ButtonShoppingCart = document.querySelector('.navbar-shopping-card');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailtContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', () => toggleMenu(menu));
menuBurgerIcon.addEventListener('click', () => toggleMenu(mobileMenu));
ButtonShoppingCart.addEventListener('click', () => {
  productDetailtContainer.classList.add('inactive');
  toggleMenu(shoppingCartContainer);
});

productDetailCloseIcon.addEventListener('click', () => {
  productDetailtContainer.classList.add('inactive');
});

function toggleMenu(element) {
  element.classList.toggle('inactive');
}

const productList = [
  {
    name: 'Bike',
    price: '120,00',
    image:
      'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Motocycle',
    price: '700,00',
    image:
      'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'bicycle',
    price: '300,00',
    image:
      'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

{
  /* <div class="product-card">
<img
  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  alt=""
  class="product-img"
/>
<div class="product-info">
  <div>
    <p>120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="add-card" />
  </figure>
</div>
</div> */
}

function openProductDetail() {
  shoppingCartContainer.classList.add('inactive');
  productDetailtContainer.classList.remove('inactive');
}

const containerCard = document.querySelector('.cards-container');

function renderProducts(arr) {
  for (product of arr) {
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.classList.add('product-img');
    productImage.addEventListener('click', openProductDetail);

    const divProductInfo = document.createElement('div');
    divProductInfo.classList.add('product-info');

    const divWrapperInfo = document.createElement('div');

    const pProductPrice = document.createElement('p');
    pProductPrice.innerText = `$ ${product.price}`;

    const pProductName = document.createElement('p');
    pProductName.innerText = product.name;

    const figureWrapper = document.createElement('figure');

    const imgAddCard = document.createElement('img');
    imgAddCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    figureWrapper.appendChild(imgAddCard);

    divWrapperInfo.append(pProductPrice, pProductName);

    divProductInfo.append(divWrapperInfo, figureWrapper);

    productCart.append(productImage, divProductInfo);

    // productCart.innerHTML = `
    //   <img
    //     src="${product.image}"
    //     alt=""
    //     class="product-img"
    //   />
    //   <div class="product-info">
    //     <div>
    //       <p>${product.price}</p>
    //       <p>${product.name}</p>
    //     </div>
    //     <figure>
    //       <img src="./icons/bt_add_to_cart.svg" alt="add-card" />
    //     </figure>
    //   </div>
    // `;

    containerCard.appendChild(productCart);
  }
}

renderProducts(productList);
