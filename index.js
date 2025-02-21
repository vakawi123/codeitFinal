let products;

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((result) => {
    products = result;


    products.map((products,index,array) => {
        const price = document.createElement("price")
        const image = document.createElement("img");
        const container = document.createElement("div");
        const title = document.createElement("h3");
        const description = document.createElement("p");


    //button
        const button = document.createElement("button")
        button.innerHTML = "see more"
        button.id = "button"
        document.body.appendChild(button)

        button.addEventListener("click", (event) => {
            console.log(event.target)          
        })


        //modal 

        const modal = document.createElement("modal")
        modal.id = 'modal'
        container.appendChild(modal)

    
        title.innerHTML = products.title;
        title.innerHTML = products.description;
        price.innerHTML = products.price;
        price.id = "price"

        container.appendChild(price)
        container.appendChild(title);
        container.appendChild(description);
        document.body.appendChild(container);



        //image
        image.src = "https://t3.ftcdn.net/jpg/04/85/49/84/360_F_485498470_HPZ4hpLnyZdLqNs6r1nFsUz2Wvd50wXt.jpg"
        image.setAttribute("width", "250px");
        image.setAttribute("height", "250px");
        image.className = "img";
        
        // image.addEventListener("mouseover", (event) => {
        //     console.log(event.target)
        // })
        document.body.appendChild(image); 
        // console.log(products,index)
    });
})