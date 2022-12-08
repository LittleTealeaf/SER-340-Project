document.getElementById("action-login").addEventListener('click', () => {
	window.location.href = ({
		"Instructor": "../InstructorHome/index.html",
		"Student": "../StudentHome/index.html",
		"Admin": "../AdminHome/index.html",
	})[document.getElementById("input-username").value] || "."
})
