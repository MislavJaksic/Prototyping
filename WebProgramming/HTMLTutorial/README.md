## HTML

[Source](https://developer.mozilla.org/en-US/docs/Learn/HTML)

[Solving common HTML problems](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto)

[Special character codes](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)

## Introduction

### Getting started (HTML elements)

&lta id=""&gtHello world!&lt/a&gt

The construct is called an element.
&lta&gt is the opening tag.
"Hello world!" is called content.
&lt/a&gt is the closing tag.
id="" is called an attribute.

Elements can be nested.

Block level elements: form a visible block.
                      appears on a new line after the previous content.
                      for example, &ltp&gt
Inline elements: in block level elements.
                 will not cause a new line.
                 for example, &ltem&gt.

Empty/void elements: elements without the closing tag and content.
                     for example, &ltimg&gt.

Boolean attributes: attributes without a value.
                    for example, &ltinput type="text" disabled&gt.
                    
Special chars: &lt is &lt;, &gt &gt;, " is &quot; and so on.

### Metadata in HTML (Head)

&lthead&gt: contains metadata about the document, data about the page's contents.

Metadata: charset,
          author and description,
          Facebook and Twitter description/title/image,
          favorites icon,
          link CSS,
          set page language in &lthtml&gt.
      
[Open Graph Data](http://ogp.me/) is a metaprotocol which allows links to pages on Facebook to display images/titles/descriptions. Twitter has a very similar proprietary protocol.

### HTML text

Text elements: in index.html.

### HTML hyperlinks

Anchor: &lta href="website_link" title="hoverover_text"&gtlink_name&lt/a&gt
        any block of elements can be made into a hyperlink.
    
Document fragment: link to a specific part of the page, not just the top.
                   assigned with an id="" attribute.
                   use &lta href="folder/web_page.html#Address"&gt on &lth2 id="Address"&gtCity, Street, Number&lt/h2&gt.

Tips: use clear link words, don't repeat the URI,
      use relative links when you can,
      let readers know what is behind the link (download, file size, ...),
      use &lta href="" download=""&gt download attribute for downloads.

Email: use &lta href="mailto:email:_address"&gt mailto schema.

### Advanced text

Advanced text elements: written in index.html.

### HTML document and website structure

&ltheader&gt: a big strip across the top. Main common information about a website usually stays here.
&ltnav&gt: navigation bar is where links to the site's main sections are located.
&ltmain&gt: for content that is unique to this web page
        &ltmain&gt subsections: &ltarticle&gt, &ltsection&gt, and &ltdiv&gt elements.
          &ltarticle&gt: encloses a block of related content.
          &ltsection&gt: similar to &ltarticle&gt, but wrapps one functionality
&ltaside&gt: peripheral info, links, quotes are; inside &ltmain&gt.
&ltfooter&gt: across the bottom of the page; fine print, copyright notices, or contact info; may be used for SEO purposes.

&ltdiv&gt, &ltspan&gt: non semantic elements; use only if you have to.
               uniquely mark them with class"" attribute value.
               for example, a shopping cart would be wrapped with div.
           
&ltbr&gt: break line
&lthr&gt: horizontal rule

[HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### HTML debugging

HTML parsing and interpreting is extremely permissive and mistakes are rarely detected.

Get familiar with browser [developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools).

[HTML validator](https://validator.w3.org/)

## Multimedia and embedding

### Images in HTML

Never display copyrighted image.

&ltimg&gt, &ltfigure&gt: in index.html.

### Video and audio content

&ltvideo&gt, &ltaudio&gt: in index.html.
                  can have transcripts, &lttrack&gt, made in [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API).

### Other embedding technologies

&ltiframe&gt: can embed Youtube video, Google Maps and many other services. Go to a website press Share-&gtEmbed to get the link.
          set src="" with JavaScript after the rest of the page has been loaded to improve laoding time.

&ltiframe&gt security risks and solutions:
- clickjacking: embed an invisible &ltiframe&gt to steal user interaction
- set CSP directive to forbid your page from being embedded
- embed content only if necessary.
- use HTTPS, for which you need a certificate; get one from [Letsencrypt](https://letsencrypt.org/)
- set the attribute sandbox="" then add permissions if necessery
- configure the Content Security Policy (CSP) which uses HTTP headers. X-Frame-Options HTTP header.

### Adding vector graphics

SVG, an XML based language to describe vector images.

&ltsvg&gt: element for vector images.
       instead of hard coding them, use an editor such as [Inkscape](https://inkscape.org/en/) or [Illustrator].
       &ltcircle&gt, &ltrect&gt: create simple objects.
       &ltfeColourMatrix&gt, &ltanimate&gt, &ltmask&gt: advanced SVG features.

[Prepare Inkscape for the web](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html)

Stopped at: Adding SVG to your pages

### Responsive images

Art direction problem: how are you going to crop the image to fit the screen?

Resolution switching problem: at what resolution do you switch to a smaller image size?

Responsive images: images that answer both problems.
                   in &ltimg&gt attribute sizes="" sets conditions and srcset="" provides alternative images.
                   use the attributes to save bandwidth and loading time.
                   use [developer tools](https://developer.mozilla.org/en/US/docs/Learn/Common_questions/What_are_browser_developer_tools) to help you figure out the correct resolution numbers to input into 'srcset' and 'sizes' attributes.
                   art direction is solved with the &ltpicture&gt element, which wraps &ltimg&gt.

[Responsive images tutorial](https://cloudfour.com/thinks/responsive-images-101-definitions/)

## HTML tables

### HTML table basics

Table: made of rows and columns.
       styling them is very important; apply CSS.

&lttable&gt: in index.html.

&ltcol&gt, &ltcolgroup&gt: unexplored.

### Advanced table features

Stopped at the begining.

## [HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) (hidden tutorial)

Extermly important! [Input data to a server](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data).

Label1: TextBox1
Label2: TextBox2
Label3: TextBox3

### First HTML form

Widget: make up a form.
        label, text fields, boxes, buttons, checkboxes, radio buttons.
        &ltdiv&gt, &ltp&gt or &ltul&gt are often used to group them up.
        
&ltform&gt: the main element
  &ltlabel&gt
    for="" links the label to another widget's id=""
  &ltinput&gt: text box; different types depending on input
  &lttextarea&gt: large text box
    id="" linked to a label
    name="" names the data
  &ltbutton&gt: types: submit: send data
                   reset: reset the form (don't do it!)
                   button: implement a custom JavaScript action
                   
### How to structure an HTML

Demonstrated in index.html.

### [Native form widgets](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/The_native_form_widgets)

Common attributes: autofocus: boolean attribute, should the element have a focus upon the page being loaded?
                   disabled: can the user interact with the element?
                   form: form with which the widget is associated; must equal to the id="" of the &ltform&gt.
                   name: element name, used when submitting data.
                   value: the initial value.
                   
&ltinput&gt: readonly="", disabled="", placeholder="", size="", maxlength="", spellcheck=""
         type="" can radically change the widget.
           type="text"     is a text field.
           type="email"    is an email text field.
           type="password" is a password field.
           type="search"   is a search field.
           type="tel"      is a phone number field.
           type="url"      is a URI field.
           
&lttextarea&gt: multiline text field.
            cols="", rows="" determines the size.
            wrap="" says how the text is wrapped.
            content between the tags is considered the initial value.
            
&ltselect&gt: dropdown menu, multiple choice, autocomplete option.
          in index.html.
          
&ltinput&gt: special checked widgets. 
           checked: boolean attribute, sets the initial state
         type="radio"
         type="checkbox"
         
&ltbutton&gt: types: submit: send data
                 reset: reset the form (don't do it!)
                 button: implement a custom JavaScript action
                 
&ltinput&gt: advanced types.
           type="number" has step="", max="" and min="".
           
           type="range" is a slider with step="", max="" and min="".
           
           type="datetime-local"
           type="month" 
           type="time"   
           type="week"     
           type="date" 
           
           type="color"  
           
           type="file" to send files to the server.
           
           type="hidden" used to send data to the user, but not display it.
           type="image" &ltimg&gt, but behaves like a button.

&ltmeter&gt and &ltprogress&gt:       

### Sending form data

https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data

A client sends a HTTP request to the server and the server sends a response using HTTP. Forms are an interface for configuring the HTTP request.

HTTP request: made of a header and body.

action="" says to which URI the data is sent.
method="" defines the HTTP method.
  "get": sends an empty body
  "post": sends a body that the server should take into account.
  
The way a server will recieve a request depends on the technology:
  Symfony       for PHP
  Django, Flask for Python
  Express       for Node.js
  Ruby On Rails for Ruby
  Grails        for Java

Sending files: enctype="multipart/form-data" changes the Content-Type HTTP header to nable file transfer.

Security concerns: HTML forms are not a threat, but the way the server handles them.
                   XSS, CSRF, SQL injection, HTTP header injection, email injection, and the list goes on...
                   always sanitize all data!
                   
### Form data validation

Stopped at: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
                  