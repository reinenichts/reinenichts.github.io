const URL = 'https://panjere-sehraramiz.fandogh.cloud/api/random/5/'
const myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');

fetch(URL, {
    method: "GET",
    headers: myHeaders,
})
.then(res => res.json())
.then((links) => {
    var out = "";
    for(var link of links) {
        out += '<li> <i class="fa fa-external-link" aria-hidden="true"></i> <a href="' + link.text + '" target="_blank" style="target-new: tab;" >' +
        link.title + '</a></li>';
}
document.getElementById("panjere").innerHTML = out;
})
