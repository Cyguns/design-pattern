var singelton = function(fn){
  var result;
  return function(){
    return result || (result = fn.call(this, arguments);)
  }
};

var createMask = singelton(function() {
  return document.body.appendChild(document.createElement('div'));
});

var createFrame = ingelton(function() {
  return document.body.appendChild(document.createElement('frame'));
});
