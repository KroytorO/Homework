function LinkedList() {
    this.head = {};
}

LinkedList.prototype.forEach = function(callback) {
        var current = this.head;
        var index = 0;
        while (current.next) {
            callback(current.next.element, index);
            ++index;
            current = current.next;
        }
}


LinkedList.prototype.set = function(index, element) {
    var current = this.head;
    var current_index = 0;
    while (current_index < index) {
        if (!current.next) {
            current.next = {};
        }
        current = current.next;
        current_index++;
    }

    var new_node = { element: element, next: current.next };
    current.next = new_node;
}

LinkedList.prototype.push = function(element) {
    var current = this.head;
    var current_index = 0;
    while (current.next) {
        if (!current.next) {
            current.next = {};
        }
        current = current.next;
        current_index++;
    }



    var new_node = { element: element, next: current.next };
    current.next = new_node;
}


LinkedList.prototype.unshift = function(element) {
    const newNode = { element: element, next: this.head.next };
    this.head.next = newNode;
}


LinkedList.prototype.pop= function () {
    var  length = this._length;
    var current=this.head,
        previous;
    while(current.next){
        previous=current;
        current=current.next;
    }

    previous.next = null;
    length--;

    return this;

}


LinkedList.prototype.shift = function(){
   var current=this.head,
   deleteNode=null;
    this.head = current.next;
    deleteNode = current;
    delete current;
    this.length--;
    };



    /*Поиск элементов*/



LinkedList.prototype.contains = function(element) {
    var current = this.head;
    while(current.next){
        if(current.element===element)
        {
            return true;
        }
        current=current.next;
    }
     return false;
}

// returns string representation of a list
LinkedList.prototype.toString=function(){
    var str = "";
    var current=this.head;
    while (current.next){
        current=current.next;
        str += "Value = " + current.element + " ";
    }
    return str + "Value = " + current.element ;

}

// reverse list and returns it
LinkedList.prototype.reverse=function(){
    var current = this.head;
    var newNode = null;
    while (current.next)
    {
        current = current.next;
        newNode = { next: newNode, element: current.element }
    }
    this.head.next = newNode;
}


LinkedList.prototype.get = function(position) {
    var current = this.head,
        count = 0,
        resultNode=null;

    while (current.next) {
        if(count===position && count>=position)
        {
            resultNode=current.next;
            return resultNode.element;
        }

        current = current.next;
        count++;
    }
    if(count<position)
    {
        throw new Error('No such element')
    }

}

//---------------------- v drugom faile ---------------------


const myList = new LinkedList();
myList.set(1,'dod');
myList.set(6,'dod5656');

myList.push("1234");
myList.unshift(4);
myList.unshift(32);
myList.push("sdgfdg");
myList.push("blalba");
myList.pop();
myList.shift();

myList.forEach(element => console.log(element));


console.log('-----------------');
try {
console.log(myList.get(79));
} catch (e) {
    console.log(e.message);
    console.log('Вы ввели позицию, превышающую количество элементов в списке.' +
        'Элемента соответствующему заданной позиции, в списке не существует')
}
console.log(myList.contains('1234'));
console.log(myList.toString());
console.log(Object.getOwnPropertyNames(myList));

