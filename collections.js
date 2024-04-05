var sidenav=document.querySelector(".side_navbar")
//sidenav.style.display="none"

function showNavBar()
{
    sidenav.style.left="0"
}
function CloseNavBar()
{
    sidenav.style.left="-60%"
}
var productcontainer=document.getElementById("product")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count++)
    {
        var productname=productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})