// Login credentials for Page 2
const USERNAME = "Mechandoz360";
const PASSWORD = "@gmail.com";

// Always show login on refresh
window.onload = () => {
    sessionStorage.clear();

    document.getElementById("loginScreen").classList.remove("hidden");
    document.getElementById("website").classList.add("hidden");
};

function login() {

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (user === USERNAME && pass === PASSWORD) {

        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("website").classList.remove("hidden");
        error.textContent = "";

    } else {

        error.textContent = "Invalid username or password.";
        document.getElementById("password").value = "";

    }
}

function logout() {

    document.getElementById("website").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") login();
});
