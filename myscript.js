fetch('https://raw.githubusercontent.com/Erdem-Sevilmis/Erdem-Sevilmis/main/README.md').then(function (response) {
    return response.text();
}).then(function (html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');

    const newMD = document.createElement("md-block");
    newMD.innerHTML = doc.body.innerHTML;
    document.getElementById('maincontent').appendChild(newMD);
}).catch(function (err) {
    console.warn('Something went wrong.', err);
});