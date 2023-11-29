var container=document.createElement("div");
container.className="container";
container.style.marginTop="30px";
container.style.backgroundColor="pink"
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

var result=fetch("https://restcountries.com/v2/all");
result.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        try{
            
            row.innerHTML+=`<div class="col-md-4" style="padding: 20px">
            <div class="card text-black bg-primary mb-3" style="max-width: 18rem; font-weight:bold;">
            <div class="card-header" style="text-align: center">${data1[i].name}<br></div>
            <img src="${data1[i].flag}" class="card-img-top" alt="country flag">
            <div class="card-body">
            <p class="card-text">Capital: ${data1[i].capital}<br>Population: ${data1[i].population}<br>
             Region: ${data1[i].region}<br> Country code: ${data1[i].alpha3Code}<br> 
             Latitude: ${data1[i].latlng[0]}<br> Longitude: ${data1[i].latlng[1]}<br></p>
            </div>
            </div>
            </div>`

        }
        catch(error){
            console.log(error)
        }
       
    }
    document.body.append(container);
}

