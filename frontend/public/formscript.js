function createCard(name, description, pages, icon) {
    const card = document.createElement("div");
    card.classList.add("card");

    const content = document.createElement("div");
    content.classList.add("content");

    const img = document.createElement("img");
    img.src = icon;

    const h3 = document.createElement("h3");
    h3.innerHTML = name;

    const p = document.createElement("p");
    p.innerHTML = description;

    const a = document.createElement("a");
    a.href = pages;
    a.innerHTML = "Steam Page";

    content.appendChild(img);
    content.appendChild(h3);
    content.appendChild(p);
    content.appendChild(a);

    card.appendChild(content);

    return card;
}

document.addEventListener("DOMContentLoaded", function() {
    const submit = document.getElementById("submit");
    submit.addEventListener("click", function() {
        var name = document.querySelector("input[name='name']").value;
        var description = document.querySelector("input[name='description']");
        var pages = document.querySelector("input[name='pages']");
        var icon = document.querySelector("input[name='icon']");

        const card = createCard(name, description, pages, icon);
        const container = document.getElementById("cont");
        container.appendChild(card);
    });
});