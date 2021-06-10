function display(val)
{
     var numbers = document.getElementById("input").value+=val;   
}
function operation(val)
{
    var numbers=document.getElementById("input").value=val;   
}
function clr()
{
    document.getElementById("input").value="";
}

function resultadd()
{

  let x=document.getElementById("input").value;
  try
  {
    let y=eval(x);
    document.getElementById("input").value=y;
  }
  catch(e)
  {
    document.getElementById("input").value="";
    document.getElementById("input").value="Invalid";
  }
}

