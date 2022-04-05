const tech = document.getElementById("tech");
const description = document.getElementById("description");
const image = document.getElementById("image");

var mediaQuery = window.matchMedia("(max-width: 928px)");

const pages = document.getElementsByClassName("pages")[0].children;

for (let page of pages) {
    page.addEventListener("click", () => {
        let pageNumber = page.getAttribute("data-page-number");
        let currentPage = document.getElementsByClassName("active-button")[0];

        xhr = new XMLHttpRequest();
        xhr.open("GET", "/Space-tourism-website/space-tourism-website/data.json", true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    var content = JSON.parse(xhr.responseText)["technology"][Number(pageNumber)];
                    populateDom(content);
                 }
            }
        }

    xhr.send();

        currentPage.classList.remove("active-button");
        page.classList.add("active-button");
    })
}

function populateDom(pageContent) {
    
    function setImage(query) {
        if (query.matches) {
            image.setAttribute("src", pageContent.images["landscape"]);
        }
        else {
            image.setAttribute("src", pageContent.images["portrait"]);
        }
    }

    tech.innerText = pageContent.name;
    description.innerText = pageContent.description;

    setImage(mediaQuery);
}

window.addEventListener("load", () => {
    if (mediaQuery.matches) {
        image.setAttribute("src", "./assets/technology/image-launch-vehicle-landscape.jpg");
    }
    else {
        image.setAttribute("src", "./assets/technology/image-launch-vehicle-portrait.jpg");
    }
})


window.addEventListener("resize", () => {
    location.reload();
})
