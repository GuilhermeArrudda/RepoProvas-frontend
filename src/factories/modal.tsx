import Swal from "sweetalert2";

function errorModal (text: string) {
	Swal.fire({
		icon: 'error',
		title: 'Fail',
		html: text
	})
}

function successModal(title: string) {
	Swal.fire({
		icon: 'success',
		title,
		timer: 1500
	})
}

function confirmModal(title: string, text: string) {
	Swal.fire({
		title,
		text,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: 'blue',
		cancelButtonColor: 'red',
	})
}

export {
	errorModal,
	successModal,
	confirmModal
}