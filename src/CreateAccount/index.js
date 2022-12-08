function onValidateCreateAccount(event) {
	event.preventDefault();
	const form = document.getElementById("createAccountForm");

	// name, username, password, password-verify (form-)

	const inputName = form.querySelector("#form-name input");
	const inputUsername = form.querySelector("#form-username input");
	const inputPassword = form.querySelector("#form-password input");
	const inputPasswordVerify = form.querySelector("#form-password-verify input");

	var wasValid = true;

	[inputName, inputUsername, inputPassword].forEach((input) => {
		input.setCustomValidity("");
		if (input.checkValidity() === false) {
			wasValid = false;
		}
	});

	if (inputPassword.value !== inputPasswordVerify.value) {
		inputPasswordVerify.setCustomValidity("Passwords do not match");
		wasValid = false;
	}

	if (!wasValid) {
		form.classList.add("was-validated");
		return false;
	}

	return true;
}

if(new URLSearchParams(window.location.search).get("type") == "Admin") {
	document.querySelector("form").action = "../AdminHome/index.html"
	document.getElementById("button-back").addEventListener('click', () => window.location.href = "../AdminHome/index.html")
} else if(new URLSearchParams(window.location.search).get("type") == "InstructorCourse") {
	document.querySelector("form").action = "../InstructorCourse/index.html"
	document.getElementById("button-back").addEventListener('click', () => window.location.href = "../InstructorCourse/index.html")
} else {
	document.getElementById("button-back").addEventListener('click', () => window.location.href = "../StudentGrades/index.html")
}

document.getElementById("button-logout").addEventListener('click', () => window.location.href = "../Login/index.html")
