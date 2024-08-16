console.log('connected');


// const title=document.getElementById('title');

// title.innerText='this is the DOM how to have to learn properly'
// title.style.color='red';
// console.log(title.innerText);
// -------------------------------------


// const title2=document.querySelector('#title');
// title2.textContent='I am learning DOM';


// console.log(title2)
// ----------------------------------


const items=document.getElementsByClassName('li-items');

// console.log(items.length)

// ------------------------------------------
const myArry= Array.from(items);
console.log(myArry)
// ------------------------------------------

// for(let index=0; index <items.length; index++ ){
//     const element=items[index];
//     console.log(element);
// }

// -----------------------------------------------

for(const itirate of items ){
    // console.log(itirate)

    itirate.style.fontSize='40px';
    itirate.style.backgroundColor='yellow';
}
// --------------------------------------------
 const items2=document.getElementsByTagName('li');

//  console.log(items2); 
// ------------------------------------------------------


// const ul=document.getElementById('li-container');

// console.log(ul.children); // কনো নিদ্রিস্টো বিষয় এর ভিতর সকল কিছু পেতে 'children' এর প্রয়োজন হই 
 
// console.log(ul.parentElement) 
// console.log(ul.nextElementSibling)


// const ul=document.querySelector('ul');

// ul.innerHTML='<p> Hello </p>';







