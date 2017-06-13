// 单例模式只要使用一个变量来标识该类是否可以被实例化

var MySingleton = function(name) {
  this.name = name;
  this.isSingleton = null;
}

MySingleton.prototype.getName = function () {
  return this.name;
};

function isSingleton() {
  if (!this.isSingleton) {
    this.isSingleton = new MySingleton(name);
  }
  return this.isSingleton;
}



var a = isSingleton('a');
var b = isSingleton('b');
console.log(a === b)  // true
