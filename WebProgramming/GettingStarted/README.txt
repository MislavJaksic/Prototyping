## Mozilla tutorial, Getting Started With the Web

Source: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web

### Content

Images: find them using [Google images](https://www.google.com/imghp?hl=en&tab=wi); after searching select Tools->Usage rights and select the most permissive licence.
        <img src="path/to/picture"> element embedds the picture.

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

Example elements: headings <h1>..<h6>,
                  paragraphs <p>,
                  unordered (bullet point) lists <ul>,
                  ordered (enumerated) lists <ol>,
                  list items (members) <li>,
                  anchor (link) to a page <a>,
                  and many other are all valid HTML elements.

### CSS

Cascading Style Sheets. A style sheet language. Applies styles to HTML elements. Takes care of the look and feel of a web page.

Styles: files that end with .css. Made of CSS rulesets.
        applied to a HTML document with <link href="_path" rel="stylesheet" type="text/css">.
    
CSS rulesets: made of selectors and declaration block.
              also called a rule.

Selectors: different types: tag/element - based on HTML element                 - eg. p
                            ID - based on the unique value of attribute id      - eg. #my-id
                            class - based on the value of attribute class       - eg. .my-class
                            attribute - based on if an element has an attribute - eg. img[src]
                            pseudo-class - based on a specific state            - eg. a:hover
           selects HTML elements to be styled.

Declaration block: made of {} and declarations in the brackets.

Declaration: made of a property and a property value.
             specifies which element's property you want to style (color, width, ...).
         
Property: ways in which you can style an element.

Property value: chooses one out of many possible appearances.

Think about CSS in terms of boxes. The boxes in the box model are:
- padding - space around the content
- border - solid line just outside of padding
- margin - space around the outside of the element

Other CSS properties: width
                      background-color
                      color
                      text-shadow
                      display
              
Block level: it takes space on the page (and can have styles applied to it)
             for example, <body>
Inline element: don't take up space on a page; give them block level behaviour with {display: block}
                for example, <img>
       
### JavaScript

JavaScript is a dynamic programming language, more similar to Python then to Java.

Scripts: put them into a separate folder.
         called them into the HTML document with an element called <script src="">. Put the element at the bottom of <body> to avoid problems with running the script before lodaing the document.

[Document Object Model (DOM) API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) 

End a line with a semicolon (;).

Declare variable: use let or var.

Data types: string, number, boolean, array and object.

Equality is ===, unequal is !==.

Events: add interactivity by listening to the user's actions.
        for example, onclick.
		
Error: "Uncaught SecurityError: Failed to read the 'localStorage' property from 'Window': Access is denied for this document."
           solution: enable third party cookies in the browser

### Publishing

Web hosting and domain name.

To transfer files to a remote web server, you will need a program that implements the File Transfer Protocol (FTP).

Some free services for hosting are: Neocities, Blogger and WordPress.

Free online tools that allow you to publish a web site are: GitHub (GitPages) and Google App Engine.

Publishing via GitPages source: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website

Additional deployment details on CodeCademy source: https://www.codecademy.com/learn/deploy-a-website
