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
- [Author](#author))

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

This challenge taught me how to use the onclick event to invoke a function.

Below I added some code snippets:

```html
<a href="#" class="btn" id="increment-btn" onclick="increment()">Increment</a>
```

```js
function increment() {
    count++;
    countDisplay.textContent = count;
}
```

## Author

- Twitter - [@LeKoels27](https://www.twitter.com/LeKoels27)
