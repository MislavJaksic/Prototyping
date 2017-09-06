window.main = function () { //creates a function as a global variable called main()
  window.requestAnimationFrame( main ); //requestAnimationFrame is given a callback function
  // Whatever your main loop needs to do.
};
main(); //Start the cycle.