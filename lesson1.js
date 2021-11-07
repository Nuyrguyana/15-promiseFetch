// синхронный код, выполняется шаг за шагом
/*
const numberOfElements = 50
console.log('начало цикла')
for (let i = 0; i < numberOfElements; i++) {
    console.log(i)
}
console.log('конец цикла')
*/

// асинхронный код

const developer = {
    name: 'Maxim',
    isJSDev: true
}
//
// setTimeout(() => {
//     console.log('setTimeout')
// }, 3000)
//
// console.log(developer)
//
// setInterval(() => {
//     console.log('setInterval')
// }, 1000)

//pending - статус Promise - находиться в ожидании
//fulfilled - удачное выполнение Promise
//rejected - выполнение Promise с ошибкой

const promise = new Promise((resolve, reject) => {    // resolve - функция вызывается, если Promise был выполнен успешно. reject - наоборот
    if (developer.isJSDev) {
        setTimeout(() => {
            resolve(`${developer.name} является JavaScript - разработчиком.`)
        }, 3000)
    } else {
        reject(`${developer.name} НЕ является JavaScript - разработчиком.`)
    }
})

console.log(promise)

// методы  Promise - then(когда resolve), catch, finally

promise
    .then((successMessage) => {
        console.log('successMessage', successMessage)
    })
.catch((error) => {
    console.log('error', error)
})
.finally(() => {
    console.log('finally')
})

