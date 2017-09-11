## CSS

Source: https://developer.mozilla.org/en-US/docs/Learn/CSS

When HTML and CSS are combined, it creates a DOM tree made up of DOM nodes.

The example below is a CSS ruleset:
```css
h2 {
  color: blue;
}
```

'h2' is a selector.
Declaration block is in {}.
'colour' is a property.
'blue' is a value.
A declaration is a property and a value pair.

CSS statements:
rulesets (in {}),
at-rules for metadata, conditional information (start with @),
nested statements (specific subset of at-rule).

There are CSS shorthands, such as:
```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

... which are the same as the five lines below:
```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-scroll: fixed;
```

### CSS selectors

Simple selectors below:
Element selectors: select HTML elements.
Class selectors: selects an element based on the value of the class attribute of the element.
ID selectors: selects an element based on the value of the unique id attribute of the element.
Universal selector: selects all the elements.
Combinators: selects elements based on descendant (space), child (>), adjacent sibling (+) and general sibling ()
relationship.

Attribute selectors: uses [] syntax to select elements based on their values or name.

Pseudo-selectors: written in the :keyword format
Pseudo-element: written in the ::keyword format

Combinators: select based on the child parent relationship.
Multiple selectors: multiple selectors can be assigned to the same declaration block.

### CSS values and units

Numeric: the most common absolute unit is px (pixel), while the most common relative unit is em.
Unitless units: used for scaling, multiplying.
Percentages: similar in use to numeric values.
Colors: specified with a keyword, hexadecimal value, RGB format, HSL format , RGBA and HSLA are formats with 
an alpha channel, opacity.
Functions: exist in CSS as well as property values.

### CSS cascade

Determines which CSS rule wins and gets applied to an element. This is governed by three factors (earlier ones
overrule later ones):

1) Importance: don't use the !important keyword unless you have to
2) Specificity: ID selectors are the most specific, then class and finally element selectors.
3) Source order: rules written later in the stylesheet win.

### CSS inheritance

Determines which property values applied to an element will be inherited by that element's children.

Three special values alter the behaviour: inherit, initial and unset.

### CSS box model

Each element is represented as a rectangular box, with the box's content, padding, border, and margin built up
around one another like the layers of an onion. As a browser renders a web page layout, it works out what 
styles are applied to the content of each box.

width and height

padding

border

margin

### CSS debugging

Debugging can be done by using browser developer tools.

CSS validator: http://jigsaw.w3.org/css-validator/
