"use strict";

(() =>{

    //check if the user is noty logged in
    if(!sessionStorage.getItem("user"))
    {
        //redirect
        location.href = "login.html";
    }   
})();

