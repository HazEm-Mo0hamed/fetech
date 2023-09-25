fetch("https://fakestoreapi.com/products").then((result)=>{
    return result.json()
    
}).then((date)=>{
    console.log(date);
    let secCard=""
    date.map((values)=>{
        secCard+=`<div class="card">
        <h2 class="title">${values.title}<h2>
        <img src="${values.image}" class="images" alt="">
        <p class="titlemain">${values.description}</p>
        <p class="cetegory">${values.category}</p>
        <p class="price">${values.price}</p>
    </div> `
    })
    document.getElementById("cards").innerHTML=secCard
}).catch(Error("THIS NOT ALLOWED"))

