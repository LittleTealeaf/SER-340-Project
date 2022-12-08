document.getElementById("button-add-instructor").addEventListener('click', () => window.location.href = "../CreateAccount/index.html?type=Admin")
document.getElementById("button-logout").addEventListener('click',() => window.location.href = '../Login/index.html')



document.querySelectorAll("input[value=\"Edit\"]").forEach(input => input.addEventListener('click', () => window.location.href = "../CreateAccount/index.html?type=Admin"))

document.querySelectorAll(".table tr").forEach((row) => {
	row.querySelector("input[value=\"Delete\"]")?.addEventListener('click', () => row.remove())
})
