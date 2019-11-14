document.querySelector("li").classList.toggle("done");
//var button=document.getElementsByTagName("button")[0];
//button.addEventListener("mouseenter",function()
//{
//console.log("Click!!!");
//})

var button=document.getElementById("enter");
var input=document.getElementById("user-input");
var ul= document.querySelector("ul");

function inputLength()
{
    return input.value.length;
}

function createListElememt()
{
    var li= document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
    input.value="";
}

function addListAfterClick()
{
    if(inputLength()>0){
    createListElememt();

    }
}

function addListAfterKeypress(event)
{
    
    if(inputLength()>0&&event.keyCode===13){
    createListElememt();
    }   
}

button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);
