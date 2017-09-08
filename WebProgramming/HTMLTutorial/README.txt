## HTML

Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started

### HTML element

<p>Hello world!</p>

The construct is called an element.
<p> is the opening tag.
"Hello world" is called content.
</p> is the closing tag.

Elements can be nested.

Elements without the closing tag and content are called empty elements.

Elements can have attributes. Example: <p class="note">Hello world!</p>

Attributes without a value are called boolean attributes.

### HTML <head>

The head's job is to contain metadata about the document.

Putting content in it's attributes can optimize search results. (Open Graph 
Data)[http://ogp.me/] is a metaprotocol which provides richer metadata for social networks.
Twitter has a very similar proprietary metadata.

You can display a favicon (favorite icon) by setting the path of 
<link href=""> in the <head> to an image.

### HTML text structure

Headings and titles: <h1> to <h6>, with h1 being the biggest
Paragraphs: <p>
Ordered lists:
<ol>
  <li>First bullet point</li>
  <li>Second bullet point</li>
</ol>
Italic, bold and underline: <i>, <b>, <u>

### HTML hyperlinks

Inside the anchor element <a href="" title="">. Any block of elements can 
be made into a hyperlink.

Tips: use relative links as much as possible, fill in the attributes and 
correctly format the text. When linking to none HTML resources, let readers
know what is behind the link: (PDF, 10MB), (requires Flash) or 
(stream opens up in another tab).

Use download attribute when linking to a download.

Construct the navigation menu at the top or to the sides.

When linking to an email use mailto: schema.

### Advanced HTML formatting

Description lists: <dl> in which there are description terms and description descriptions.
<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dt>B</dt>
  <dd>Bus</dd>
</dl>
Blockquote: 
Inline quotation:
Citation:
Abbreviation:
Contact details: <address>
Superscript: <p>2 * x<sup>2</sup> + 5 * x + 3 </p>
Subscript: <p>Caffeine's chemical formula is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub></p>
Computer code: <code>, <pre>, <var>, <kbd>, <samp>
Time and dates: <time>

### HTML page structure

Header: <header>.
Navigation bar: <nav>.
Main content: <main>, with various content subsections represented by <article>, <section>, and <div> elements.
Sidebar: <aside>; often placed inside <main>.
Footer: <footer>.

There are a lot of HTML elements: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

Commonly used elements are:
<main>
<article>
<section>
<aside>
<header>
<nav>
<footer>

If you can't find an appropriate semantic element, use <span> 
(inline element) or <div> (block element) and mark them with a unique 
class="" to mark them. Use these sparingly as they are non semantic 
elements that clutter HTML.

Line break element: <br>
Horizontal line (rule): <hr>

A website needs to be planned, its content divided between pages and with
consistent navigation and search layouts.

### HTML debugging

HTML parsing and interpreting is extermely permissive, meaning that 
mistakes cannot be automatically detected.

Get familiar with browser developer tools: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools

HTML can be validated using: https://validator.w3.org/

### HTML exercises and projects

Mark up a letter: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter

## Multimedia and embedding

Never point to an image hosted by another website. Make sure you don't host copyrighted images.

It is possible to add audio and video to a page, but when you have to do it, research it.

It is possible to add YouTube video and Google Maps into HTML. Use <iframe> element.
With <iframe>, you can embed other web documents into your website.
You should load such content with JavaScript after the main content of your page is loaded to reduce loading times.
There are security concerns that have been resolved by doing the following:
- pages can be forbbiden from being embedded into other pages by setting a CSP directive.
- embed content only if necessary.
- use HTTPS, for which you need a certificate, but you can get one from https://letsencrypt.org/
- make sure all elements have an attribute 'sandbox' to make sure embedded content can do as little harm as possible.
- set a content security policy which uses HTTP headers. X-Frame-Options.

Possible to include vector and raster graphics into HTML.

Resolution switching: different image size depending on the size of the browser.
Add 'srcset' and 'sizes' attributes to img element.
'srcset' provides alternative images, 'sizes' states screen size conditions under which a picture should be displayed. Once a condtions is met, all other are ignored.
Use developer tools to help you out figure these numbers out.

If you want to crop images instead of smaller ones, use the <picture> element.
