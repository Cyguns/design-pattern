工厂模式由一个方法决定到底要创建那个类的实例，而这些实例经常拥有相同的接口.这种模式主要用在所实例化的类型在编译器并不能确定，而在执行期决定的情况。

优点： 能解决多个相似的问题
缺点： 不能知道对象识别的问题（对象类型不知道）

复杂的工厂模式定义：将其成员对象的实例化推到子类中，子类可以重写父类借口以便创建的时候制定自己的对象类型 

父类只对创建过程中的一般性问题进行处理，这些处理会被子类继承，子类之间是相互独立的，具体的业务逻辑会放在子类中进行编写。

 父类就变成了一个抽象类，但是父类可以执行子类中相同类似的方法，具体的业务逻辑需要放在子类中去实现