const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit",(e) => {
    e.preventDefault();
    console.log("hello")
    const userObj={
        username:document.querySelector("#username-login").value,
        password:document.querySelector("#password-login").value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/"
        } else {
            alert("Error")
        }
    }) 
});