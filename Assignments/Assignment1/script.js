function generate()
{
    let val = 100000 + Math.round(899999*Math.random());
    document.getElementById("textbox1").setAttribute("value", "" + val);
}

function pressed(parameter)
{
    let prev = document.getElementById("textbox2").getAttribute("value");
    if(parameter == "submit")
    {
        let v1 = document.getElementById("textbox1").getAttribute("value");
        if(v1 == prev) document.getElementById("output").innerHTML= "&#x2705; Your Secret Key is matched!";
        else
        {
            document.getElementById("output").innerHTML="&#x274E; Your Secret Key is NOT matched!";
        }
        return ;
    }
    if(parameter == "backspace")
    {
        prev = prev.substring(0, prev.length-1);
    }
    else if(parameter == "clear")
    {
        prev = "";
    }
    else 
    {
        if(prev.length < 6) prev += "" + parameter;
    }
    document.getElementById("textbox2").setAttribute("value", prev);
}