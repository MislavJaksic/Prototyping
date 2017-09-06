## Mozzila Tutorial

Source: https://developer.mozilla.org/en-US/docs/Games/Introduction

### Main game loop

The goal of every video game is to *present* the user(s) with a situation, *accept* their input,
*interpret* those signals into actions, and *calculate* a new situation resulting from those acts.

Some games drive this cycle by *user input*, while other games demand *control* over each of the
smallest possible individual timeslices.

This once-per-frame model is implemented in something called a *main loop*.

Example main loop:
```js
window.main = function () { //creates a function as a global variable called main()
  window.requestAnimationFrame( main ); //requestAnimationFrame is given a callback function
  // Whatever your main loop needs to do.
};
main(); //Start the cycle.
```

Window object is where all global variables are stored. We don't want to put main() into it.

Example of a better main loop:
```js
;(function () { // implemented as Immediately-Invoked Function Expression (IIFE)
  function main() {
    window.requestAnimationFrame( main );
    
    // Your main loop contents.
  }
  
  main(); // Start the cycle
})();
```

We still have no way of stopping the main loop.

Example of stopping the main loop:s
```js
;(function () {
  function main() {
    MyGame.stopMain = window.requestAnimationFrame( main ); //assuming MyGame was defined
    
    // Your main loop contents.
  }
  
  main(); // Start the cycle
})();
```