const signInForm = document.querySelector("#signup-button");

signInForm.addEventListener("click",(e) => {
    e.preventDefault();
    const userObj={
        username:document.querySelector("#username-login").value,
        password:document.querySelector("#password-login").value,
    }
    fetch("/api/users/",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        console.log(res)
        if(res.ok){
           location.href = "/"
        // alert("You are now logged in")
           
        } else {
            alert("Error")
        }
    }) 
});