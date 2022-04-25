import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/userContext";
import * as api from "../../services/api"
import styled from "styled-components";
import Logo from "./logo";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Menu, MenuItem, TextField } from "@mui/material";

function Header() {
	const [anchor, setAnchor] = useState(null)
	const open = Boolean(anchor)
	const { user, logout } = useAuth()
	let navigate = useNavigate()

	const handleClose = () => {
		setAnchor(null)
	}

	const handleLogout = () => {
		api.validateToken(user)
			.then(() => {
				logout()
				navigate('/')
			})
			.catch(error => Swal.fire({icon: 'error', text: error.response.data}))
	}

	return (
		<Container>
			<LogoContainer>
				<Logo/>
				<LogoutRoundedIcon
					sx={{ fontSize: 40, marginLeft: 160 }}
					onClick={handleLogout}
					cursor='pointer'
				/>
				<MenuItem/>
				<Menu
					id='basic-menu'
					anchorEl={anchor}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button'
					}}>
				</Menu>
			</LogoContainer>
			<TextField
				sx={{ width: 464, height: 56 }}
				label='pesquise por disciplina'
			/>
		</Container>
	)
}

const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
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