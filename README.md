# Cornflex

Lightweight CSS flexbox grid framework (8ko)


## Rules

Include `dist/cornflex.min.css` in your page, see [myeti.github.io/cornflex](https://myeti.github.io/cornflex) for examples.

### Container

`.container(-sm|-md|-lg)`

```html
<div class="container-md">
  ...
</div>
```

### Row and columns

`.row .col-[1..12](-sm|-md|-lg)`

```html
<div class="row">
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
</div>
```

### Row and columns with gutter

`.row.row-gutter .col-[1..12](-sm|-md|-lg)`

```html
<div class="row row-gutter">
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
  <div class="col-12 col-6-sm col-3-md"></div>
</div>
```

### Justify content

`.row-[left|center|right|between|around](-sm|-md|-lg)`

```html
<div class="row row-gutter row-center">
  <div class="col-3"></div>
  <div class="col-3"></div>
</div>
```

### Align items

`.row-[top|middle|bottom](-sm|-md|-lg)`

```html
<div class="row row-gutter row-middle">
  <div class="col-4"></div>
  <div class="col-4"></div>
  <div class="col-4"></div>
</div>
```

### Self-align item

`.col-[top|middle|bottom](-sm|-md|-lg)`

```html
<div class="row row-gutter">
  <div class="col-3"></div>
  <div class="col-3 col-middle"></div>
  <div class="col-3 col-bottom"></div>
</div>
```

### Order

`.col-nth-[1..12](-sm|-md|-lg)`

```html
<div class="row row-gutter">
  <div class="col-3 col-nth-4">#1</div>
  <div class="col-3 col-nth-3">#2</div>
  <div class="col-3 col-nth-2">#3</div>
  <div class="col-3 col-nth-1">#4</div>
</div>
```

### Shift

`.col-shift-[1..12](-sm|-md|-lg)`

```html
<div class="row row-gutter">
  <div class="col-3 col-shift-3"></div>
  <div class="col-3 col-shift-3"></div>
</div>
```


## Development

Import `src/cornflex.scss` in your assets to be compiled in your project.
These default variables can be overwritten :
- `$cornflex-cols: 12`
- `$cornflex-gutter: 20px`
- `$cornflex-breakpoints: (-sm: 768px, -md: 992px, -lg: 1180px)`


## :)