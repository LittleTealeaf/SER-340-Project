document
	.getElementById("button-back")
	.addEventListener(
		"click",
		() => (window.location.href = "../InstructorCourse/index.html")
	);
document
	.getElementById("button-logout")
	.addEventListener("click", () => (window.location.href = "../Login/index.html"));

document.getElementById("button-create").addEventListener("click",() => window.location.href = "../CreateAccount/index.html")
