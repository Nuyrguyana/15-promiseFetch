const USER_URL = 'https://jsonplaceholder.typicode.com/users'

const createUserName = (name) => {
    const userName = document.createElement('li')
    const userNameAnchor = document.createElement('a')
    userNameAnchor.href = '#'
    userNameAnchor.textContent = name
    userName.append(userNameAnchor)
    return userName
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

const dataContainer = document.querySelector('#data-container')
const getAllUsers = () => {
    toggleLoader()
    const result = fetch(USER_URL, {
        method: 'Get'
    })
    console.log('result', result)
    result
        .then((response) => {
            console.log(response)
            if (!response.ok) {
                throw new Error('ошибка')
            }
            return response.json()
        })
        .then((users) => {
            console.log(users)
            users.forEach((user) => {
                const userHTML = createUserName(user.name)
                dataContainer.append(userHTML)
            })
        })
        .catch((error) => {
            console.error( error)
        })
        .finally(() => {
            toggleLoader()
        })
}
getAllUsers()
