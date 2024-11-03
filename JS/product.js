/*-----Earrings-----*/
fetch('../JSON/earrings.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch earrings: ' + response.statusText);
        }
        return response.json();
    })
    .then(products => {
        const productList = document.getElementById('product-container');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'pro';
            productDiv.innerHTML = `
                <a href="../HTMLS/productsingle.html?item=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="des">
                        <span>${product.des}</span>
                        <h5>${product.name}</h5>
                        <h4>₱${product.price}</h4>
                    </div>
                </a>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')"><i id="cart" class="fa fa-cart-plus"></i></button>
            `;
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching earrings:', error));

/*-----Necklaces-----*/
fetch('../JSON/necklace.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch necklaces: ' + response.statusText);
        }
        return response.json();
    })
    .then(products => {
        const productList = document.getElementById('necklace-container');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'pro';
            productDiv.innerHTML = `
                <a href="../HTMLS/productsingle.html?item=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="des">
                        <span>${product.des}</span>
                        <h5>${product.name}</h5>
                        <h4>₱${product.price}</h4>
                    </div>
                </a>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')"><i id="cart" class="fa fa-cart-plus"></i></button>
            `;
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching necklaces:', error));
/*---PRODUCT-SINGLE----*/
async function fetchProductById(url, productId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const product = data.find(item => item.id === productId);

        const productContainer = document.getElementById('showcase');
        if (product) {
            productContainer.innerHTML = `
                <div class="single-pro-image">
                    <img src="${product.item1}" width="100%" id="MainImg" alt="">
                    <div class="multipte-image">
                        <div class="column-product">
                            <img src="${product.item1}" width="100%" class="small-img" alt="">
                        </div>
                        <div class="column-product">
                            <img src="${product.item2}" width="100%" class="small-img" alt="">
                        </div>
                        <div class="column-product">
                            <img src="${product.item3}" width="100%" class="small-img" alt="">
                        </div>
                        <div class="column-product">
                            <img src="${product.item4}" width="100%" class="small-img" alt="">
                        </div>
                    </div>
                </div>
                <div class="product-desc">
                    <h6>${product.type}</h6>
                    <h4>${product.name}</h4>
                    <h3>₱${product.price}</h3>
                    <br>
                    <input type="number" value="1"> 
                    <button class="btn-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.item1}')">Add to cart</button>
                    <h2>Product Details</h2>
                    <p class="description">${product.desc}</p>
                </div>
            `;
            document.title = 'Binco - ' + product.name;

            // Image swapping functionality
            var MainImg = document.getElementById("MainImg");
            var smallimg = document.getElementsByClassName("small-img");

            for (let i = 0; i < smallimg.length; i++) {
                smallimg[i].onclick = function() {
                    MainImg.src = smallimg[i].src;
                };
            }
        } else {
            productContainer.innerHTML = '<p>Product not found.</p>';
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const jsonUrl = '../JSON/All.json';
const productId = getQueryParameter('item');
if (productId) {
    fetchProductById(jsonUrl, Number(productId));
} else {
    document.getElementById('showcase').innerHTML = '<p>No product specified.</p>';
}
