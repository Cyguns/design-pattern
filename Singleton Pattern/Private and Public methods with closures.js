MySingleton.Singleton = {};

MySingleton.Singleton = (function(){
  return {};
})();

MySingleton.Singleton = (function(){
  return {
    publicAttribute1: true,
    publicAttribute2: false,
    publicMethod1: function() {

    },
    publicMethod2: function() {

    }
  }
})();

MySingleton.Singleton = (function() {
  var privateAttribute1 = false;
  var privateAttribute2 = [1, 2, 3];

  function privateMethod1() {
    //todo
  }
  function privateMethod2(args) {
    //todo
  }

  return { // Public members.
    publicAttribute1: true,
    publicAttribute2: 10,

    publicMethod1: function() {
      //todo
    },
    publicMethod2: function(args) {
      //todo
    }
  };
})();
