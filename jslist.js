// ADD NEW ITEM TO END OF LIST
var node = document.createElement('li');
node.appendChild(document.createTextNode('cream'));
 
document.querySelector('ul').appendChild(node);

// ADD NEW ITEM START OF LIST


var node  = document.createElement('li')
node.appendChild(document.createTextNode('kale'));
document.querySelector('ul').appendChild(node);
let node2 = document.getElementById("one")
let parentDiv = node2.parentNode
parentDiv.insertBefore(node, node2)

// ADD A CLASS OF COOL TO ALL LIST ITEMS

  
ul = document.querySelector('#page > ul');
ul.id = 'list1';
list1.classList.add("cool");
var x = document.querySelectorAll('li');
for(let i = 0; i < x.length; i++){
    x[i].classList.add("cool");
}
 
  

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
h2 = document.querySelector('h2');
h2.id = 'numberedhead';
var y = document.getElementById("numberedhead").innerHTML;
var newHeading = y + "&nbsp &nbsp &nbsp" +x.length;
document.getElementById("numberedhead").innerHTML = newHeading;