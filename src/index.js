export default class Slideshow {
  constructor(slideshowWrapper, width = 500, height = 500, loopDelay = 0) {
    this.slideshowWrapper = slideshowWrapper;
    this.width = width;
    this.height = height;
    this.loopDelay = loopDelay;
    this.pos = 1;
    this.amount = slideshowWrapper.childElementCount;

    //Create image container
    this.slideshowImgContainer = document.createElement('div');
    this.slideshowImgContainer.classList.add('slideshow-img-container');
    this.slideshowWrapper.appendChild(this.slideshowImgContainer);

    //Element style adjustments
    this.slideshowWrapper.style.position = 'relative';
    this.slideshowWrapper.style.overflow = 'hidden';
    this.slideshowImgContainer.style.position = 'relative';
    this.slideshowImgContainer.style.fontSize = '0';

    //Resize wrapper, image container and images, and move images from wrapper to container.
    this.slideshowWrapper.style.width = this.width.toString() + 'px';
    this.slideshowWrapper.style.height = this.height.toString() + 'px';
    this.slideshowImgContainer.style.width = (this.width * this.amount).toString() + 'px';
    this.slideshowImgContainer.style.height = this.height;
    this.slideshowWrapper.querySelectorAll('img').forEach((img) => {
      img.style.width = this.width.toString() + 'px';
      img.style.height = this.height.toString() + 'px';
      this.slideshowImgContainer.appendChild(img);
    });

    //Create Previous and Next Buttons
    this.previousBtn = document.createElement('button');
    this.previousBtn.textContent = '<';
    this.previousBtn.style.position = 'absolute';
    this.previousBtn.style.zIndex = '1';
    this.previousBtn.classList.add('slideshow-button');

    slideshowWrapper.insertBefore(this.previousBtn, slideshowWrapper.firstChild);
    this.previousBtn.addEventListener('click', () => {
      this.previousImg();
    });

    this.nextBtn = document.createElement('button');
    this.nextBtn.textContent = '>';
    this.nextBtn.style.position = 'absolute';
    this.nextBtn.style.zIndex = '1';
    this.nextBtn.classList.add('slideshow-button');

    slideshowWrapper.insertBefore(this.nextBtn, slideshowWrapper.firstChild);

    this.nextBtn.style.right = 0;

    this.nextBtn.addEventListener('click', () => {
      this.nextImg();
    });

    this.slideshowWrapper.querySelectorAll('.slideshow-button').forEach((btn) => {
      btn.style.height = (this.height / 4).toString() + 'px';
      btn.style.top = (this.height / 2 - btn.offsetHeight / 2).toString() + 'px';
    });

    //Create circle dots
    const circleDotContainer = document.createElement('div');
    circleDotContainer.className = 'circle-dot-container';
    circleDotContainer.style.zIndex = '1';
    circleDotContainer.style.position = 'absolute';
    for (let i = 0; i < this.amount; i++) {
      const circleDot = document.createElement('button');
      circleDot.className = 'circle-dot';
      circleDot.dataset.index = i + 1;
      circleDot.addEventListener('click', () => {
        this.pos = Number(circleDot.dataset.index);
        this.updatePosition();
      });

      circleDotContainer.appendChild(circleDot);
    }
    slideshowWrapper.appendChild(circleDotContainer);
    slideshowWrapper.querySelector('.circle-dot[data-index="1"]').classList.add('selected');
    circleDotContainer.style.left =
      (this.width / 2 - circleDotContainer.offsetWidth / 2).toString() + 'px';
    circleDotContainer.style.top =
      (this.height - circleDotContainer.offsetHeight).toString() + 'px';

    //Loop through images
    if (this.loopDelay > 0) {
      setInterval(() => {
        this.nextImg();
      }, this.loopDelay);
    }
  }

  //Update slideshow position to this.pos value
  updatePosition() {
    this.slideshowImgContainer.style.right = (this.width * (this.pos - 1)).toString() + 'px';

    this.slideshowWrapper.querySelectorAll('.circle-dot').forEach((dot) => {
      dot.classList.remove('selected');
    });
    this.slideshowWrapper
      .querySelector(`.circle-dot[data-index="${this.pos}"]`)
      .classList.add('selected');
  }

  //Move slideshow to next img
  nextImg() {
    if (this.pos < this.amount) {
      this.pos += 1;
      this.updatePosition();
    } else {
      this.pos = 1;
      this.updatePosition();
    }
  }

  //Move slideshow to previous img
  previousImg() {
    if (this.pos > 1) {
      this.pos -= 1;
      this.updatePosition();
    } else {
      this.pos = this.amount;
      this.updatePosition();
    }
  }
}
