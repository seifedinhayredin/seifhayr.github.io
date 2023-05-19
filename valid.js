function verify(){
    var x = document.getElementById("uname").value;
    var y = document.getElementById("pass").value;
    if (x == "seyf" && y == 1234)
    {
        
       alert("you entered username = " + x +" and password = " + y) ;
    }
    else{
        alert("incorrect value ");
    }
}