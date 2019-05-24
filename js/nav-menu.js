const menuBtn = document.querySelector(".menu-btn");

class SlidingNavMenu {
  constructor(element) {
    this.element = element;
    this.navMenu = document.querySelector(".navbar nav");
    this.isMenuOpen = false;

    this.element.addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    if (!this.isMenuOpen) {
      this.element.classList.add("close");
      this.navMenu.classList.add("show");

      this.isMenuOpen = true;
    } else {
      this.element.classList.remove("close");
      this.navMenu.classList.remove("show");

      this.isMenuOpen = false;
    }
  }
}

const slidingNavMenu = new SlidingNavMenu(menuBtn);
