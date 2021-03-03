
//check if the user is logged in
if(!sessionStorage.getItem("user"))
{
  //redirect
  location.href = "login.html";
}
