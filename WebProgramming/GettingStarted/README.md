## Mozilla tutorial, Getting Started With the Web

Source: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web

### Content

Images: use Google images and select tools in Chrome, under Usage rights
select the most permissive one.

Add picture: <img src=""> element in <body>
Picture path: to go up one directory use .., to go down one directory use 
/_dir_name/_dir_name/..., at the end speficy the full image name 
.../_picture.png


Fonts: use Google styles and select a font. At the bottom, click Family
Selected and then select a specific font. Copy its links.

### HTML

Hypertext Markup Language. Markup languages are not programming languages, 
they only say how websites display content.

HTML consist of elements, marked with <>.

Element is made up of an opening and closing tag and content between those
tags.

Tag is a name of the HTML element such as <p> or </b>.

There are opening tags, <p>, and closing tags, </p>.

Elements can have attributes which look like <p class="my-note">.

Elements can be nested.

Empty elements are elements that don't have content (and because of that 
don't have a closing tag either) such as <img src="sub_directory/img.png">.

```html
<!DOCTYPE html> <!-- All HTML pages must have it -->
<html> <!-- Wraps all the elements -->
  <head> <!-- Put everything here that isn't content which is going to be presented -->
    <meta charset="utf-8"> <!-- Always set it to utf-8 -->
    <title>My test page</title> <!-- Title of the browser tab -->
  </head>
  <body> <!-- Put all the content here -->
    <img src="images/mozilla_logo.png" alt="A flaming fox surrounding the Earth.">
  </body>
</html>
```

Add headings, paragraphs, lists and links to the page.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <h1>Main title</h1>
    <img src="images/mozilla_logo.png" alt="A flaming fox surrounding the Earth.">
    <h2>Smaller title</h2>
	<p>A small paragraph. A list follows below:</p>
	<ul>
	  <li>First bullet point</li>
	  <li>Second bullet point</li>
	  <li>The link is below:</li>
	</ul>
	<a href="https://en.wikipedia.org/wiki/Mozilla">Mozzila on Wikipedia</a>
  </body>
</html>
```

### CSS

Cascading Style Sheets. A style sheet language. Applies styles to HTML
elements.

I don't think it is very important.

### JavaScript

JavaScript is a dynamic programming language, more similar to Python then
to Java.

Scripts are put into a seperate folder and then called into the HTML 
document with an element called <script src="">. Put the element at the 
bottom of <body> to avoid problems with loading the script before the 
rest of the document.

Look up Document Object Model (DOM) API.

Basic introduction: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

Events: real interactivity by listening to what is happening on the 
website. 
Example:
```js
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
```

### Publishing

You need web hosting, a file space on a web server, and domain name, a 
unique address from a domain register.

To transfer files to a remote web server, you will need a program that 
impmenets the File Transfer Protocol (FTP).

Some free services for hosting are: Neocities, Blogger and WordPress.

Free online tools that allow you to publish a web site are: GitHub 
(GitPages) and Google App Engine.

Publishing via GitPages source: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website

Additional deployment details on CodeCademy source: https://www.codecademy.com/learn/deploy-a-website



 






















