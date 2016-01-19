/**
 * Created by Administrator on 2015/12/26.
 */

//在一个对象中绑定函数，称为这个对象的方法。
//在JavaScript中，对象的定义是这样的：
var xiaoming = {
    name: '小明',
    birth: 1990
};
//但是，如果我们给xiaoming绑定一个函数，就可以做更多的事情。比如，写个age()方法，返回xiaoming的年龄：
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
xiaoming.age; // function xiaoming.age()
xiaoming.age(); // 今年调用是25,明年调用就变成26了
//绑定到对象上的函数称为方法，和普通函数也没啥区别，但是它在内部使用了一个this关键字，这个东东是什么？
//在一个方法内部，this是一个特殊变量，它始终指向当前对象，也就是xiaoming这个变量。所以，this.birth可以拿到xiaoming的birth属性。
//让我们拆开写：
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};
xiaoming.age(); // 25, 正常结果
getAge(); // NaN
//单独调用函数getAge()怎么返回了NaN？请注意，我们已经进入到了JavaScript的一个大坑里。
//JavaScript的函数内部如果调用了this，那么这个this到底指向谁？
//答案是，视情况而定！
//如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming，这是符合我们预期的。
//如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。
//坑爹啊！
//更坑爹的是，如果这么写：
var fn = xiaoming.age; // 先拿到xiaoming的age函数
fn(); // NaN
//也是不行的！要保证this指向正确，必须用obj.xxx()的形式调用！
//由于这是一个巨大的设计错误，要想纠正可没那么简单。ECMA决定，在strict模式下让函数的this指向undefined，因此，在strict模式下，你会得到一个错误：
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
var fn = xiaoming.age;
fn(); // Uncaught TypeError: Cannot read property 'birth' of undefined
//这个决定只是让错误及时暴露出来，并没有解决this应该指向的正确位置。
//有些时候，喜欢重构的你把方法重构了一下：
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth;
        }

        return getAgeFromBirth();
    }
};
xiaoming.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined
//结果又报错了！原因是this指针只在age方法的函数内指向xiaoming，在函数内部定义的函数，this又指向undefined了！（在非strict模式下，它重新指向全局对象window！）
//修复的办法也不是没有，我们用一个that变量首先捕获this：
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }

        return getAgeFromBirth();
    }
};
xiaoming.age(); // 25
//用var that = this;，你就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。

//apply
//虽然在一个独立的函数调用中，根据是否是strict模式，this指向undefined或window，不过，我们还是可以控制this的指向的！
//要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
//用apply修复getAge()调用：
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};
xiaoming.age(); // 25
getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空
//另一个与apply()类似的方法是call()，唯一区别是：
//apply()把参数打包成Array再传入；
//call()把参数按顺序传入。
//比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：
Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5
//对普通函数调用，我们通常把this绑定为null。

//装饰器
//利用apply()，我们还可以动态改变函数的行为。
//JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。
//现在假定我们想统计一下代码一共调用了多少次parseInt()，可以把所有的调用都找出来，
// 然后手动加上count += 1，不过这样做太傻了。最佳方案是用我们自己的函数替换掉默认的parseInt()：
var count = 0;
var oldParseInt = parseInt; // 保存原函数
window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};
// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
count; // 3


//深入学习JavaScript: apply 方法 详解(转)——非常好
//要解决一下几个问题:
//1.        apply和call的区别在哪里
//2.        什么情况下用apply,什么情况下用call
//3.        apply的其他巧妙用法（一般在什么情况下可以使用apply）

// apply:方法能劫持另外一个对象的方法，继承另外一个对象的属性.
// Function.apply(obj,args)方法能接收两个参数
// obj：这个对象将代替Function类里this对象
// args：这个是数组，它将作为参数传给Function（args-->arguments）
// call:和apply的意思一样,只不过是参数列表不一样.
// Function.call(obj,[param1[,param2[,…[,paramN]]]])
// obj：这个对象将代替Function类里this对象
// params：这个是一个参数列表

// 1.apply示例:
/*定义一个人类*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}
/*定义一个学生类*/
functionStudent(name, age, grade)
{
    Person.apply(this, this.arguments);
    this.grade = grade;
}
//创建一个学生类
var student = new Student("qian", 21, "一年级");
//测试
alert("name:" + student.name + "\n" + "age:" + student.age + "\n" + "grade:" + student.grade);
//大家可以看到测试结果name:qian  age:21  grade:一年级
//学生类里面我没有给name和age属性赋值啊,为什么又存在这两个属性的值呢,这个就是apply的神奇之处.
//分析: Person.apply(this,arguments);
//this:在创建对象在这个时候代表的是student
//arguments:是一个数组,也就是[“qian”,”21”,”一年级”];
//也就是通俗一点讲就是:用student去执行Person这个类里面的内容,在Person这个类里面存在this.name等之类的语句,这样就将属性创建到了student对象里面

//2.call示例
//在Studen函数里面可以将apply中修改成如下:
Person.call(this,name,age);

//3.什么情况下用apply,什么情况下用call
//在给对象参数的情况下,如果参数的形式是数组的时候,比如apply示例里面传递了参数arguments,
// 这个参数是数组类型,并且在调用Person的时候参数的列表是对应一致的(也就是Person和Student的参数列表前两位是一致的) 就可以采用 apply ,
// 如果我的Person的参数列表是这样的(age,name),而Student的参数列表是(name,age,grade),这样就可以用call来实现了,
// 也就是直接指定参数列表对应值的位置(Person.call(this,age,name,grade));

//4.apply的一些其他巧妙用法
//细心的人可能已经察觉到,在我调用apply方法的时候,第一个参数是对象(this), 第二个参数是一个数组集合,
// 在调用Person的时候,他需要的不是一个数组,但是为什么他给我一个数组我仍然可以将数组解析为一个一个的参数,
// 这个就是apply的一个巧妙的用处,可以将一个数组默认的转换为一个参数列表([param1,param2,param3] 转换为 param1,param2,param3)
// 这个如果让我们用程序来实现将数组的每一个项,来装换为参数的列表,可能都得费一会功夫,借助apply的这点特性,所以就有了以下高效率的方法:

//a)Math.max 可以实现得到数组中最大的一项
//因为Math.max 参数里面不支持Math.max([param1,param2]) 也就是数组
//但是它支持Math.max(param1,param2,param3…),所以可以根据刚才apply的那个特点来解决
// var max=Math.max.apply(null,array),这样轻易的可以得到一个数组中最大的一项(apply会将一个数组装换为一个参数接一个参数的传递给方法)
//这块在调用的时候第一个参数给了一个null,这个是因为没有对象去调用这个方法,我只需要用这个方法帮我运算,得到返回的结果就行,.所以直接传递了一个null过去

//b)Math.min  可以实现得到数组中最小的一项
//同样和 max是一个思想 var min=Math.min.apply(null,array);

//c)Array.prototype.push 可以实现两个数组合并
//同样push方法没有提供push一个数组,但是它提供了push(param1,param,…paramN) 所以同样也可以通过apply来装换一下这个数组,即:
vararr1=new Array("1","2","3");
vararr2=new Array("4","5","6");
Array.prototype.push.apply(arr1,arr2);
//也可以这样理解,arr1调用了push方法,参数是通过apply将数组装换为参数列表的集合.
//通常在什么情况下,可以使用apply类似Math.min等之类的特殊用法:
//一般在目标函数只需要n个参数列表,而不接收一个数组的形式（[param1[,param2[,…[,paramN]]]]）,可以通过apply的方式巧妙地解决这个问题!

//5.总结:
//一开始我对apply 非常的不懂,最后多看了几遍,自己多敲了几遍代码,才明白了中间的道理,所以,不管做什么事情,只要自己肯动脑子,肯动手敲代码,这样一个技术就会掌握…
//还有比如第四部分得内容,巧妙的解决了实实在在存在的问题,这个肯定不是一个初学者能想到的解决方案(这个也不是我自己想的),没有对编程有一定认识的不会想到这个的,
// 还是一句话,多积累,多学习,提升自己的能力和对编程思想的理解能力才是最关键!
