let menu_burger=document.querySelector(".header_top_menu-burger");
let menu_x=document.querySelector(".header_top_menu-x");
let menu=document.querySelector(".header_top_nav_menu");
let portfolio=document.querySelector(".portfolio_buttons");
let portfolio_click=document.querySelectorAll(".portfolio_click");





menu_burger.onclick=function()
{
     menu.style.display="block"; 
     
};

menu_x.onclick=function()
{
     menu.style.display="none"; 
};



portfolio.addEventListener('click',function(event)
{
     let target=event.target;
     if(target.className=="portfolio_buttons")
     return;
     for(let i=0; i<4; i++)
     portfolio_click[i].style.backgroundColor="rgba(0,0,0,0.07)";
     target.style.backgroundColor="#fff";
   
});