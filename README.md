# Cornflex

**Modern `css` flexbox grid framework**
- Build complex layout with minimal code and pain
- Lightweight - no useless props - only 7ko
- Use the `flexbox` feature only
- No vendor prefixes


## Install


### css

Download the [latest build](https://github.com/myeti/cornflex/releases) and add `cornflex.min.css` to your `html` page:

```html
<link rel="stylesheet" href="/path/to/cornflex.min.css" type="text/css" >
```

### npm

Run `npm install cornflex` and import `cornflex.scss` to your main `scss` file:

```css
@import 'path/to/node_modules/cornflex';
```

This way, you can override variables used to generate specific data (do it **before** importing):

```scss
// number of cols in row
$cornflex-cols: 12;

// space between cols
$cornflex-gutter: 20px;

// screen breakpoints
$cornflex-breakpoints: (
  sm: 768px,
  md: 992px,
  lg: 1180px
);
```


## Browser support

Cornflex is compatible with recent version of Chrome, Opera, Firefox and Edge.<br>
*Unfortunately, it might work on IE11...*


## Documentation

See examples here: [myeti.github.io/cornflex](https://myeti.github.io/cornflex).

### Container

Define a max-width for your content based on the breakpoint value and set left and right padding with the gutter value (`20px`).

```
.container(-sm|-md|-lg)
```

```html
<div class="container-md">
  ...
</div>
```

### Grid

Let you define a grid of row containing columns with a specific size.

```
.row .col-[1..12](-sm|-md|-lg)
```

```html
<div class="row">
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
</div>
```

### Gutter

Add space based on the gutter value between columns.

```
.row-gutter
```

```html
<div class="row row-gutter">
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
</div>
```

### Reverse

Reverse order for right-to-left languages.

```
.row-rtl
```

```html
<div class="row row-gutter row-rtl">
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
</div>
```

### Justify

Specify how to horizontally align cols in row.

```
.row-[left|center|right|between|around](-sm|-md|-lg)
```

```html
<div class="row row-gutter row-right row-center-md">
  <div class="col-3"></div>
  <div class="col-3"></div>
</div>
```

### Align

Specify how to vertically align cols in row.

```
.row-[top|middle|bottom](-sm|-md|-lg)
```

```html
<div class="row row-gutter row-bottom row-middle-md">
  <div class="col-4"></div>
  <div class="col-4"></div>
  <div class="col-4"></div>
</div>
```

### Self-align

Individually specify how to vertically align cols in row.

```
.col-[top|middle|bottom](-sm|-md|-lg)
```

```html
<div class="row row-gutter">
  <div class="col-4 col-bottom col-top-md"></div>
  <div class="col-4 col-middle"></div>
  <div class="col-4 col-top col-bottom-md"></div>
</div>
```

### Order

Re-order cols in row (dot not change the `dom`).

```
.col-nth-[1..12](-sm|-md|-lg)
```

```html
<div class="row row-gutter">
  <div class="col-3 col-nth-4 col-nth-2-md">#1</div>
  <div class="col-3 col-nth-3 col-nth-4-md">#2</div>
  <div class="col-3 col-nth-2 col-nth-1-md">#3</div>
  <div class="col-3 col-nth-1 col-nth-3-md">#4</div>
</div>
```

### Shift

Shift cols to specific position based on col's size.

```
.col-shift-[0..11](-sm|-md|-lg)
```

```html
<div class="row row-gutter">
  <div class="col-2 col-shift-2 col-shift-4-md"></div>
  <div class="col-2 col-shift-2 col-shift-4-md"></div>
</div>
```

### Hide

Hide cols from specific breakpoint.

```
.col-hide(-sm|-md|-lg)
```

```html
<div class="row row-gutter">
  <div class="col-6"></div>
  <div class="col-6 col-hide-md"></div>
  <div class="col-hide col-6-md"></div>
</div>
```


## Copyright and license

Code copyright 2018 Aymeric Assier. Code released under the [MIT license](https://github.com/myeti/cornflex/blob/master/LICENSE).