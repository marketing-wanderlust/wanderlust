class Carousel {
  constructor(element) {
    this.element = element;
    this.leftBtn = this.element.querySelector(".carousel-btn--left");
    this.rightBtn = this.element.querySelector(".carousel-btn--right");
    this.images = this.element.querySelectorAll(".carousel-card");
    this.selectedIndex = 0;

    this.selectImage("left", this.selectedIndex, this.images.length - 1);

    this.leftBtn.addEventListener("click", () => this.leftClick());
    this.rightBtn.addEventListener("click", () => this.rightClick());

    this.scrollImage();
  }

  scrollImage() {
    setInterval(() => {
      this.leftClick();
    }, 5000);
  }

  leftClick() {
    let oldIndex = this.selectedIndex;

    if (oldIndex === 0) {
      // If we have hit zero, then we need to wrap back to the end of the array
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex -= 1;
    }

    this.selectImage("left", this.selectedIndex, oldIndex);
  }

  rightClick() {
    let oldIndex = this.selectedIndex;

    if (oldIndex === this.images.length - 1) {
      // if we have hit the end of the array, then we need to wrap
      // back to the start of the array.
      this.selectedIndex = 0;
    } else {
      this.selectedIndex += 1;
    }

    this.selectImage("right", this.selectedIndex, oldIndex);
  }

  selectImage(direction, newIndex, oldIndex) {
    // Select the old and new images;
    let newImage = this.images[newIndex];
    let oldImage = this.images[oldIndex];

    // set the transition point based on the direction that the images
    // are supposed to be going
    let newImageTransition;
    let oldImageTransition;
    if (direction === "left") {
      newImageTransition = -100;
      oldImageTransition = 100;
    } else {
      newImageTransition = 100;
      oldImageTransition = -100;
    }

    // 1) Start the transition out of the old image
    // and make sure the newImage starts at 0 opacity
    oldImage.style.transform = `translate3d(${oldImageTransition}%, 0, 0)`;
    oldImage.style.opacity = 0;
    newImage.style.opacity = 0;

    // 2) Wait for the oldImage to be mostly transitioned out
    // then transition in the new image
    setTimeout(() => {
      oldImage.style.display = "none";
      newImage.style.display = "block";
      newImage.style.transform = `translate3d(${newImageTransition}%, 0, 0)`;
    }, 500);

    // 3) Complete the transition in, and cleanup the transform on the new image
    setTimeout(() => {
      newImage.style.opacity = 1;
      newImage.style.transform = "";
    }, 600);
  }
}

let carousel = document
  .querySelectorAll(".carousel")
  .forEach(carousel => new Carousel(carousel));
