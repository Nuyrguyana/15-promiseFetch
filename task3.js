const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos'
const fastestLoadedPhoto = [60, 12, 55]
const dataContainer = document.querySelector('#data-container')

const createPhoto = (photo) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')

    li.className = 'photo-item'
    img.className = 'photo-item__image'
    img.src = `${PHOTO_URL}/${photo.id}`
    h3.className = 'photo-item__title'
    h3.textContent = `${photo.title}`

    li.append(img, h3)
    // document.body.append(li)

    return li
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden')
    if (isHidden) {
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
}

const getFastestLoadedPhoto = (ids) => {
    toggleLoader()
    const requests = ids.map((id) => fetch(`${PHOTO_URL}/${id}`))
    console.log(requests)
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json())
            return Promise.all(dataResults)
        })
        .then((photos) => {
            console.log('photos', photos)
            photos.forEach((photo) => {
                const photoHTML = createPhoto(photo)
                dataContainer.append(photoHTML)
            })
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            toggleLoader()
        })

    Promise.race(requests)
        .then((result) => {
            console.log('result', result)
        })
        .catch((error) => {
            console.log('error', error)
        })
}
getFastestLoadedPhoto(fastestLoadedPhoto)

