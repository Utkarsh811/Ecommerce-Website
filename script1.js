function myclick() {
    console.log("myclick");



    // container.appendChild(cbox);







    let promise = fetch("https://fakestoreapi.com/products/categories")
        .then((response) => {
            // console.log(response.status);
            // console.log(response.ok);
            // console.log(response.headers)
            return response.json();
        }).then((ProductCategory) => {
            // console.log(ProductCategory);
            let container = document.createElement("div");
            let text = document.createElement("h1")
            text.innerHTML = "VIEW";

            let cbox = document.createElement("INPUT");
            cbox.setAttribute("type", "checkbox");
            // console.log(container);

            for (items in ProductCategory) {
                console.log(items);
                container.appendChild(cbox);
                container.appendChild(text);


                // ProductCategory[items];
            }


            // console.log(ProductCategory[items]);








        });


    let p = fetch("https://fakestoreapi.com/products")
        .then((response) => {
                console.log(response.status);
                return response.json();
            }

        ).then((CatArray) => {
            for (items in CatArray) {
                if (CatArray[items].category == "electronics") {
                    // document.getElementById("bd").innerHTML = CatArray[items].category;

                    console.log(CatArray[items]);
                }

                // console.log(CatArray[items].category);

            }

        });
}