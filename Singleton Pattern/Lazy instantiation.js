/* General skeleton for a lazy loading singleton */

MyNamespace.Singleton = (function() {

  var uniqueInstance; // Private attribute that holds the single instance.

  function constructor() { // All of the normal singleton code goes here.
    //todo
  }

  return {
    getInstance: function() {
      if(!uniqueInstance) { // Instantiate only if the instance doesn't exist.
        uniqueInstance = constructor();
      }
      return uniqueInstance;
    }
  }
})();
