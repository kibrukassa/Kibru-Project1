window.addEventListener('load', async () => {

    let res = await fetch('http://localhost:8080/checkloginstatus', {
        method: 'GET',
        credentials: 'include'
    });

    if (res.status === 200) {
        let userObj = await res.json();

        if (userObj.user_role === 'employee') {
            window.location.href = 'employee-homepage.html';
        } else if (userObj.user_role === 'Finance Manager') {
            window.location.href = 'finance-manager-homepage.html';
        }
    }

});
let loginButton = document.querySelector('#login-btn');

loginButton.addEventListener('click', loginButtonClicked);

function loginButtonClicked() {
    login();
}

async function login() {
    let user_emailInput = document.querySelector('#user_email');
    let user_passwordInput = document.querySelector('#user_password');

    try {
        let res = await fetch('http://localhost:8080/login', {
            method: 'POST',
            credentials: 'include', // This is to make sure that the browser retains the cookie and includes it in future requests
            body: JSON.stringify({
                user_email: user_emailInput.value,
                user_password: user_passwordInput.value
            }) 
        });

        let data = await res.json();

         if (res.status === 400) {
            let loginErrorMessage = document.createElement('p');
            let loginDiv = document.querySelector('#login-info');

            loginErrorMessage.innerHTML = data.message;
            loginErrorMessage.style.color = 'red';
            loginDiv.appendChild(loginErrorMessage);
        }

         if (res.status === 200) {
            console.log(data.user_role);
            if (data.user_role === 'employee') {
                window.location.href = 'employee-homepage.html';
            } else if (data.user_role === 'Finance Manager') {
                window.location.href = 'finance-manager-homepage.html';
            }
        }

    } catch(err) {
        console.log(err);
    }
    
}