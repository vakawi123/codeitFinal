    fetch("https://dummyjson.com/users/9")
        .then(response => response.json())
        .then(data => {
            document.getElementById("image").innerHTML = "<img src= {data.image}>";
            document.getElementById("username").innerText = "Name: " + data.firstName;
            document.getElementById("lastName").innerText = "lastName: " + data.lastName;
            document.getElementById("age").innerText = "age: " + data.age;
            document.getElementById("phone").innerText = "phone: " + data.phone;
            document.getElementById("email").innerText = "Email: " + data.email;
        })

