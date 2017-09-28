## Mozilla tutorial, Getting Started With the Web

Source: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web

### Content

Images: find them using [Google images](https://www.google.com/imghp?hl=en&tab=wi); after searching select Tools->Usage rights and select the most permissive licence.
        <img src="path/to/picture"> element embeddes the picture.

Fonts: use [Google fonts](https://fonts.google.com/); select a font then at the bottom, click Family Selected and then select a specific font. Copy its links.

### Paths

Go up one directory:                    ..
Go down one directory:                  /_dir_name/_dir_name/...
At the end specify the full image name: .../_picture.png

### Dealing with files (Website structure)

website/
| --> index.html 
| --> images/
|     | --> imageOne.jpg
|     | --> imageTwo.jpg 
| --> styles/
|     | --> stylesSheet.css
| --> scripts/
|     | --> scriptOne.js
|     | --> scriptTwo.js

### HTML

Hypertext Markup Language. Markup languages are not programming languages, they only say how websites should display content.

HTML is made up of elements: <tag att="value">content</tag>.

An element is made up of: an opening <> and closing tag </>,
                          content between those tags,
			  attributes and their values.

Tag: name of the HTML element, such as <p> or <b>.

Attributes: written in the opening tag, like <p class="my-note">.

Elements can be nested.

Empty elements: elements that don't have content (and because of that don't have a closing tag either) such as <img src="sub_directory/img.png">.

Example elements: headings <h1>..<h7>,
                  paragraphs <p>,
		  unordered (bullet point) lists <ul>,
		  ordered (numerated) lists <ol>,
		  list items (members) <li>,
		  annotation (link) to a page <a>,
		  and many other are all valid HTML emelents.

### CSS

Cascading Style Sheets. A style sheet language. Applies styles to HTML elements. Takes care of the look and feel of a web page.

Styles: files that end with with .css. Made of CSS rulesets.
        applied to a HTML document with <link href="_path" rel="stylesheet" type="text/css">.
	
CSS rulesets: made of selectors and declaration block.
              also called a rule.

Selectors: different types.
           selectes HTML elements to be styled.

Declaration block: made of {} and declarations in the brackets.

Declaration: made of a property and a property value.
             specifies which element's property you want to style (color, widgth, ...).
	     
Property: ways in which you can style an element.

Property value: chooses one out of many possible apperances. 

Stopped at https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics

### JavaScript

JavaScript is a dynamic programming language, more similar to Python then to Java.

Scripts: put them into a separate folder.
         called them into the HTML document with an element called <script src="">. Put the element at the bottom of <body> to avoid problems with loading the script before the rest of the document.

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
implements the File Transfer Protocol (FTP).

Some free services for hosting are: Neocities, Blogger and WordPress.

Free online tools that allow you to publish a web site are: GitHub 
(GitPages) and Google App Engine.

Publishing via GitPages source: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website

Additional deployment details on CodeCademy source: https://www.codecademy.com/learn/deploy-a-website
