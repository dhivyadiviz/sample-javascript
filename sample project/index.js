function check()
{
    text=document.getElementById('name').Value;
    phone=document.getElementById('number').value;

    if(text=="")
    {
        alert("Please fill the name");
        return false;

    }
    else if(phone=="")
    {
        alert("enter  your moblie number");
        return false;
    } 


}