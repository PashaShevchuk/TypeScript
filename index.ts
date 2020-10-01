// Типы в TypeScript

// *** Boolean - Наиболее базовый тип, который является логическим true/false
const isDone: boolean = true;

// *** Number - Как и в JS, тип numbers в Typescript являются числом с плавающей точкой.
const decimal: number = 8;

// *** String - обозначает текстовые данные. Как и JS, в Typescript используются двойные (") или одинарные (')
// кавычки для обрамления.
const first_name: string = "bob";

// *** Array - TypeScript, как и JavaScript, имеет массивы значений. Тип массива может быть определен одним
// из двух способов. Первый - обозначать тип элементов массива перед []:
const list1: number[] = [1, 2, 3];
// Второй способ - использовать обобщение Array<elemType>:
const list2: Array<number> = [1, 2, 3];

// *** Tuple - дает вам возможность объявить массив с известным фиксированным количеством элементов, которые не обязаны
// быть одного типа. Например, вы хотите иметь значение Tuple как пару "строка" и "число":
const tuple: [string, number] = ['hello', 10];
// x = [10, 'hello']; // Error

// *** enum (Перечисления) - это более удобный способ задания понятных имен набору численных значений.
enum Color {Red, Green, Blue}

const green: Color = Color.Green;

// *** Any позволяет отключить проверку типов и позволить значениям пройти проверку на этапе компиляции.
const notSure: any = 10;
// notSure = "maybe a string instead";
// notSure = false; // ok

// *** void - это нечто противоположное any: отсутствие каких-либо типов. Чаще всего он используется в качестве
// возвращаемого типа функций, которые не возвращают никакого значения. Когда функция нечего не возвращает.
function logger(): void {
    console.log('Hello TypeScript');
}

// *** object - это тип, представляющий непримитивный тип, то есть все, что не является числом, строкой, логическим
// значением, bigint, symbol, null или undefined.
declare function create(o: object | null): void;

// create({prop: 0});// ok
// create(null);// ok
// create(42);// err
// create("string");// err

// *** Never - представляет отсутствие значения и используется в качестве возвращаемого типа функций, которые
// генерируют или возвращают ошибку

// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

//______________________________________________________________________________________________________________________
function summation(a: number, b: number): number {
    return a + b;
}

let x: number | string = 10; //    | - або
x = 'Hello'; // ok

//______________________________________________________________________________________________________________________
enum genderEnum {
    MALE = 'male',
    FEMALE = 'female'
}


interface IUser {
    name: string;
    age: number;
    car?: boolean; //  якщо поставити ? - то параметр буде не обовязковим
    gender?: genderEnum;
}


const Bob: IUser = {
    name: 'Bob',
    age: 33
};

const John: IUser = {
    name: 'John',
    age: 25,
    gender: genderEnum.MALE
};

const Mary: IUser = {
    name: 'Mary',
    age: 28,
    gender: genderEnum.FEMALE
};


const userArr: IUser[] = [Bob, John]; // або const userArr: Array<IUser> = [Bob, John];

function oldestUser(users: IUser[]): IUser {
    return users.sort((a, b) => b.age - a.age)[0];
}

const oldUser = oldestUser(userArr);
console.log(oldUser); // { name: 'Bob', age: 33 }

//______________________________________________________________________________________________________________________
// Абстрактний клас - це клас екземпляр якгого не можна зробити, він нього можна тільни наслідуватися.

abstract class Person {
    name: string;
    age: string;

    // используються для методов и свойств
    // * public - by default,
    // * private - если же к свойствам и методам применяется модификатор private, то к ним нельзя будет обратиться извне
    // при создании объекта данного класса.
    // * protected во многом аналогичен private - свойства и методы с данным модификатором не видны из вне, но к ним
    // можно обратиться из классов-наследников (внутри клвсов-наследников).
    protected constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Developer extends Person {
    laptop: string;

    constructor(name, age, laptop) {
        super(name, age);
        this.laptop = laptop;
    }
}

const Bobby = new Developer('Bobby', 30, 'lenovo');

//______________________________________________________________________________________________________________________
const obj = {
    name: 'Mary',
    age: 24,
    job: 'React developer',
    laptop: {
        model: 'Lenovo',
        processor: {
            model: 'Intel',
            price: 1000,
        }
    }
};

console.log(obj && obj.laptop && obj.laptop.model && obj.laptop.model); // in JS

console.log(obj?.laptop?.model); // in TS

//______________________________________________________________________________________________________________________
// type - дозволяє створювати власні типи
type ID = string | number;
const id1: ID = 101;
const id2: ID = 'a1b2';

type Login = string;
const login: Login = 'pavlo2020';
// const login2: Login = 2;  // error Type '2' is not assignable to type 'string'.

//______________________________________________________________________________________________________________________

//______________________________________________________________________________________________________________________
