//window.onload = function(){

$(document).ready(function(){    
    var find = document.getElementById("lookup");
    var lookup = $("#lookup");
    find.onclick=function() {
       $.ajax({
            type: "GET",
            url: "world.php",
            datatype: "html",
            data: {
                    country: $("#country").val()
                },
                success: function(text){
                    $("#result").html(text);
                }
        })
    }
    })
       /* var data = document.getElementById("country").value;
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
                document.getElementById("result").innerHTML= httpRequest.responseText;
            }
        };
        httpRequest.open('GET', "world.php?country="+data,true);
        httpRequest.send();*/
   // }
//}