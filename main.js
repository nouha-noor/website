var dark = {name: 'Rexina',
name: 'Palouta',
name: 'Rejina',
name: 'Festra'
};
 var milk = {
 	name:'Rocher',
 	name:'joana',
 	name:'dano'
};
var white = {
	name:'White chocolate & cookies',
	name: 'rafaello',
	name:'lindt white'
}
const list = document.getElementById('list');
function setList(obj){
clearListe();
for(const choc of obj){
 const item=document.createElement('li');
 item.classListe.add('list-group-item');
 const text=document.createTextNode(choc.name)
}
if(obj.length===0){
	noResults();
}
};
function clearListe(){

};
function noResults(){

};
const searchInput = document.getElementById('search');
 searchInput.addEventListener('input',(event) => {
 	const value = event.target.value;
 });