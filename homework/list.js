"use strict"

class LinkedList {
    constructor () {
       this.head = {};
        for (var i = 0; i < arguments.length; i++) {
            this.push(arguments[i]);
        }
    }
forEach (callback) {
        var current = this.head;
        var index = 0;
        while (current.next) {
            callback(current.next.element, index);
            ++index;
            current = current.next;
        }
    }


  set (index, element) {
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

 push (element) {
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


 unshift (element) {
        const newNode = { element: element, next: this.head.next };
        this.head.next = newNode;
    }



  pop () {
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


  shift (){
        var current=this.head,
            deleteNode=null;
        this.head = current.next;
        deleteNode = current;
        current=null;
        this.length--;
    }



    /*Поиск элементов*/


contains(element) {
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
toString(){
        var str = "";
        var current=this.head;
        while (current.next){
            current=current.next;
            str += "Value = " + current.element + " ";
        }
        return str + "Value = " + current.element ;

    }

// reverse list and returns it
    reverse(){
        var current = this.head;
        var newNode = null;
        while (current.next)
        {
            current = current.next;
            newNode = { next: newNode, element: current.element }
        }
        this.head.next = newNode;
    }


 get (position) {
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
            throw new Error('No such element');
        }

    }

}

const myList = new LinkedList(1,23,44,"dsfs",{},'ret',34);
myList.forEach((data)=>console.log(data));


console.log('-----------------');
try {
    console.log(myList.get(79));
} catch (e) {
    console.log(e.message);
    console.log('Вы ввели позицию, превышающую количество элементов в списке.' +
        'Элемента соответствующему заданной позиции, в списке не существует')
}

