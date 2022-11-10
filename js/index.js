// As a user i should be able to add products to cart
// As a use I should be able to filter products
// As a user I should see product details

// As a user i should be able to create an account
// As a user i should be able to login to the platform

// As a user I should be able to see a list of products

function showNewProducts(productsObj) {
    const list = document.getElementById("products");
    list.innerHTML = ""

    for(let i = 0; i < productsObj.products.length; i++) {
      const product = productsObj.products[i];
      const productItem = document.createElement("li");
      productItem.classList.add("productListItem");
      productItem.innerHTML = ` <aside class="productImgWrapper">
       <div class="productLabel">
         Best Seller
       </div>
       <img class="productImg" src="${product.thumbnail}" />
       <button class="cartbtn productCardBtn"> Add to cart</button>
    
     </aside>
    
     <div>
       <h4 class="category">${product.category}</h4>
       <h2 class="title">${product.title}</h2>
       <span class="price">$${product.price}</span>
     </div>`;
    
      list.appendChild(productItem);
    }
  
  
  }


function filterProductByCategory () {
const select = document.getElementById("category");
const valueSelectedByUser = select.value;
fetch(`https://dummyjson.com/products/category/${valueSelectedByUser}`).then(res => res.json()).then(products => {
    showNewProducts(products)
})
}


function showCategories(categories) {
    const select =  document.getElementById("category")
    for(let i = 0; i < categories.length; i++) {
        const option = document.createElement("option")
        option.value = categories[i]
        option.innerHTML = categories[i]
        select.appendChild(option);
    }
}

function showProducts(productsObj) {
  for(let i = 0; i < productsObj.products.length; i++) {
    const product = productsObj.products[i];
    const productItem = document.createElement("li");
    productItem.classList.add("productListItem");
    productItem.innerHTML = ` <aside class="productImgWrapper">
     <div class="productLabel">
       Best Seller
     </div>
     <img class="productImg" src="${product.thumbnail}" />
     <button class="cartbtn productCardBtn"> Add to cart</button>
  
   </aside>
  
   <div>
     <h4 class="category">${product.category}</h4>
     <h2 class="title">${product.title}</h2>
     <span class="price">$${product.price}</span>
   </div>`;
  
    const list = document.getElementById("products");
    list.appendChild(productItem);
  }


}

function getProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((products) => {
      showProducts(products);
    });

  //   const productPromise = responsePromise.then(function (miracle) {
  //     if (miracle.statusText === "OK") {
  //       return miracle.json();
  //     }
  //   });

  //   productPromise.then((product) => {
  //     console.log(product);
  //   });
}

function getCategories() {
    fetch("https://dummyjson.com/products/categories").then(res => res.json()).then((categories) => {
        showCategories(categories)
    })
}

document.getElementById("category").addEventListener("change", filterProductByCategory)

getProducts();
getCategories();
