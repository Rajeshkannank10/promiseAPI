var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log("length",data1.length)
        console.log(data1[i]);
        var div = document.createElement("div");
        div.innerHTML= `<div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="${data1[i].flag}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"> country name: ${data1[i].name}</h5>
              <h5 class="card-title">${data1[i].region}</h5>
              <h5 class="card-title">${data1[i].subregion}</h5>
             
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>`
        document.body.append(div);
    }
});  