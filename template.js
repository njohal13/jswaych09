//Class can only contain methods
//constructer() method is used to intialize the object with some properties

class MyClass {
    constructor(param1, param2, param3){
        this.property1 = param1
        this.property2 = param2
    }


    method1(/*... */){

    }
    method2(/*... */){

    }
}

const myObject = new MyClass(arg1, arg2, etc)
myObject.method(/*... */)

console.log(this)