function validate()
{
    var u_name = document.getElementById("username").value;
    var u_pass = document.getElementById("password").value;
    if(u_name == "gaurav" && u_pass == "12345")
     {
        location.assign("https://gauravrawat369.github.io/websitetemplate5.github.io/")
     }
    else
    window.alert("login unsuccessful");
}