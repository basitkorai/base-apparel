# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./design/Desktop.png)
![](./design/Tablet.png)
![](./design/Mobile.png)

### Links

- Github Repo: [🍴 Fork me](https://github.com/basitkorai/Base-Apparel)
- Live Site: [🏡I'm Live Here](https://basitkorai.github.io/Base-Apparel/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- Flexbox
- CSS Grid
- [SASS/SCSS](https://sass-lang.com) - CSS with superpower
- Vanilla Javascript

### What I learned

- I learnt and used CSS GRID's `grid-template-area` for this complex layout.
- I also learn and used the - [SASS](https://sass-lang.com) in my Project

```scss
main {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(../images/bg-pattern-desktop.svg) no-repeat;
  background-position: left;
  background-size: 75%;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 0.4fr 1fr auto;
  grid-template-areas:
    "header hero"
    "content hero"
    "footer hero";

  @media (max-width: $screen-tablet) {
    background-position: bottom;
    background-size: 100%;

    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      "header"
      "hero"
      "content"
      "footer";
  }
}
```

For the Email Verification, I've disabled the built-in HTML validation and achieved it with JS by using regex and test() method. I also added an event on the input element, that will remove the error message and icon if the user tried to input a new value.

```js
const enteredEmail = document.querySelector("input#email");
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.querySelector("form").addEventListener("submit", (event) => {
  if (!regex.test(enteredEmail.value)) {
    enteredEmail.closest(".form-group").classList.add("alert");
    e.preventDefault();
  }
});

enteredEmail.addEventListener("input", () =>
  enteredEmail.closest(".form-group").classList.remove("alert")
);
```

### Continued development

- I'd love to explore Javascript frameworks more, along with honing my HTML and CSS Skills with further libraries and frameworks. 😊

### Useful resources

- [Coder Coder's Sass Course](https://www.youtube.com/watch?v=jfMHA8SqUL4&ab_channel=CoderCoder) - It helped me with [SASS](https://sass-lang.com) and [BEM](https://getbem.com/). I really loved this pattern and will use it going forward.
- [Brad Traversy's Grid Crash Course](https://www.youtube.com/watch?v=0xMQfnTU6oo&ab_channel=TraversyMedia) - This is an amazing video that helped me finally understand [CSS GRID](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). I'd recommend it to anyone still learning [GRID](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

## Author

- Website - Don't have it yet
- Frontend Mentor - [@basit-flash](https://www.frontendmentor.io/profile/basit-flash)
- Twitter - [@basitkorai](https://www.twitter.com/basitkorai)

## Acknowledgments

- I'd like to thank [Brad](https://g.co/kgs/eFCuQB) and [Jessica](https://coder-coder.com/) for their videos that helped me out on this project.
- I also took inspiration from [Niel's](https://github.com/NJVS) solution for this project.
