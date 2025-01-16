document.addEventListener("DOMContentLoaded", () => {
    const signupbtn = document.getElementById("signup");


        const firstinput = document.getElementById("fname");
        const firsterror = document.getElementById("fnameerr");
        const secinput = document.getElementById("sname");
        const secerror = document.getElementById("snameerr");
        const emailinput = document.getElementById("email");
        const emailerror = document.getElementById("emailerr");
        const passinput = document.getElementById("password");
        const passerror = document.getElementById("passerr");
        const cpassinput = document.getElementById("cpass");
        const cpasserror = document.getElementById("cpasserr");

        firstinput.addEventListener("input", () => {
            firsterror.textContent = "";
        });
        secinput.addEventListener("input", () => {
            secerror.textContent = "";
        });
        emailinput.addEventListener("input", () => {
            emailerror.textContent = "";
        });
        passinput.addEventListener("input", () => {
            passerror.textContent = "";
        });
        cpassinput.addEventListener("input", () => {
            cpasserror.textContent = "";
        });

        signupbtn.addEventListener("click", (event) => {
            event.preventDefault();

            const emais = emailinput.value.trim();
            const passwords = passinput.value.trim();
            const fnamef = firstinput.value.trim();
            const snamegds = secinput.value.trim();
            const confirvdmPassword= cpassinput.value.trim();

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const passwordRegex = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            const nameRegex = /^[a-zA-Z]+$/;

            let isValid = true;

            if (!emailRegex.test(emais)) {
                emailerror.textContent = "*required";
                isValid = false;
            }

            if (!nameRegex.test(fnamef)) {
                firsterror.textContent = "*required";
                isValid = false;
            }

            if (!nameRegex.test(snamegds)) {
                secerror.textContent = "*required";
                isValid = false;
            }

            if (!passwordRegex.test(passwords)) {
                passerror.textContent = "*required";
                isValid = false;
            }

            if (passwords !== confirvdmPassword) {
                cpasserror.textContent = "Passwords do not match";
                isValid = false;
            }

            if (isValid) {
                window.location.href = "login.html";
            }

        });
    
});
