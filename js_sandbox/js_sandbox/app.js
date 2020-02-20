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
// //   li.textContent = `${index}: Hello`;
// // });

// // console.log(lis);

// // //document.querySelectorAll
// // const items = document.querySelectorAll('ul.collection li.collection-item');

// // items.forEach(function(item,index){
// //   item.textContent= `${index}: Hellos`;
// // });

// // const liOdd = document.querySelectorAll('li:nth-child(odd)');
// // const liEven = document.querySelectorAll('li:nth-child(even)');

// // liOdd.forEach(function(li,index){
// //   li.style.background = '#ccc'; 
// // });


// // for(let i = 0; i < liEven.length; i++){
// //   liEven[i].style.background = '#f4f4f4';
// // }
// // console.log(items);


// //TRAVERSING THE DOM]

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // //Get child nodes(returns nodelist)
// // val = list.childNodes;
// // val = list.childNodes[0];
// // val = list.childNodes[0].nodeName;

// // //nodeType values
// // //1- Element
// // //2 - Attribute (deprecated)
// // // 3 - Text node
// // // 8 - comment
// // // 9 - Document itself
// // // 10 - Doctype
// // val = list.childNodes[1].nodeType;






// //Get children element nodes(returns html collections)
// val = list.children;
// val = list.children[1];

// list.children[3].textContent = 'Hello';
// //Children of children


// // list.children[3].children[0].id = 'test-link';
// // val = list.children[3].children[0];

// //First child
// // val = list.firstChild;
// // val = list.firstElementChild;

// // Last Child
// // val = list.lastChild;
// // val = list.lastElementChild;

// //Count child elements
// val = list.childElementCount;

// //Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// // Get previous sibling
// val = listItem.previousSibling;
//  val = listItem.previousElementSibling;


// console.log(val);

// //CREATING ELEMENTS 
// const li = document.createElement('li');

// //Add class
// li.className = 'collection-item';


// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// //Create new link element
// const link = document.createElement('a');

// //Add classes
// link.className = 'delete-item secondary-content';

// //Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>'

// //Append link into li
// li.appendChild(link);

// //Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);


//REPLACE ELEMENT

// //Create Element
// const newHeading = document.createElement('h2');

// //Add id
// newHeading.id = 'task-title';

// //New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// //Get the old heading
// const oldHeading = document.getElementById('task-title');

// //Parent
// const cardAction = document.querySelector('.card-action');

// //Replace
// cardAction.replaceChild(newHeading, oldHeading);


// //REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelectorAll('ul');

// //Remove list item
// lis[0].remove();

// // // Remove child element
// // list.removeChild(lis[3]);

// //CLASSES & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;


// val = link.className;
// val = link.classList;
// // val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');

// //Attributes
// val =  link.getAttribute('href');
// // val = link.setAttribute('href', 'http://google.com');
// val = link.hasAttribute('href');

// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//    console.log('Hello World');

//    e.preventDefault();
// })

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//   //  console.log('Clicked')

//   let val;

//   val = e;

//   //Event target element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   // e.target.innerText = 'Hello';
  
//     //Event type
//     val = e.type;

//     //Timestamp
//     val = e.timeStamp;

//     //Coordinate of event relative to the window
//     val = e.clientY; 
//     val = e.clientX;

  
//     //Coordinate of event relative to the element
//     val = e.offsetY; 
//     // val = e.offsetX;

// //   console.log(val)
// }

//MOUSE EVENTS


// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('.h5');

//Click
// clearBtn.addEventListener('click', runEvent);

// //Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

//Mousedown
// clearBtn.addEventListener('mousedown', runEvent)

// //Mouseup
// clearBtn.addEventListener('mouseup', runEvent)

// //Mouseenter
// card.addEventListener('mouseenter', runEvent)

// //Mouseleave
// card.addEventListener('mouseleave', runEvent)

// //Mouseover
// card.addEventListener('mouseover', runEvent)


// //Mouseout
// card.addEventListener('mouseout', runEvent)

// //Mousemove
// card.addEventListener('mousemove', runEvent)




// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }


// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// //Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

//keydown
// taskInput.addEventListener('keydown', runEvent);

//keyup
// taskInput.addEventListener('keyup', runEvent);

//keypress
// taskInput.addEventListener('keypress', runEvent);

// //focus
// taskInput.addEventListener('focus', runEvent);

// //Blur
// taskInput.addEventListener('blur', runEvent);

// //Cut
// taskInput.addEventListener('cut', runEvent);

// //Paste
// taskInput.addEventListener('Paste', runEvent);

// //Input
// taskInput.addEventListener('input', runEvent);

// //Change
// Selection.addEventListener('change', runEvent)

// function runEvent(e){
//   console.log(`Event Type: ${e.type}`);

//   console.log(e.target.value);

//   heading.innerText = e.target.value;
  

//   // //Get input value
//   // console.log(taskInput.value);

//  // e.preventDefault();
// }






