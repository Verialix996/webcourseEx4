function numbersOnly(event) {
    var char = String.fromCharCode(event.charCode);
    if (!/[0-9]/.test(char)) {
        event.preventDefault();
    }
}

function handleOptionChange(value) {
    var psychometric = document.getElementById("psychometric");
    var mechina = document.getElementById("mechina");

    if (value === "psychometric_bagrut") {
        psychometric.disabled = false;
        mechina.disabled = true;
        mechina.value = "";
    } else if (value === "mechina_bagrut") {
        mechina.disabled = false;
        psychometric.disabled = true;
        psychometric.value = "";
    }
}

function validateForm() {
    var bagrut = document.getElementById("bagrut").value;
    var age = document.getElementById("age").value;
    var result = document.getElementById("result");

    result.textContent = "";
    result.className = "";
    result.style.backgroundColor = "";

    if (bagrut === "") {
        alert("You should enter a bagrut grade");
        return;
    }

    if (parseInt(age) > 30) {
        result.textContent = "You are eligible for admission to any faculty you choose";
        result.className = "green";
        result.style.backgroundColor = "greenyellow";
    }
}
