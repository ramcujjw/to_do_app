// let regex1 = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/
// // /^([a-zA-Z]{2,})$/
// let regex2 = /^([a-zA-Z0-9\-_#@]{2,20})$/




// DOMContentLoaded Event:     The entire script is wrapped in a
// DOMContentLoaded event listener to ensure that the DOM is 
// fully loaded before any elements are accessed.
// Event Listener for Form Submission:     The formSubmit function is attached to the form's submit event within the DOMContentLoaded event listener.
document.addEventListener('DOMContentLoaded', function() {
let regex1 = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/; // Define regex1
let regex2 = /^([a-zA-Z0-9\-_#@]{2,20})$/; // Define regex2


let err1 = document.getElementById('err1')
let err2 = document.getElementById('err2')
let valid = true;
function formSubmit(e){
    e.preventDefault()
    console.log( document.getElementById('username').value)
    console.log(document.getElementById('password').value)

    var username = document.getElementById('username')
    var password = document.getElementById('password')
    
    // console.log(window.location.href)
    // alert(username.value+password.value)
    if(regex1.test(username.value)){
            err1.innerText = 'valid username'
            err1.style.color = 'green'
             valid = true
            // return true
            
    }
    else{
        err1.innerText = 'invalid username'
        err1.style.color = 'red'
        valid =  false
    }

    if(regex2.test(password.value)){
        err2.innerText = 'valid format'
        err2.style.color = 'green'
        valid = true
        // return true
        
}
else{
    err2.innerText = 'password must be greater than or equal to 8'
    err2.style.color = 'red'
    valid = false
    // return false
}

 if(username.value == "admin" && password.value == "12345" ){
     // e.preventDefault()
     window.location.replace('home.html')    // validate(redirect)
 }

         return valid;
}


// function validate(callback){
//     //somelogic
//     callback("/home.html")
//   }

// function redirect(url) {
//     // location.replace(url)
//       window.location.href = "/home.html"
//   }

//  function validate(callback) {
//             // Some logic can go here
//             callback("/home.html"); // Call the redirect function with the URL
//         }

//         function redirect(url) {
//             window.location.href = url; // Redirect to the specified URL
//         }

document.getElementById('registrationForm').addEventListener('submit', formSubmit);

})
