// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");//create span newElement
  var txt = document.createTextNode("x");//create a text myNodelist
  span.className = "close";
  span.appendChild(txt);//append text to element
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].addEventListener('click',function() {
  var div = this.parentElement;
  div.style.display = "none";//display="none" to delete anycontent
})
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {//tagname requires in allcaps
  ev.target.classList.toggle('checked');//classlist.toggle('checked')add the class if not exist and return true
  }
})


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}
//Clearing the list
function removeAll(){
  var lst = document.querySelector("ul");
    lst.innerHTML = "";
  }
