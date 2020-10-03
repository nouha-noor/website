let carts=document.querySelectorAll('.add-cart');



let  products=[{
	name:"Rexina" ,
	tag:"darcho1" ,
	price:40,
	inCart:0
},{
	name:"Palouta",
	tag:"darcho2",
	price:60,
	inCart:0
},
{
	name:"Rejina",
	tag:"darcho3",
	price:60,
	inCart:0
},{
	name:"Festra",
	tag:"darcho4",
	price:65,
	inCart:0
},
{
	name:"Rocher",
	tag:"darcho4",
	price:55,
	inCart:0
},
{
	name:"Joana" , 
	tag:"milk2", 
	price:60,
	inCart:0
},{
	name:"dano",
	tag:"milk3",
	price:60,
	inCart:0
},
{
	name:"White chocolate cookies",
	tag:"white",
	price:65,
	inCart:0
},
{
	name:"rafaello",
	tag:"rafa",
	price:45,
	inCart:0
},
{
	name:"lindt white",
	tag:"lindt",
	price:40,
	inCart:0
}]
for(let i=0;i< carts.length;i++){
	
	carts[i].addEventListener("click",() => {
		cartNumbers(products[i]);
		totalCost(products[i])
	})
}
function onLoadCartNumbers(){
	let productNumbers=localStorage.getItem('cartNumbers')

if(productNumbers){
	document.querySelector('.nav-link span').textContent=productNumbers
}
}

function cartNumbers(product) {

	let productNumbers=localStorage.getItem('cartNumbers')
	productNumbers=parseInt(productNumbers)
if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers+1)
      document.querySelector('.nav-link span').textContent=productNumbers+1
 
}else {
        localStorage.setItem('cartNumbers',1)
        document.querySelector('.nav-link span').textContent=1

}
       setItems(product)

}
function setItems(product){
	let cartItems=localStorage.getItem('productsInCart')
	cartItems=JSON.parse(cartItems);
	if(cartItems !== null){
     if(cartItems[product.tag] === undefined){
     	cartItems={
     	...cartItems,
     	[product.tag]:product
     }
}

		cartItems[product.tag].inCart += 1;
	}else {
		product.inCart =1;
	 cartItems={
		[product.tag]:product
	}
	}
	
   	   localStorage.setItem("productsInCart",JSON.stringify(cartItems))

}


function totalCost(product){
	let cartCost=localStorage.getItem('totalCost')
	
	if(cartCost !== null){
		cartCost=parseInt(cartCost)
		localStorage.setItem('totalCost',cartCost+product.price)
	}else {
	localStorage.setItem("totalCost",product.price);
}
}




function displayCart(){
	let cartItems=localStorage.getItem('productsInCart')
	cartItems=JSON.parse(cartItems);
	let productContainer=document.querySelector('.products')
		let cartCost=localStorage.getItem('totalCost')


	if(cartItems && productContainer ){
         productContainer.innerHTML=''
         Object.values(cartItems).map(item =>{
         	productContainer.innerHTML+= `<div class="product">
         	<i ="fas fa-window-close"></i>
            <img src="${item.tag}.jpg" ><span>${item.name}</span>
</div>
      <div class="price">${item.price},00</div>
      <div class="quantity">
      <i class=""fas fa-arrow-alt-circle-left"></i>
             <span>${item.inCart}</span>
             <i  fa-arrow-alt-circle-right"></i>
             </div>
             <div class="total">
             $${item.inCart * item.price},00
             </div>
             `
         })
         productContainer.innerHTML+= ` <div class="basketTotalContainer"><h4 class="basketTotalTitle">
         Basket Total </h4>
         <h4 class="basketTotal">
         $${cartCost},00

         </h4>


         `
	}
}


onLoadCartNumbers();
displayCart();