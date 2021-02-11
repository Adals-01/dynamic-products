
const url = "https://kea-alt-del.dk/t7/api/products"

fetch(url)
.then((res) => res.json())
.then((data)=>handleProductlist(data));

function handleProductlist(data) {
    data.forEach(showProduct);
}

function showProduct(product){
    const template = document.querySelector("#productThumb").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector("img.productimage").src= `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector("img.productimage").alt=product.productdisplayname;
    copy.querySelector(".price").textContent = product.price;
    copy.querySelector(".discount").textContent = product.discount;
    const parent = document.querySelector("main");
    parent.appendChild(copy);
}



/* <article >
          <img class= "productimage"
            src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
            alt="Sahara Team India Fanwear Round Neck Jersey"
          />
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
          <p class="subtle">Tshirts | Nike</p>
          <p class="price"><span>Prev.</span> DKK 1595,-</p>
          <div class="discount">
            <p>Now DKK 1560,-</p>
            <p>-34%</p>
          </div>
          <a href="product.html">Read More</a>
        </article> */

/* individual product below */


/* const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("id");
console.log(id);
const url = "https://kea-alt-del.dk/t7/api/products/" + id;
fetch(url)
.then((res) => res.json())
.then((data)=>showProduct(data));


products.forEach(showProduct);

function showProduct(product) {
    console.log(product)
    const template = document.querySelector("template").content; 
    const myCopy = template.cloneNode(true);
    myCopy.querySelector("h3").textContent = product.productdisplayname;
    myCopy.querySelector("img.productimage").src= https//kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp;
    document.querySelector("img.productimage").alt=product.productdisplayname;
    const parent = document.querySelector("main");
    parent.appendChild(myCopy);
}
 */
