window.onload = function(){
    var find = document.getElementById("lookup");
    find.onclick=function() {
       /* $.ajax({
            type: "GET",
            url: "world.php",
            datatype: "html",
        })*/
        var data = document.getElementById("country").value;
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
                document.getElementById("result").innerHTML= httpRequest.responseText;
            }
        };
        httpRequest.open('GET', "world.php?q="+data,true);
        httpRequest.send();
    }
}