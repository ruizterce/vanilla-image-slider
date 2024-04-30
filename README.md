# vanilla-slideshow

Vanilla js image slider ES module.

## Parameters

#### new Slideshow(slideshowDiv, width, height, delay)

`slideshowDiv` Parent DOM element containing the images (required)

`width` Width in pixels (optional - Default = 500)

`height` Height in pixels (optional - Default = 500)

`delay` Delay in miliseconds to loop through each image. Use 0 to disable (optional - Default = 0)

## Usage/Examples

Wrap images inside a div:

#### index.html

```html
<div class="slideshow">
  <img src="img1.jpeg" alt="" class="slideshow-img" />
  <img src="img2.jpeg" alt="" class="slideshow-img" />
  <img src="img3.jpeg" alt="" class="slideshow-img" />
  <img src="img4.jpeg" alt="" class="slideshow-img" />
</div>
<script src="index.js" type="module"></script>
```

Import the class and call a new instance:

#### index.js

```javascript
import Slideshow from '../node_modules/vanilla-slideshow/dist/vanilla-slideshow.js';

const slideshowDiv = document.querySelector('.slideshow');
new Slideshow(slideshowDiv, 400, 400, 3000);
```
