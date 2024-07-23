
function handleSubmit(event) {
let Email = document.getElementById('Email')
let Name = document.getElementById('name')
let Password = document.getElementById('Password')
let user =[{userEmail : Email.value,userName : Name.value,userPassword :Password.value}]
    event.preventDefault();
   localStorage.setItem("user",JSON.stringify(user))

    if(localStorage.getItem('user')){
 alert(`Welcome ${user[0].userName}`)

    setTimeout(() => {
        window.location = "login.html"
    }, 3000);
}else{
    alert("please check your information")
}

  }