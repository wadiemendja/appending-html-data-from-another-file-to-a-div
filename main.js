async function fetchAndAppend(filePath, selector) {
    const f = await fetch(filePath);
    const html = await f.text();
    document.querySelector(selector).innerHTML += html;
}

fetchAndAppend("./header.html", "#app");
fetchAndAppend("./body.html", "#app");
fetchAndAppend("./footer.html", "#app");