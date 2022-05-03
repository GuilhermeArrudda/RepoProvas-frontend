import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/userContext";
import * as api from "../../services/api"
import styled from "styled-components";
import Logo from "./logo";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Autocomplete, Menu, TextField, Typography } from "@mui/material";
import { successModal } from "../../factories/modal";


function Header({mainPage, label, terms, teachers, setSearch, setDiscipline}) {
	const [focus, setFocus] = useState(null)
	const open = Boolean(focus)
	const { user, logout } = useAuth()
	let navigate = useNavigate()

	const handleClose = () => {
		setFocus(null)
	}

	const handleLogout = () => {
		api.validateToken(user)
			.then(() => {
				logout()
				successModal('Logout was successful')
				navigate('/')
			})
			.catch(error => Swal.fire({icon: 'error', text: error.response.data}))
	}

	function searchOptions() {
		if (label === 'disciplinas') {
			const disciplines = [];

			terms.map((term) =>
				term.disciplines.map((d) => disciplines.push(d.name))
			);
			return disciplines;
		}

		return teachers.map((teacher) => teacher.teacherName);
	}

	function searchedDiscipline(name) {
		api.getDisciplinesContent(user, name)
			.then(response => {
				setDiscipline(response.data)
			})
			setSearch(name)
	}

	return (
		<Container>
			<LogoContainer>
				<Logo mainPage={mainPage}/>
				<LogoutRoundedIcon
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					sx={{ fontSize: 40}}
					onClick={handleLogout}
					cursor='pointer'
				/>
				<Menu
					id='basic-menu'
					anchorEl={focus}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button'
					}}>
				</Menu>
			</LogoContainer>
			{label === 'adicionar' ? (
				<Typography
					sx={{
						alignSelf: 'center',
						fontSize: 24,
						fontFamily: 'Poppins',
						fontWeight: '500',
						letterSpacing: 0.15,
						color: 'rgba(0, 0, 0, 0.8)',
						marginRight: 15,
					}}
				>
					Adicione uma Prova
				</Typography>
			) : (
				<Autocomplete
					sx={{ width: 700, alignSelf: 'center', marginRight: 13 }}
					freeSolo
					options={searchOptions()}
					onInputChange={(e, value) => {
						setSearch(value);
						searchedDiscipline(value);
					}}
					renderInput={(params) => (
						<TextField {...params} label={`Procure por ${label}`} />
					)}
				/>
			)}
		</Container>
	)
}

const LogoContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin: 0;
	justify-content: space-between;
`;

const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
	height: 250px;
	width: 100%;
	padding: 55px 55px 25px;
 border-bottom: 1px solid #C4C4C4;
 .MuiTextField-root {
     align-self: center;
 }
`;

export default Header;