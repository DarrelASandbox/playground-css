let image = document.getElementById('image');
let title = document.getElementById('title');
let description = document.getElementById('description');
let colors = document.getElementById('colors');
let sizes = document.getElementById('sizes');
let price = document.getElementById('price');

let product = {
  name: 'T-Shirt LD01',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque, repellat consequatur enim rem quidem ipsum accusamus provident nobis maxime.',
  image: 'assets/t-shirt.png',
  price: '100 ~ 200',
  children: [
    { color: '#bfb1a4', size: 'M', price: 100 },
    { color: '#bfb1a4', size: 'L', price: 120 },
    { color: '#bfb1a4', size: 'XL', price: 130 },
    { color: '#9c2f46', size: 'M', price: 105 },
    { color: '#9c2f46', size: 'L', price: 110 },
    { color: '#9c2f46', size: 'XL', price: 140 },
  ],
};

const initApp = () => {
  title.innerText = product.name;
  description.innerText = product.description;
  image.src = product.image;
  price.innerText = product.price;

  let listColors = product.children.map((child) => child.color);
  listColors = Array.from(new Set(listColors));
  console.log(listColors);

  listColors.forEach((color) => {
    let li = document.createElement('li');
    li.style.backgroundColor = color;
    li.setAttribute('data-color', color);
    colors.appendChild(li);
  });

  let listSizes = product.children.map((child) => child.size);
  listSizes = Array.from(new Set(listSizes));
  console.log(listSizes);

  listSizes.forEach((size) => {
    let li = document.createElement('li');
    li.innerText = size;
    li.setAttribute('data-size', size);
    sizes.appendChild(li);
  });
};

initApp();
