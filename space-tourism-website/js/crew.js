const member = document.getElementById("name");
const role = document.getElementById("role");
const bio = document.getElementById("bio");
const image = document.getElementById("image");

const pages = document.getElementsByClassName("pages")[0].children;

for (let page of pages) {
    page.addEventListener("click", () => {
        let pageNumber = page.getAttribute("data-page-number");
        let currentPage = document.getElementsByClassName("active-button")[0];

        xhr = new XMLHttpRequest();
        xhr.open("GET", "/space-tourism-website/data.json", true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    var content = JSON.parse(xhr.responseText)["crew"][Number(pageNumber)];
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
    member.innerText = pageContent.name;
    image.setAttribute("src", pageContent.images["png"]);
    bio.innerText = pageContent.bio;
    role.innerText = pageContent.role;
}
