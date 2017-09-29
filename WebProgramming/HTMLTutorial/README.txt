## HTML

Source: https://developer.mozilla.org/en-US/docs/Learn/HTML

### Getting started

### HTML element

<a id="">Hello world!</a>

The construct is called an element.
<a> is the opening tag.
"Hello world!" is called content.
</a> is the closing tag.
id="" is called an attribute.

Elements can be nested.

Block level elements: form a visible block.
                      appears on a new line after the previous content.
					  for example, <p>
Inline elements: in block level elements.
                 will not cause a new line.
				 for example, <em>.

Empty/void elements: elements without the closing tag and content.
                     for example, <img>.

Boolean attributes: attributes without a value.
                    for example, <input type="text" disabled>.
					
Stopped at Omitting quotes around attribute values. https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started

### HTML <head>

The <head>'s job is to contain metadata about the document, data about the pages contents.

Nesting elements into the <head> and filling them with metadata can optimize search results.
[Open Graph Data](http://ogp.me/) is a metaprotocol which provides richer metadata for social networks. Twitter has a very similar proprietary metadata.

You can display a favicon (favorites icon) by setting the path of <link href=""> element in the <head> to an image.

### HTML hyperlinks

Inside the anchor element <a href="" title="">, any block of elements can be made into a hyperlink.

Use relative links as much as possible, fill in the attributes and correctly format the text. When linking to other HTML resources, let readers know what is behind the link: (PDF, 10MB), (requires Flash) or (stream opens up in another tab).

Use <download> attribute when linking to a download.

Construct the navigation menu at the top or to the sides.

When linking to an email use "mailto: schema".

### HTML page structure

<header>: a big strip across the top. Main common information about a website usually stays here.
<nav>: navigation bar is where links to the site's main sections.
<main>: contains most of the unique content of a given web page, with various content subsections represented by <article>, <section>, and <div> elements.
<aside>: sidebar is often where peripheral info, links, quotes are; often placed inside <main>.
<footer>: across the bottom of the page that generally contains fine print, copyright notices, or contact info. Sometimes used for SEO purposes.

<article>: encloses a block of related content.
<section>: similar to <article>

There are a lot of HTML elements: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

If you can't find an appropriate semantic element, use <span> (inline element) or <div> (block element) and mark them with a unique class="" to mark them. Use these sparingly as they are non semantic elements that clutter HTML.

A website needs to be planned, its content divided between pages and with consistent navigation and search layouts.

### HTML debugging

HTML parsing and interpreting is extremely permissive, meaning that mistakes cannot be automatically detected.

Get familiar with browser developer tools: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools

HTML can be validated using: https://validator.w3.org/

## Multimedia and embedding

Never point to an image hosted by another website. Make sure you don't host copyrighted images.

It is possible to add audio and video to a page. I don't intend to use it often and so I will not research it right away.

With <iframe>, you can embed other web documents into your web document. This includes YouTube videos and Google Maps.

You should load <iframe> content with JavaScript after the main content of your page is loaded to reduce loading times.

<iframe> pose a security problem but it can be solved by doing the following:
- pages can be forbidden from being embedded into other pages by setting a CSP (content security policy) directive.
- embed content only if necessary.
- use HTTPS, for which you will need a certificate, but you can get one from https://letsencrypt.org/
- make sure all elements have an attribute 'sandbox' to make sure embedded content can do as little harm as possible.
- set a CSP which uses HTTP headers. X-Frame-Options.

It is possible to include vector and raster graphics into HTML.

Resolution switching: different image size depending on the size of the browser.
'srcset' provides alternative images, 'sizes' states screen size conditions under which a picture should be displayed. Once a conditions is met, all other are ignored.

Use developer tools to help you figure out resolution numbers to input into 'srcset' and 'sizes' attributes.

### HTML forms

https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms
