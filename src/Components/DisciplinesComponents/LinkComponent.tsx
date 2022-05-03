import { Box, Link, Typography } from "@mui/material";
import { errorModal } from "../../factories/modal";
import useAuth from "../../hooks/userContext";
import * as api from "../../services/api"

function LinkComponent({ tests, setUpdate }: any) {
	const { user } = useAuth()

	function updateViews(id: any) {
		api.updateViews(user, id)
			.then((response) => {
				setUpdate(true)
				setUpdate(false)
			})
			.catch((error) => {
				errorModal(error)
			})
	}

	return tests.map((t: any) => (
		<Box
			key={t.id}
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}
			>
				<Link
					sx={{
						fontSize: 14,
						fontFamily: 'Poppins',
						color: '#808080',
						cursor: 'pointer'
					}}
					key={t.name}
					href={t.pdfUrl}
					underline='hover'
					target='_blank'
					rel='noopener'
					onClick={() => updateViews(t.id)}
				>
					{t.name} - 
					({t.teachersDisciplines.disciplines.name})
					<br/>
				</Link>
				<Typography
					sx={{
						fontSize: 14,
						fontFamily: 'Poppins',
						color: '#808080'
					}}
				>
					{t.views} views
				</Typography>
			</Box>
	))
}

export default LinkComponent