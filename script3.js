/* ===== Demo Credentials ===== */
const USERNAME = "Mechandoz360";
const PASSWORD = "iamnotokbutitsfin";
const VERIFICATION_CODE = "499808";

/* Show login every refresh */
window.onload = () => {
    document.getElementById("loginScreen").classList.remove("hidden");
    document.getElementById("website").classList.add("hidden");
};

function login() {

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;
    const code = document.getElementById("verificationCode").value;

    const error = document.getElementById("error");

    if (
        user === USERNAME &&
        pass === PASSWORD &&
        code === VERIFICATION_CODE
    ) {

        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("website").classList.remove("hidden");

        error.textContent = "";

    } else {

        error.textContent = "Invalid username, password or verification code.";

        document.getElementById("password").value = "";
        document.getElementById("verificationCode").value = "";

    }

}

function logout() {

    document.getElementById("website").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("verificationCode").value = "";

}

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        login();
    }
});

/* Replace these with your real URLs */
const links = [
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#"
];
