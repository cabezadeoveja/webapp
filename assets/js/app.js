$(document).ready(() => {
/*splash*/
	setTimeout(function() {
      $('#splash').fadeOut(200);
   }, 4500); //4500 = la imagen se mostrará por 4.5s
});

  	$(".effect1").mouseover(function(){
        $(".effect1").css("opacity", "0.6");
    });
    $(".effect1").mouseout(function(){
        $(".effect1").css("opacity", "1");
    });
    $(".effect2").mouseover(function(){
        $(".effect2").css("opacity", "0.6");
    });
    $(".effect2").mouseout(function(){
        $(".effect2").css("opacity", "1");
    });
    $(".effect3").mouseover(function(){
        $(".effect3").css("opacity", "0.6");
    });
    $(".effect3").mouseout(function(){
        $(".effect3").css("opacity", "1");
    });
    $(".effect4").mouseover(function(){
        $(".effect4").css("opacity", "0.6");
    });
    $(".effect4").mouseout(function(){
        $(".effect4").css("opacity", "1");
    });
    $(".effect5").mouseover(function(){
        $(".effect5").css("opacity", "0.6");
    });
    $(".effect5").mouseout(function(){
        $(".effect5").css("opacity", "1");
    });


function viewFiltre(id) {
     if (id == "sites-entretencion") {
         $("#sites-entretencion").show();
         $("#sites-restaurante").hide();
         $("#sites-supermarket").hide();
         $("#sites-jardineria").hide();
         $("#sites-acuatico").hide();
         $("#sites-topfive").hide();
         $("#sites-panoramas").hide();
     }
     if (id == "sites-restaurante") {
         $("#sites-entretencion").hide();
         $("#sites-restaurante").show();
         $("#sites-supermarket").hide();
         $("#sites-jardineria").hide();
         $("#sites-acuatico").hide();
         $("#sites-topfive").hide();
         $("#sites-panoramas").hide();
     }
     if (id == "sites-supermarket") {
         $("#sites-entretencion").hide();
         $("#sites-restaurante").hide();
         $("#sites-supermarket").show();
         $("#sites-jardineria").hide();
         $("#sites-acuatico").hide();
         $("#sites-topfive").hide();
         $("#sites-panoramas").hide();
     }
     if (id == "sites-jardineria") {
         $("#sites-entretencion").hide();
         $("#sites-restaurante").hide();
         $("#sites-supermarket").hide();
         $("#sites-jardineria").show();
         $("#sites-acuatico").hide();
         $("#sites-topfive").hide();
         $("#sites-panoramas").hide();
     }  
     if (id == "sites-acuatico") {
         $("#sites-entretencion").hide();
         $("#sites-restaurante").hide();
         $("#sites-supermarket").hide();
         $("#sites-jardineria").hide();
         $("#sites-acuatico").show();
         $("#sites-topfive").hide();
         $("#sites-panoramas").hide();
     }                
     if (id == "sites-topfive") {
         $("#sites-entretencion").hide();
         $("#sites-restaurante").hide();
         $("#sites-supermarket").hide();
         $("#sites-jardineria").hide();
         $("#sites-acuatico").hide();
         $("#sites-topfive").show();
         $("#sites-panoramas").hide();
     }

    };

