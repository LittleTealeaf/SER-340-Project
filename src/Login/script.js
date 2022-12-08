document.getElementById("action-login").addEventListener('click', () => {
	window.location.href = ({
		"Instructor": "../InstructorHome/",
		"Student": "../StudentHome/",
		"Admin": "../AdminHome/",
	})[document.getElementById("input-username").value] || "."
})
