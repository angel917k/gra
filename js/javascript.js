function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.borderRight= "solid 2px white";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
      document.getElementById("mySidenav").style.borderRight= "none";
    document.body.style.backgroundColor = "black";
}
