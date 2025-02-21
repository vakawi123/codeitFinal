
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((products) => {
            console.log("Fetched Products:", products); 

        products.forEach((product) => {
            
            // Container
            const container = document.createElement("div");
            container.className = "product-container";

            // Title
            const title = document.createElement("h3");
            title.innerText = product.title;
            title.className = "title";

            // Description
            const description = document.createElement("p");
            description.innerText = product.description;
            description.className = "description";

            // Price
            const price = document.createElement("p");
            price.innerText = `Price: $${product.price}`;
            price.className = "price";

            // Image
            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.title;
            image.width = 250;
            image.height = 250;
            image.className = "img";

            // See More Button
            const button = document.createElement("button");
            button.innerText = "See More";
            button.className = "button";

            // Modal
            const modal = document.createElement("div");
            modal.className = "modal";
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h3>${product.title}</h3>
                    <img src="${product.image}" width="200px" height="200px" alt="${product.title}">
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                </div>
            `;

            document.body.appendChild(modal);

            button.addEventListener("click", () => {
                modal.style.display = "block";
            });

            modal.querySelector(".close").addEventListener("click", () => {
                modal.style.display = "none";
            });

            window.addEventListener("click", (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });

            container.appendChild(image);
            container.appendChild(title);
            container.appendChild(description);
            container.appendChild(price);
            container.appendChild(button);

            document.body.appendChild(container);
        });
    });
