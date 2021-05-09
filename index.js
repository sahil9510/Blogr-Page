
if($( window ).width() <= 980){
  $(".drop-icon").attr("src","images/icon-arrow-dark.svg")


 $(".navbar-toggler-icon").click(function(){
  $(".hamburger").attr("src") === "images/icon-hamburger.svg" ?
  $(".hamburger").attr("src","images/icon-close.svg") :
  $(".hamburger").attr("src","images/icon-hamburger.svg")

 })



}else{
  $(".drop-icon").attr("src","images/icon-arrow-light.svg")
}
