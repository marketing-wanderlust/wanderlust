class Carousel {
  constructor(e) {
    this.e = e;
    this.index = 0;
    this.left = e.querySelector('.left-button');
    this.right = e.querySelector('.right-button');
    this.images = e.querySelectorAll(`img`);

    this.images.forEach((img, current) => {
      if (current === this.index) {
        img.style.display = 'flex';
      } else {
        img.style.display = 'none';
      }
    });

    this.left.addEventListener('click', () =>
      this.displayImage((this.index = this.index - 1))
    );
    this.right.addEventListener('click', () =>
      this.displayImage((this.index = this.index + 1))
    );
  }

  displayImage() {
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }

    if (this.index > this.images.length - 1) {
      this.index = 0;
    }

    this.images.forEach((img, current) => {
      if (current === this.index) {
        img.style.display = 'flex';
      } else {
        img.style.display = 'none';
      }
    });
  }
}

let carousel = document
  .querySelectorAll('.carousel')
  .forEach(carousel => new Carousel(carousel));
