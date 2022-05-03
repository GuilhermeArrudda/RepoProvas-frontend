import { Box, Link, Typography } from "@mui/material";

function LinkComponent({ tests }: any) {

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
					views
				</Typography>
			</Box>
	))
}

export default LinkComponent