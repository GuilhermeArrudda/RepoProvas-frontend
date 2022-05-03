import { LoadingButton } from "@mui/lab";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { errorModal } from "../../factories/modal";
import useAuth from "../../hooks/userContext";
import * as api from "../../services/api";
import { Form } from "../Form";

function AddProveComponent({setValue}) {
	const [info, setInfo] = useState({name: '', pdfUrl: '', category: '', discipline: '', teacher: ''})
	const [categories, setCategories] = useState([])
	const [disciplines, setDisciplines] = useState([])
	const [teachers, setTeachers] = useState([])
	const [filteredTeachers, setFilteredTeachers] = useState([])
	const [isLoading, setIsLoading]  = useState(false)
	const [isDisabled, setIsDisabled] = useState(false)
	const { user } = useAuth()

	useEffect(() => {
		findData()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	function findData() {
		api.getCategoriesList(user)
			.then((categoriesList) => {
				setCategories(categoriesList.data)
			})
		api.getDisciplinesList(user)
			.then((disciplinesList) => {
				setDisciplines(disciplinesList.data)
			})
		api.getTeachersList(user)
			.then((teachersList) => {
				setTeachers(teachersList.data)
			})
	}

	function filterTeachers(disciplineName) {
		setFilteredTeachers(teachers.filter((t) => t.disciplines.includes(disciplineName)))
	}

	function handleInput(e) {
		setInfo({ ...info, [e.target.name]: e.target.value });
	}

	function filterController(e) {
		filterTeachers(e.target.value);
		handleInput(e);
	}

	function postNewTest(e) {
		e.preventDefault()
		api.postNewTest(user, { ...info })
		.then((response) => {
			setIsLoading(true)
			setIsDisabled(true)
			setValue('disciplinas')
		})
		.catch((error) => {
			errorModal(error)
		})
		.finally(() => {
			setIsDisabled(false)
			setIsLoading(false)
		})
	}

	return (
		<Form onSubmit={postNewTest}>
			<TextField
				required
				name='name'
				value={info.name}
				onChange={handleInput}
				label='Título da prova'
			/>
			<TextField
				required
				name='pdfUrl'
				value={info.pdfUrl}
				onChange={handleInput}
				label='PDF da prova'
			/>
			<FormControl>
				<InputLabel id='label'>Categoria</InputLabel>
				<Select
					required
					value={info.category}
					onChange={handleInput}
					labelId='label'
					label='Categoria'
					name='category'
				>
					{categories.map((category) => (
						<MenuItem
							key={category.id}
							value={category.name}
							name='category'
						>
						{category.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl>
				<InputLabel id='label'>Disciplina</InputLabel>
				<Select
					required
					value={info.discipline}
					onChange={(e) => {
						filterController(e);
					}}
					labelId='label'
					label='Disciplina'
					name='discipline'
				>
					{disciplines.map((discipline) => (
						<MenuItem
							key={discipline.id}
							value={discipline.name}
							name='discipline'
						>
							{discipline.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl>
				<InputLabel id='label'>Pessoa Instrutora</InputLabel>
				<Select
					required
					value={info.teacher}
					onChange={handleInput}
					labelId='label'
					label='Pessoa Instrutora'
					disabled={info.discipline === ''}
					name='teacher'
				>
					{filteredTeachers.map((teacher) => (
						<MenuItem
							key={teacher.id}
							value={teacher.teacherName}
							name='teacher'
						>
							{teacher.teacherName}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<LoadingButton
				type='submit'
				variant='contained'
				size='large'
				disabled={isDisabled}
				loading={isLoading}
			>
				Adicionar
			</LoadingButton>
		</Form>
	)
}

export default AddProveComponent