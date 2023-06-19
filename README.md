

Today we covered:

* border radius
* box shadow
* New page (javascript.html)
* Added a button with onclick event that fired an alert


Next class: 
* Make sure we link to javascript.html from all pages (and remove SVGs from javascript.html since it's messing up the code highlighting)
* Let's break out the Script tag to it's own file (like we did with style.css)
* Go over functions.  What are they "a chunk of code to do a task". What is the syntax.  [https://www.freecodecamp.org/news/what-are-functions-in-javascript-a-beginners-guide/](https://www.freecodecamp.org/news/what-are-functions-in-javascript-a-beginners-guide/)
* Click button => alert "warning"
* Explain variables. A var is a box. It just contains things. It can hold a number. Some text. And other things. 
* var alertText = "Warning! This is Dangerous"
* Click button => alert random num between 0 and 1
* Click button => alert random num between 0 and 20
* Click button => alert random num between 0 and 20 but round down
* Add input for "name" 
* Click button => alert "name is cool"
* Play with Dom object. Append p to DOM [https://www.w3schools.com/js/js_htmldom_document.asp](https://www.w3schools.com/js/js_htmldom_document.asp)
* Discuss methods and properties [https://www.w3schools.com/js/js_htmldom_methods.asp](https://www.w3schools.com/js/js_htmldom_methods.asp) and 
* Click button and updated DOM 
* Create Mad Lib

```
function myFunction() {
      // alert('WARNING!');

      // introduction to variables
      var alertText = 'WARNING! (from a variable)';
      alert(alertText);

      // var randomNumber = Math.random();
      // alert(randomNumber);

      // now make it between 0 and 100
      // var randomNumber = Math.random() * 100;
      // Note: no quotes around randomNumber

      // now make it between 0 and 10
      // var randomNumber = Math.random() * 10;

      // now round it down so there are no decimals
      // var roundDown = Math.floor(randomNumber);
      // alert(randomNumber2);

      // get name from input field & concatenate
      // var name = document.querySelector('#name').value
      // alert(name + ' is very smart and handsome');

      // Concatenation
      // var x = 10;
      // var y = 20;
      // var sum = x + y;
      // alert(x + '+' + y + '=' + sum);

      // Now let's play with HTML elements on the page
      // var div = document.querySelector('.child');
      // var p = document.createElement('p');
      // p.textContent = 'I was appended to the div';
      // div.appendChild(p);
    }
```
