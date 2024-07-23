

function handleSubmit(event) {
    event.preventDefault();
    let Email = document.getElementById('Email')
    let Password = document.getElementById('Password')
        
    let store = JSON.parse(localStorage.getItem('user')) 

if(Email.value === store[0].userEmail &&Password.value === store[0].userPassword ){
    localStorage.setItem('validation',JSON.stringify(sing =true))
    window.location = "index.html"
}else{
    alert("wrong email or password")
}

   
      }