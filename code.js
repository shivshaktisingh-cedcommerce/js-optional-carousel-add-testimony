function addtestimony(){
var content = document.getElementById("text-long-content").value;
var name = document.getElementById("name").value;

var txt = 
"<div class='user-photo shadow' style='height:300px;'>"+
    "<img src='sam.jpg' class='img-fluid rounded-circle' style='height:80%;' alt='testimonial slider'></div>"+
"<div class='slider-caption mt-3'>"+
    "<p class='fs-5'>"+content+"</p>"+
    "<figcaption class='blockquote-footer mt-3 text-white fs-5'><cite>"+name+"</cite></figcaption>"+
    "<ul class='nav justify-content-center mx-3'>"+
   
        "<li class='nav-item dropdown mt-3 mx-3 text-secondary'>"+
         "<i class='bi bi-twitter'></i>"+
        "</li>"+
        "<li class='nav-item dropdown mt-3 mx-3 text-secondary'>"+
         "<i class='bi bi-instagram '></i>"+
        "</li>"+
        "<li class='nav-item dropdown mt-3 mx-3 text-secondary'>"+
         "<i class='bi bi-youtube'></i>"+
        "</li>"+
        "<li class='mt-3 '>"+
         "<i class='bi bi-whatsapp mt-3 mx-3 text-secondary'></i>"+
        "</li>"+
     "</ul>"+
"</div>";
document.getElementById("text-long-content").value="";
document.getElementById("name").value="";
document.getElementById("addhere").innerHTML=txt;
document.getElementById("text-long-content").style.display="none";
document.getElementById("name").style.display="none";
document.getElementById("testbutton").style.display="none";

}