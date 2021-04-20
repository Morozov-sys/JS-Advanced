const products = [
    {id: 1, title: 'Laptop', price: 20000, src: "img/laptop.png"},
    {id: 2, title: 'Mouse', price: 1500, src: "img/mouse.png"},
    {id: 3, title: 'Keyboard', price: 5000, src: "img/keyboard.png"},
    {id: 4, title: 'Gamepad', price: 4500, src: "img/gamepad.png"},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <img class="item-png">
                <h3 class="title">${title}</h3>
                <p class="price">${price}</p>
                <button class="by-btn">Add to cart</button>
              </div>`;
};

const renderProducts = (list = []) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price, item.src);
    });
    // let productList = [];

    // for (let i = 0; i < list.length; i++) {
    //     productList.push(renderProduct(list[i].title, list[i].price));
    // }
    // for (const item of list) {
    //     productList.push(renderProduct(item.title, item.price));
    // }

    document.querySelector('.products').innerHTML = productList.join('');
    // console.log(productList);
}

renderProducts(products);
