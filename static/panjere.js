function showPanjere(URL) {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log(JSON.parse(xmlhttp.response));
        var myArr = JSON.parse(xmlhttp.response);
        showRandomLinks(myArr);
      }
    };
    xmlhttp.open("GET", URL, true);
    xmlhttp.setRequestHeader('Accept', 'application/json');
    xmlhttp.send();

    function showRandomLinks(links) {
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
