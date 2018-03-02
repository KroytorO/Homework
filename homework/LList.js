
"use strict"

class Node{
    constructor(data){
        this.data=data;
        this.next=null;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        for (var i = 0; i < arguments.length; i++) {
            this.pushOneElement(arguments[i]);
        }
    }

    forEach(callback) {
        var current = this.head;
        var index = 0;
        while (current) {
            callback(current.data, index);
            ++index;
            current = current.next;
        }
    }

    /**
     *Получения длины списка
     */
    size() {
        let size = 0;
        let node = this.head;

        while (node !== null) {
            size ++;
            node = node.next;
        }

        return size-1;
    }


    /**
     *Поиск элемента по индексу
     */
    get(position) {
        let current = this.head,
            count =0;
        if(position>this.size()){

            console.log('Вы ввели позицию, превышающую количество элементов в списке.' +
                'Элемента соответствующему заданной позиции, в списке не существует');
            return;
        }
        while (count<=position-1) {
            current = current.next;
            count++;
        }

        return current.data;
    }

    /** loop on list - Цикл в списке
     //for (let i = 0; i < list.length; i++) {
    //console.log(list.get(i));
}*/
    loop(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    /**
     *Добавление в cписок по индексу
     */

    set(index, element) {
        var current = this.head;
        var current_index = 0;
        while (current_index < index) {
            if (!current.next) {
                current.next = {};
            }
            current = current.next;
            current_index++;
        }

        var new_node = {data: element, next: current.next};
        current.next = new_node;
    }


    /**
     *Добавление элемента в начало cписка
     */
    unshiftOneElement(element) {

        const current = new Node(element);

        if (this.head === null && this.tail === null) {
            this.head = current;
            this.tail = current;
        } else {

            current.next = this.head;
            this.head = current;
        }
    }

    /**
     * Добавление нескольких элементов в начало
     */
    unshift(){
        for (var i = arguments.length-1; i >= 0; i--) {
            this.unshiftOneElement(arguments[i]);
        }
    }


    /**
     * Добавление элемента в конец
     */
    pushOneElement(value) {

        const current = new Node(value);

        if (this.tail === null && this.head === null) {
            this.tail = current;
            this.head = current;
        }

        this.tail.next = current;

        this.tail = current;
    }

    /**Добавление нескольких элементов в конец

     */
    push(){
        for (var i = 0; i < arguments.length; i++) {
            this.pushOneElement(arguments[i]);
        }
    }
    /**
     * Удаление первого элемента
     */
    shift() {

        if (this.head === null) {
            throw new Error('List is empty');

        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        this.head = this.head.next;
    }


    /**
     * Удаление последнего элемента
     */
    pop() {

        if (this.head === null) {
            throw new Error('List is empty');

        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        var current = this.head,
            previous;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;

        this.tail = current;

    }


    /**
     * Поиск  элемента  в спискеO(1)
     */

    contains(element) {
        var current = this.head;
        while (current) {

            if (current.data === element) {
                return true;
            }
            current = current.next;
        }

        return false;
    }


    /**
     * Возвращает строковое представление списка
     */

    toString() {
        var str = [];
        var current = this.head;
        while (current) {
            str += current.data + ' ';
            current = current.next;
        }

        return [str];//возвращает все элементы списка корректно,кроме элемента {}, возвращает как [object Object]
    }

    /**
     * Преобразует список в массив
     */

    arrCreate() {
        var str = [];
        var current = this.head,
            i = 0;
        while (current) {
            str[i] = current.data;
            i++;
            current = current.next;
        }
        return str;//возвращает все элементы списка корректно
    }

    /**
     * Реверс списка
     */

    reverse() {

        if (this.head === this.tail) {
            return console.log('List is empty');
        }

        this.tail = this.head;
        let current = this.head.next;
        let prev = this.head;

        while (current !== null) {
            if (current.next === null) {
                this.head = current;
            }

            var current1 = current;
            current= current.next;
            current1.next = prev;
            prev = current1;
        }

        this.tail.next = null;
    }


    /**
     Метод итератор
     */
    [Symbol.iterator]() {

        let count =0;
        let last = this.size();

        return {
            next() {
                if (count <= last) {

                    return {
                        done: false,
                        value:list.get(count++)
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }

        }
    };


}


const newNode= new Node();
var list = new LinkedList(1,345,23,44,"dsfs",{},78);




