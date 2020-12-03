function showPanjere(URL) {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://panjere-sehraramiz.fandogh.cloud/api/random/5/";

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log(JSON.parse(xmlhttp.response));
        var myArr = JSON.parse(xmlhttp.response);
        myFunction(myArr);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Accept', 'application/json');
    xmlhttp.send();

    function myFunction(links) {
        var out = "";
        for(var i = 0; i < links.length; i++) {
            out += '<li> <i class="fa fa-external-link" aria-hidden="true"></i> <a href="' + links[i].text + '" target="_blank" style="target-new: tab;" >' +
            links[i].title + '</a></li>';
        }

        document.getElementById("panjere").style.direction = "rtl";
        document.getElementById("panjere").style.listStyleType = "none";
        document.getElementById("panjere").innerHTML = out;
    }
}
