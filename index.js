var slide=["https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1PUB_CampMcDonalds_1168x520_v1.jpg","https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1pub_FreeNugv4_1168x520.jpg","https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1PUB_McDelivery_v4_1168x520.jpg","https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1PUB_Desktop_Deals-v1_1168x520.jpg"]

var menu=[{img:"https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:menu-category-desktop",name:"Beverages"},{img:"https://s7d1.scene7.com/is/image/mcdonalds/nav_combo_meal_160x160_:menu-category-desktop",name:"Combo meals"},{img:"https://s7d1.scene7.com/is/image/mcdonalds/breakfast_300x300:menu-category-desktop",name:"Breakfast"},{img:"https://s7d1.scene7.com/is/image/mcdonalds/desserts_shakes_300x300:menu-category-desktop",name:"Desserts"},{img:"https://s7d1.scene7.com/is/image/mcdonalds/snacks_sides_300x300:menu-category-desktop",name:"Snacks"},{img:"https://s7d1.scene7.com/is/image/mcdonalds/burgers_300x300:menu-category-desktop",name:"Burgers"},{img:"https://s7d1.scene7.com/is/image/mcdonalds/Menu_LeftRail_mcd-160x160:menu-category-desktop",name:"Bakery"},{img:"https://s7d1.scene7.com/is/image/mcdonalds/nav_happy_meal_160x160:menu-category-desktop",name:"Happy Meal"},{img:"https://s7d1.scene7.com/is/image/mcdonalds/D123_160x160:menu-category-desktop",name:"Dollar Menu"},{img:"https://s7d1.scene7.com/is/image/mcdonalds/chicken_sandwiches_300x300:menu-category-desktop",name:"Chicken Sandwich"},{img:"https://s7d1.scene7.com/is/image/mcdonalds/mccafe_300x300:menu-category-desktop",name:"Drinks"}]


var po= JSON.parse(localStorage.getItem("por"))||[];

for(var i=0;i<menu.length;i++){
    menu[i].id=i;
}

function display(menu){
    document.querySelector("#ol2").innerHTML ="";
    
   menu.forEach(function(el){
    var ol3=document.createElement("div");

var checkbox=document.createElement("input");
checkbox.setAttribute("type","checkbox");


checkbox.addEventListener("click",function(){
    addTo(checkbox,el);
});

var image=document.createElement("img");
image.setAttribute("src",el.img);
var naam=document.createElement("p");
naam.innerText=el.name;

ol3.append(checkbox,image,naam);
document.querySelector("#ol2").append(ol3);
   });
   
    

}

function addTo(checkbox,order){
   
    if(checkbox.checked==true){
        po.push(order);
    }
    else{
        po=po.filter(function(el){
            return order.id!=el.id;
        })
    }
    console.log(order);
    localStorage.setItem("por",JSON.stringify(po));
}



window.onload=function(){
   
    var img=document.createElement("img");
    var i=0;
    setInterval(function(){
        img.setAttribute("src",slide[i]);
        i++;
        if(i==slide.length){
            i=0;
        }
    },2000)
    document.querySelector("#slide").append(img);
}

document.querySelector("#order").addEventListener("click",disList);
function disList(){
    document.getElementById("popup").style.display="block";
     display(menu);
}

document.querySelector("#cross").addEventListener("click",remList);
function remList(){
    document.querySelector("#place").style.display="block";
    document.querySelector("#popup").style.display="none";
    po.splice(0, po.length);
    localStorage.setItem("por",JSON.stringify(po));
}

document.querySelector("#place").addEventListener("click",placedOrder);

function placedOrder(){
   setTimeout(function(){
    if(po.length>=1){
        document.querySelector("#place").style.display="none";
        document.querySelector("#ol2").innerHTML ="";

           var unique=document.createElement("h2");
           unique.innerText="Your Order ID is : "+Math.floor(Math.random()*999999)+100000;
           document.querySelector("#ol2").append(unique);
         
         po.forEach(function(el){
         var ol3=document.createElement("div");
     
     var image=document.createElement("img");
     image.setAttribute("src",el.img);
     var naam=document.createElement("p");
     naam.innerText=el.name;
     
     ol3.append(image,naam);
     document.querySelector("#ol2").append(ol3);
        });
    }
},3000);
}

// function displayordereditem(arr){

//     setTimeout(function(){
        
//         var unique=document.createElement("h2");
//         unique.innerText="Your Order ID is : "+Math.floor(Math.random()*999999)+100000;
//        var container =  document.querySelector("#ol2");
//        console.log(container);
//        container.innerHTML = "";
//         // document.querySelector("#ol2").append(unique);
//         document.querySelector("#place").style.display="none";
//         arr.forEach(function(el){
            
//             var ol3=document.createElement("div");
//             var image=document.createElement("img");
//             image.setAttribute("src",el.img);
//             var naam=document.createElement("p");
//             naam.innerText=el.name;
            
//             ol3.append(image,naam);
//             container.append(ol3);
//         })

//     },1000)
//     arr = [];
//     localStorage.setItem("por",JSON.stringify(arr));
// }