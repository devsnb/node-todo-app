// Get All buttons from the webpage
const deleteBtns = document.querySelectorAll('.delete')
const categories = document.querySelectorAll('.list-group > p')
const checkBoxes = document.querySelectorAll(
	'.list-group > input[type=checkbox]'
)

// Add click event listeners for all delete buttons
deleteBtns.forEach(btn => {
	btn.addEventListener('click', async event => {
		const todoId = event.target.parentElement.parentElement.id
		await removeTodo(todoId)
		location.reload()
	})
})

// Set the category color
categories.forEach(category => {
	switch (category.textContent) {
		case 'school':
			category.classList.add('school')
			break
		case 'work':
			category.classList.add('work')
			break
		case 'chores':
			category.classList.add('chores')
			break
		default:
			category.classList.add('none')
	}
})

// Mark todo statuses
checkBoxes.forEach(checkBox => {
	checkBox.addEventListener('click', async event => {
		const todoId = event.target.parentElement.parentElement.id
		await updateTodo(todoId)
	})
})

// Call the remove todo API from our backend
async function removeTodo(id) {
	try {
		await fetch(`/todo/${id}`, {
			method: 'DELETE'
		})
	} catch (error) {
		console.error(error)
	}
}

// Call the update todo API from our backend
async function updateTodo(id) {
	try {
		await fetch(`/todo/${id}`, {
			method: 'PATCH'
		})
	} catch (error) {
		console.error(error)
	}
}
