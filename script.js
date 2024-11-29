const body = document.querySelector('body');

fetch("https://api.escuelajs.co/api/v1/users")
.then((res) => res.json())
.then(users => {

    users.map(user => {
        console.log(user)
        body.innerHTML += `
        
        `
    })
})