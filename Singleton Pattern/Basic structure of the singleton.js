// 字面量结构的成员变量可以通过Singleton来访问，但是他不是单例模式，因为单例模式可以被实例化一次，
// 下面的不能被实例化成一个类，但是对象字面量时创建单例模式的方法之一

 var Singleton = {
   a: 1，
   b: 2,
   add1: function(){
     return this.a + 1;
   },
   add2: function() {
     return this.b + 2;
   }
 };
