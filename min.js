let url = "https://coffee.alexflipnote.dev/random.json";


fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);  

        let container = document.getElementById("container");

       

        let img = document.createElement("img");
        img.src = data.file;  

        container.appendChild(img);

        img.classList.add("coffeeImage");
    })
    setTimeout(function () {
        location.reload()
    }, 2000);
    
    
  