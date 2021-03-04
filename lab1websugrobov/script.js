let out = document.getElementById("output");
window.addEventListener('load', () => {
    const input = document.getElementById("number");
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            //console.log(input.value);
            out.innerText = "";
            sendRequestNumber(input.value);
        }
    })
})

function sendRequestNumber(input){
    fetch('https://fakestoreapi.com/carts/'+ input)
            .then(res => res.json())
            .then(json => {
                 
                    out.innerText += "id: " + json.id + "\n";
                    out.innerText += "userId: " + json.userId + "\n";
                    out.innerText += "date: " + json.date + "\n";
                    //out.innerText += "products: " + json.products + "\n";
                    json.products.forEach(element=>{
                        out.innerText += "productId: " + element.productId + ",     ";
                        out.innerText += "quantity: " + element.quantity + "\n";
                          
                    } )
                    out.innerText += "\n\n\n";   
                
            })
}

window.addEventListener('load', () => {
    const but = document.getElementById("but");
    but.addEventListener('click', () => {
        var abc = document.querySelectorAll(".radio input");
        abc.forEach(cat => {
            if (cat.checked == true) {
                out.innerText = "";
                sort(cat.value);
            }
            //console.log(cat.value);
        })
    })
})

function sort(sort){
    fetch('https://fakestoreapi.com/carts?sort='+ sort)
            .then(res => res.json())
            .then(json => {
                json.forEach(element=>{
                    out.innerText += "id: " + element.id + "\n";
                    out.innerText += "userId: " + element.userId + "\n";
                    out.innerText += "date: " + element.date + "\n";
                    
                    
                    out.innerText += "\n\n\n";   
                })
                
                
                });
            
}

fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))