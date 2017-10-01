## Mozzila tutorial, CSS

[Source](https://developer.mozilla.org/en-US/docs/Learn/CSS) 

[Common CSS problems and solution](https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto)

## Introduction to CSS

### How CSS works

Document: made using a markup language, HTML, XML, SVG, ...
          should be styled.
          
CSS rules: applied by a browser to a document.
           made up of selectors and declarations.
           
Stylesheet: a group of CSS rules.
            can be external or internal.

Document Object Model(DOM): when CSS in applied to the HTML.
                            made up of DOM nodes; a tree structure.

### CSS syntax

h2 {
  color: blue;
}

"h2"    is a selector.
{}      is a declaration block.
"color" is a property.
"blue"  is a value.

CSS declaration: a property and a value.

CSS declaration block: made up of CSS declarations.

CSS rule: made up of selectors and a CSS declaration block.

CSS statements: CSS rules, at-rules and nested statements.

At-rules: used to convey metadata, conditional info and descriptive info.
          start with @, for example @charset.
          
Nested statements: subset of at-rules.
                   a nested block of CSS rules that will only be applied if a condition is matched.

CSS shorthands: set several property values in a single line.
                example below.

  background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
... equals to ...
  background-color: red;
  background-image: url(bg-graphic.png);
  background-position: 10px 10px;
  background-repeat: repeat-x;
  background-scroll: fixed;

### Selectors

There are a lot of different selectors.

### Simple selectors

Element selectors: select HTML elements.

Class selectors: selects an element based on the value of the class="".
                 start with a dot ".", for example .first.
                 

ID selectors: selects an element based on the unique value of id="".
              start with "#", for example #polite.

Combinators: selects elements based on relationship to other elements.
             descendant (space), child (>), adjacent sibling (+) and general sibling (~).
             examples in index.html.

### Attribute selectors

Attribute selectors: selects elements based on attribute values or name.
                     use [], for example [some_attr].
                     examples in index.html.

### Pseudo-classes and pseudo-elements

Pseudo-selectors: keywords with a prefix ":".
                  can listen to user interactions and act.

Pseudo-element: keywords with a prefix "::".
                they select a part of the element. Extremely specific.

### Combinators and multiple selectors

Combinators: selects elements based on relationship to other elements.

Multiple selectors: many selectors can be assigned to the same declaration block.

### CSS values and units

Numeric: length and size: absolute units: px (pixels).
                          relative units: em, font size of the current element.
         unitless values: unitless line height: 0 as meaning "None",
                                                in line-height="" to specify the hight of each line of text.
                          number of animations: used in [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

Percentages: scale the size of elements based on their parent's size.
             liquid and fixed width layout.

Colors: specified with: a keyword,
                        hexadecimal value,
                        RGB format,
                        HSL format,
                        RGBA and HSLA are formats with an alpha channel,
                        opacity.

Functions: exist in CSS as property values.

### Cascade and inheritance

Cascade: when two styling properties conflict (for example, about color), it determines which one wins.
         governed by three factors (earlier ones overrule later ones):
           1) Importance: don"t use the !important keyword unless you have to
           2) Specificity: ID selectors are the most specific, then class and finally element selectors.
                [Measured in points](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
           3) Source order: rules written later in the stylesheet win.

Inheritance: determines which property values applied to a parent element will be also applied by their children.
             three special property values: inherit: explicit inheritance.
                                            initial: sets the value to a value in the browser's default style sheet.
                                            unset: resets the property to its natural value (acts like inherit, otherwise like initial).

Not demonstrated in index.html.
                                            
### The box model

Box properties: every element is structured as a box.
                margin: pushes up against other boxes.
                border: between the padding and the margin. Invisible by default (border: 0).
                padding: between content and the border.
                width and height: of the content box.
                
Advanced manipulation: overflow: controls what ahppens when the content doesn't fit the box and overflows.
                       background clip: adjust to where will the background box extend.
                       outline: a border, but drawn inside the margin.
                
CSS boxes: the type of box is determined by display:.
           common display: values are: block, inline and inline-block.
           
Not demonstrated in index.html.

### CSS debugging

Debugging can be done by using browser developer tools.

CSS validator: http://jigsaw.w3.org/css-validator/

### Exercise

Didn't complete it. https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Fundamental_CSS_comprehension

## Styling text

### Fundamental text and font styling
