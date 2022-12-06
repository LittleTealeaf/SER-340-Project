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