# Passenger Counter App

This is my solution to the [counter app on scrimba](https://scrimba.com/playlist/pY5b7sQ)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Supporting Scrimba](#Supporting-Scrimba))

## Overview 

The app should count each entry of person/s entering the station and display the count. It should also save and log the entries.

### Screenshot 

![Screenshot 2021-08-18 at 16-51-20 Passenger Counter App](https://user-images.githubusercontent.com/84665360/129923474-db73fd45-13b5-492d-9545-dcb94d608d71.png)

### Links

- [Solution Repo:](https://github.com/ZaidMarrie/passenger_counter-app)
- [Live Demo:](https://zaidmarrie.github.io/passenger_counter-app/)

## My process

### Built with

- HTML5
- CSS3
- Javascript

### What I learned

This challenge taught me how to use the onclick event to invoke a function, however with my second attempt I completed this challenge with arrow functions and `.addEventListener()` method.

Below I added some code snippets:

```js
incrementBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

saveBtn.addEventListener('click', () => {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
});
```

## Supporting Scrimba

Since 2017, we have created over 20 free courses on Scrimba, and we're going to
continue launching free courses. But to pay our bills, we have to charge once
in a while. So if you've ever wanted to "give back" to Scrimba, you can do that by buying
	one of our paid courses

- [Become a professional React developer](https://scrimba.com/course/greact)
- [The Responsive Web Design Bootcamp](https://scrimba.com/course/gresponsive)
- [The Ultimate JavaScript Bootcamp](https://scrimba.com/course/gjavascript)

	It would also mean the world to us if you share the courses.  

Happy Coding!
