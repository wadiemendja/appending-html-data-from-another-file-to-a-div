// fetch and append function
async function fetchAndAppend(filePath, selector) {
    // fetching data from "filepath" file
    const f = await fetch(filePath);
    // storing the results in "html" constant
    const html = await f.text();
    // appending data to the selector
    document.querySelector(selector).innerHTML += html;
}

fetchAndAppend("./header.html", "#app");
fetchAndAppend("./body.html", "#app");
fetchAndAppend("./footer.html", "#app");
