// Accessing Elements of HTML.


// 1- Accessing Elements of HTML By Id.
let id = document.getElementById("heading1")
console.log(id.innerHTML);

// 2-Accessing Elements of HTML By Class Name.
let className = document.getElementsByClassName("heading")
console.log(className[0].innerHTML);

// 3- Accessing Elements of HTML By Tag Name.
let tagName = document.getElementsByTagName("h2");
console.log(tagName[2].innerHTML);

//4- Accessing Elements of CSS By Query Selector.
