'use strict';

const products = {
  productData: [
    {
      productName: 'Rounded T-Shirt',
      categoryId: 1,
      price: 500,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/a/7/m-camoflouge-r-ridachy-original-imagvvsggc6rgx2z.jpeg?q=70',
    },
    {
      productName: 'V-neck T-Shirt',
      categoryId: 1,
      price: 400,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/q/z/l-bhtslv23525-ash-grey-being-human-original-imagtj3gkxba2dbs.jpeg?q=70',
    },
    {
      productName: 'Turtle-neck T-Shirt',
      categoryId: 1,
      price: 700,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/y/8/m-hineck-lining-dingra-original-imagfu5zjrcnzkf4.jpeg?q=70',
    },
    {
      productName: 'Polo-neck T-Shirt',
      categoryId: 1,
      price: 800,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/y/p/6/m-db1052-11-3bros-original-imagyh34f2rnfjja.jpeg?q=70',
    },
    {
      productName: 'Joggers',
      categoryId: 2,
      price: 800,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/n/w/x/30-z3-jog-06-zaysh-original-imags9hxvnj3qrvd.jpeg?q=70',
    },
    {
      productName: 'Cotton Pants',
      categoryId: 2,
      price: 1000,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/j/n/m/36-el-p-cot-el-cielo-original-imagtha4rgrqmtu3.jpeg?q=70',
    },
    {
      productName: 'Jeans',
      categoryId: 2,
      price: 900,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/z/j/p/32-mx1001s-marsh-x-original-imagwgrbhsqpevbb.jpeg?q=70',
    },
    {
      productName: 'Slippers',
      categoryId: 3,
      price: 300,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/n/s/3/-original-imagg4zh9kr7wasa.jpeg?q=70',
    },
    {
      productName: 'Casual Shoe',
      categoryId: 3,
      price: 600,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/n/p/w/7-kc126-wht-7-k-footlance-white-original-imagw3etyvudyy6m.jpeg?q=70',
    },
    {
      productName: 'Leather Shoe',
      categoryId: 3,
      price: 900,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/m/y/-original-imagzry3gugpvqty.jpeg?q=70',
    },
    {
      productName: 'School Shoe',
      categoryId: 3,
      price: 500,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/j80icnk0/shoe/2/a/r/bs-6001-black-big-9-goldstar-black-original-imaeve5bbxagvthg.jpeg?q=70',
    },
  ],
  categories: [
    // { id: 0, name: 'All' },
    { id: 1, name: 'Top-Wear' },
    { id: 2, name: 'Bottom-Wear' },
    { id: 3, name: 'Foot-Wear' },
  ],
};

const categoryList = document.querySelector('.category');
const productsContainer = document.querySelector('.products');
const search = document.querySelector('.search__field-input');
const searchBtn = document.querySelector('.search__field-btn');

products.categories.forEach((category) => {
  const html = `<li id="${category.id}" class="items"><a href="#">${category.name}</a></li>`;
  categoryList.insertAdjacentHTML('beforeend', html);
});

let filterId = 0;

renderProduct(products.productData);

const items = document.querySelectorAll('.items');

items.forEach((item) => {
  item.addEventListener('click', function () {
    filterId = +this.id;
    productsContainer.innerHTML = '';
    const filteredProduct = products.productData.filter((data) => {
      return filterId === 0 || data.categoryId === filterId;
    });

    renderProduct(filteredProduct);
  });
});

function renderProduct(data) {
  data.forEach((product) => {
    const html = `
  <div class="card">
          <div class="imgDiv">
            <img src="${product?.imageUrl}" alt="${
      product?.productName.charAt(0).toUpperCase() +
      product?.productName.slice(1)
    }" />
          </div>
          <div class="product">
            <p class="product__name">${
              product?.productName.charAt(0).toUpperCase() +
              product?.productName.slice(1)
            }</p>
            <span class="price">$${product?.price}</span>
          </div>
        </div>
  `;

    productsContainer.insertAdjacentHTML('beforeend', html);
  });
}

searchBtn.addEventListener('click', function () {
  const filteredProduct = products.productData.filter((data) => {
    return data.productName
      .toLowerCase()
      .replaceAll(' ', '')
      .replaceAll('-', '')
      .includes(search.value.toLowerCase());
  });

  productsContainer.innerHTML = '';
  renderProduct(filteredProduct);
  search.value = '';
});
