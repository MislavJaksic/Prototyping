## HTML

Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started

### HTML element

<p>Hello world!</p>

The construct is called an element.
<p> is the opening tag.
"Hello world" is called content.
</p> is the closing tag.

Elements can be nested.

Elements without the closing tag nad content are called empty elements.

Elements can have attributes. Example: <p class="note">Hello world!</p>

Attributes without a value are called boolean attributes.

### HTML <head>

The head's job is to contain metadata about the document.

Putting content in it's attributes can optimize search results. (Open Graph 
Data)[http://ogp.me/] is a metaprotocol which provides richer metadata for social networks.
Twitter has a very similar proprietery metadata.

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

Use download attribute wh nelinking to a download.

Construct the nevigattion menu at the top or to the sides.

When linking to an email use mailto: schema.

### Advanced HTML formatting

Description lists: <dl> in which there are >description term and description description.
<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dt>B</dt>
  <dd>Bus</dd>
</dl>
Blockquote: 
Inline quation:
Citation:
Abbreviation:
Contact details: <address>
Superscript: <p>2 * x<sup>2</sup> + 5 * x + 3 </p>
Subscript: <p>Caffeine's chemical formula is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub></p>
Computer code: <code>, <pre>, <var>, <kbd>, <samp>
Time and dates: <time>

### HTML sections

Header: <header>.
Navigation bar: <nav>.
Main content: <main>, with various content subsections represented by <article>, <section>, and <div> elements.
Sidebar: <aside>; often placed inside <main>.
Footer: <footer>.

There are a lot of HTML elements: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

If you can't find an appropriate semantic element, use <span> 
(inline element) or <div> (block element) and mark them with a unique 
class="" to mark them. Use these sparingly as they are non semantic 
elements that clutter HTML.

Stopped at: Line breaks and horizontal rules
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure







