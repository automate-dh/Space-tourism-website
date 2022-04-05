const place = document.getElementById("place");
const image = document.getElementById("image");
const description = document.getElementById("description");
const distance = document.getElementById("distance");
const time = document.getElementById("time");

const pages = document.getElementsByClassName("secondary-nav")[0].children;

for (let page of pages) {
    page.addEventListener("click", () => {
        let pageNumber = page.getAttribute("data-page-number");
        let currentPage = document.getElementsByClassName("current-page")[0];

        xhr = new XMLHttpRequest();
        xhr.open("GET", "/Space-tourism-website/space-tourism-website/data.json", true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    var content = JSON.parse(xhr.responseText)["destinations"][Number(pageNumber)];
                    populateDom(content);
                 }
            }
        }

    xhr.send();

        currentPage.classList.remove("current-page");
        page.classList.add("current-page");
    })
}


function populateDom(pageContent) {
    place.innerText = pageContent.name;
    image.setAttribute("src", pageContent.images["png"]);
    description.innerText = pageContent.description;
    distance.innerText = pageContent.distance;
    time.innerText = pageContent.travel;
}
