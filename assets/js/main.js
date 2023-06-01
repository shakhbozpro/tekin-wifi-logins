const wPageContents = document.querySelector(".w-page-contents");
const bepulTarifBtn = document.querySelector(".free-btn");
const selectedValue = document.querySelector(".select-selected");
const selectItems = document.querySelector(".select-items");
const options = selectItems.querySelectorAll("div");
const vaucherBtn = document.querySelector(".vaucher-btn");

bepulTarifBtn.addEventListener("click", () => {
    wPageContents.style.display = "none";
    const loginForm = document.querySelector(".login-wrapper");
    loginForm.classList.add("login-wrapper-active");
});

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

function formatTelephone(input) {
    // Remove all non-digit characters from the input value
    const cleaned = input.value.replace(/\D/g, '');
    
    // Check if the input is empty or exceeds the maximum length
    if (cleaned.length === 0) {
        input.value = '';
        return;
    }
    
    // Format the telephone number based on the cleaned value
    var formatted = '+998 ';
    if (cleaned.length > 3) {
        formatted += '(' + cleaned.substring(3, 5) + ') ';
    }
    if (cleaned.length > 5) {
        formatted += cleaned.substring(5, 8) + '-';
    }
    if (cleaned.length > 8) {
        formatted += cleaned.substring(8, 10) + '-';
    }
    if (cleaned.length > 10) {
        formatted += cleaned.substring(10, 12);
    }
    
    // Update the input value with the formatted telephone number
    input.value = formatted;
}

vaucherBtn.addEventListener("click", () => {
    wPageContents.style.display = "none";
    const vaucherCodesWrapper = document.querySelector(".vaucher-codes-wrapper");
    vaucherCodesWrapper.classList.toggle("vaucher-active");
});

$(".vaucher-code-input").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next('.vaucher-code-input').focus();
    }
});