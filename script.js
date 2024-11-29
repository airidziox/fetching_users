const body = document.querySelector('body');

fetch("https://api.escuelajs.co/api/v1/users")
.then((res) => res.json())
.then(users => {

    users.map(user => {
        console.log(user)
        body.innerHTML += `
            <div class="card" style="width: 18rem;">
                 <img class="card-img-top" src="${user.avatar}" alt="Card image cap">
                 <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <h6 class="card-subtitle mb-4 text-muted">${user.role}</h6>
                        <p class="email"><b>Email: </b><span>${user.email}</span></p>
                        <p class="password"><b>Password: </b><span>${user.password}</span></p>
                        <p class="creationAt">Created: ${user.creationAt}</p>
                </div>
            </div>
        `
    })
})