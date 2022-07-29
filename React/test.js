function getFullName(first, last) {
    return `${first} ${last}`
}

Number.parseInt("123abc", 10) // 123
Number.parseInt("4 сыра", 10) // 4

console.log(kampai)

//NaN (англ. Not-a-Number, «не число»)  =undefined + 1
// Параметры — это переменные, находящиеся внутри круглых скобок
// Аргументы — это данные, которые задаются параметрам как значения
// При вызове функции без аргументов джаваскиптом будет автоматически подставлено значение undefined
function addOne(number = 0) {
    return number + 1
}

// записи (records) — неизменяемая и сравниваемая по значению версия простых объектов;
// кортежи (tuples) — неизменяемая и сравниваемая по значению версия массивов.


punks.forEach(function (punk) {
    // Действие с отдельным панком
    console.log(punk)
})

let numbersAboveTen = numbers.filter(function (number) {
    return number >= 10
})

let result = testnets.find(function (testnet) {
    return testnet === "Rinkeby"
})

numbers.includes(5) // false

const doubled = numbers.map(function (number) {
    return number * 2
})


const races = ["Zerg", "Protoss", "Terran"]
races.join("_") // "Zerg_Protoss_Terran"


// Деструктуризация массивов
const block = [13335416, 355]
const [blockHeight, totalTxs] = block

// Склеить несколько массивов в один (конкатенировать их) можно с помощью многоточия ..., еще называемого спредом🦖:
const weapon = ["Wand of Vitriol"]
const chest = ["Dragonskin Armor"]
const gear = [...weapon, ...chest]




// Объект🦖 — специальный тип данных, позволяющий группировать несколько переменных в одну переменную, состоящую из пар ключей и значений.
// структура в Rust
const block = {
    height: 13272801,
    transactions: 452,
    minedBy: "Spark Pool",
    reward: 2.4811,
    stateRoot: "0xaa8f4"
}

//   Стрелочные функции (лямбда)
const sum = (a, b) => {
    return a + b
}

// при отсутствии {} скрытый return вместо явного return 
const sum = (a, b) => a + b

// Динамические свойства




// Работа со строками
name.trim()

const sentence = "Non-fungible token"
sentence.startsWith("Non") // true
sentence.endsWith("en") // true

sentence.includes("fun") // true

https://codesandbox.io/s/strings-methods-practice-66-forked-5sgv6w

let rollups = "Arbitrum,Optimism,Starkware"
rollups.split(",") // ["Arbitrum", "Optimism", "Starkware"]

const kampai = "За ростовскую братву!"
kampai.replace(" ", "_") // "За_ростовскую братву!" заменен только первый из двух пробелов

kampai.replaceAll(" ", "_") // "За_ростовскую_братву!"

// Слагом (slug) называется строка, используемая для идентификации конкретного ресурса


// Метод .every() возвращает true, если каждый элемент массива соответствует условию в колбэке
// Метод .some() возвращает true, если хоть один элемент массива соответствует условию в колбэке

// Чтобы очистить массив от элементов, нужно задать ему нулевую длину:
// scam.length = 0

// Отдельные элементы массива можно удалить с помощью метода .splice(n), удаляющий все элементы, начиная с n-ного символа.
const firstItem = tokens.splice(0, 1)
// мутирует массив tokens

// Цель .reduce()🦖 посчитать одно значение на основе массива. Другими словами, массив редуцируется до одного значения. 

nums.reduce((acc, cur) => {
    return acc * cur
  }, 1)
//   начальное значение аккумулятора (в примере со сложением он был 0, с умножением — 1). 
// Аккумулятор содержит значение, посчитанное в последний раз, когда редюсер вызывался с предыдущим элементом массива


