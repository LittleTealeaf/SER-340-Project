function uploadTestCase() {
	const tag_input = document.getElementById("uploadTestInput");
	const tag_output = document.getElementById("uploadTestOutput");

	const file_input = tag_input.files[0];
	const file_output = tag_output.files[0];


	const output_list = document.getElementById("assignmentTestCases");

	const list_entry = document.createElement("div");
	list_entry.classList.add("flex-row","justify-content-between", "list-group-item")
	list_entry.style.display = "flex";


	const test_details = document.createElement("div");
	test_details.classList.add("test-details", "flex");

	const textIn = document.createElement("div");
	textIn.textContent = file_input?.name || "";

	const textOut = document.createElement("div");
	textOut.textContent = file_output?.name || "";
	
	test_details.append(textIn, textOut);
	
	const del_button_container = document.createElement("div");
	del_button_container.classList.add("flex","justify-content-center","align-items-center")

	const del_button = document.createElement("button");	
	del_button.innerText = "remove";
	del_button.classList.add("btn","btn-danger");
	del_button.addEventListener("onclick", (_) => {
		list_entry.remove()	
	})

	del_button_container.append(del_button)


	list_entry.append(test_details, del_button_container)

	output_list.append(list_entry);
}

function resetUpload() {
	const head = document.getElementById("uploadFiles");
	head.innerHTML = "";


	const labelIn = document.createElement("label");
	labelIn.textContent = "Test Input";
	labelIn.classList.add("form-control-label")

	const inputIn = document.createElement("input");
	inputIn.id = "uploadTestInput"
	inputIn.type = "file"
	inputIn.classList.add("form-control")

	const labelOut = document.createElement("label");
	labelOut.textContent = "Test Output"
	labelOut.classList.add("form-control-label");

	const inputOut = document.createElement("input");
	inputOut.id = "uploadTestOutput"
	inputOut.type = "file"
	inputOut.classList.add("form-control")
	

	head.append(labelIn, inputIn, labelOut, inputOut)
}
