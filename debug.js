var date  = new Date();
date.setDate(date.getDate() + 1);
tomorrow = date.toLocaleDateString("en-US");

var todo = document.querySelector("h1");
todo.textContent = `TODO on ${tomorrow}`;
