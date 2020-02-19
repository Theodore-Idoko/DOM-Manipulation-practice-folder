// //document.getElementBy Id()

// console.log(document.getElementById('task-title'));

// //Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// //Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// //taskTitle.style.display= 'none';

// //Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My List';
// taskTitle.innerHTML = '<span style="color:red"> Task List </span>';

// //document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));


// document.querySelector('li').style.color = 'red';
// document.querySelector(' ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'hello world';
// document.querySelector('li:nth-child(odd)').style.color = 'pink';

// MULTIPLE SELECTORS

//document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item')
// console.log(items)

// console.log(items[0])
// items[0].style.color = 'red';
// items[3].textContent = 'Hello'

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

//document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// //Convert Html collection into array

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li){
//   console.log(lis.className)
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// //document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item,index){
//   item.textContent= `${index}: Hellos`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li,index){
//   li.style.background = '#ccc'; 
// });


// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = '#f4f4f4';
// }
// console.log(items);


//TRAVERSING THE DOM]

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes(returns nodelist)
val = list.childNodes;

//Get children element nodes(returns html collections)
val = list.children;

console.log(val);



