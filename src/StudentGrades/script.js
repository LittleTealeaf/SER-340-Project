document
	.getElementById("button-back")
	.addEventListener(
		"click",
		() => (window.location.href = "../InstructorCourse")
	);
document
	.getElementById("button-logout")
	.addEventListener("click", () => (window.location.href = "../Login"));

document.getElementById("button-create").addEventListener("click",() => window.location.href = "../CreateAccount")
