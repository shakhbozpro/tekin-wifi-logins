const wPageContents = document.querySelector(".w-page-contents");
const selectedValue = document.querySelector(".select-selected");
const selectItems = document.querySelector(".select-items");
const options = selectItems.querySelectorAll("div");

selectedValue.addEventListener("click", function() {
    selectItems.style.display = "block";
});

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function() {
        const value = this.getAttribute("data-value");
        const text = this.textContent;
        const imageSrc = this.querySelector("img").getAttribute("src");
        const imageAlt = this.querySelector("img").getAttribute("alt");
        
        selectedValue.innerHTML = `<img src="${imageSrc}" alt="${imageAlt}"> ${text}`;
        selectItems.style.display = "none";
    });
}

document.addEventListener("click", function(event) {
    if (!event.target.closest(".custom-select")) {
        selectItems.style.display = "none";
    }
});

$(".vaucher-code-input").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next('.vaucher-code-input').focus();
    }
});