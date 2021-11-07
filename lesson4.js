// Promise.race([
//     new Promise(),
//     new Promise(),
//     new Promise()
// ])

// промис рейс возвращает самый быстрый промис и не важно какой будет статус

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
      resolve('promise1')
  }, 500)
})

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
      resolve('promise2')
  }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject('promise3')
  }, 1000)
})

Promise.race([promise1, promise2, promise3])
.then((result) => {
    console.log('result', result)
})
.catch((error) => {
    console.log('error', error)
})