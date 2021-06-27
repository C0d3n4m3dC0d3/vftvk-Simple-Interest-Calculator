function initialise(){
    //Populating the options for selection box
    var select = document.getElementById("years");
    for(var i = 1; i<=10; i++){
        var option = document.createElement("option");
        option.value=i;
        option.text=""+i;
        select.appendChild(option);
    }
}

//Displaying the rate value selected
function displayRate(){
    var r = document.getElementById("rate").value;
    var rV = document.getElementById("rate_val");
    rV.innerHTML = r+"%";
}

//Displaying the user inputs and SI amount as result
function display(p, n, r, si){
    var year = new Date().getFullYear() + parseInt(n);

    var div = document.getElementById("result");
    div.innerHTML = "If you desposit <mark>"+ p +"</mark>,<br>" 
                    + "at an interest rate of <mark>" + r + "%</mark>.<br>"
                    + "You will receive an amount of <mark>" + si +"</mark>,<br>"
                    + "in the year <mark>" + year +"</mark>";
}

//To check if PA field is non-empty or contains positive non-zero values
function valid(p){
    if(p <= 0 || p == null){
        return false;
    }
    return true;
}

//Computing the Simple Interest after validating PA field
function compute()
{
    var p = document.getElementById("principal");
    var pa = p.value;
    var r = document.getElementById("rate").value;
    var n = document.getElementById("years").value;
    if(valid(pa)){
        var si = pa*n*r/100;
        display(pa, n, r, si);
    }
    else{
        alert("Enter a positive number!");
        p.focus();
    }
}
