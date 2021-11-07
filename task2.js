const USER_URL = 'https://jsonplaceholder.typicode.com/users'
const usersIds = [5, 6, 2, 1]
const dataContainer = document.querySelector('#data-container')

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
const getUsersByIds = (ids) => {
    toggleLoader()
    const requests = ids.map((id) => fetch(`${USER_URL}/${id}`))
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json())
            return Promise.all(dataResults)
        })
        .then((users) => {
            console.log(users)
            users.forEach((user) => {
                const userHTML = createUserName(user.name)
                dataContainer.append(userHTML)
            })
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            toggleLoader()
        })
}

getUsersByIds(usersIds)
