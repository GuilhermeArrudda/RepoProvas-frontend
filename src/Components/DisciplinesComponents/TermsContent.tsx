import { useState, useEffect } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Link, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as api from "../../services/api";
import useAuth from "../../hooks/userContext";

function TermsContent({ setTermsContent, termsContent, search, discipline }: any) {
	const [disciplinesContent, setDisciplinesContent] = useState([])
	const [focus, setFocus] = useState(false)
	const { user } = useAuth()


	const handleChange = (change: any) => (event: any, focus: boolean) => {
		setFocus(focus ? change : false)
	}

	useEffect(() => {
		api.getTermsContent(user)
			.then((response) => {
				setTermsContent(response.data)
			})
	}, [user, setTermsContent])

	function findDisciplines(id: any) {
		api.getDisciplinesById(user, id)
			.then((response) => {
				setDisciplinesContent(response.data)
			})
	}
	console.log(termsContent)


	return (
		<>
			{search === '' ? (
				termsContent.map((term: any) => (
					<Accordion key={term.id}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						{term.number}º Período
					</AccordionSummary>
					<AccordionDetails>
						{term.disciplines.map((discipline: any) => (
							<Accordion 
								key={term.id}
								onClick={() => findDisciplines(discipline.id)}	
								expanded={focus === discipline.id}
								onChange={handleChange(discipline.id)}
							>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									{discipline.name}
								</AccordionSummary>
								{disciplinesContent.map(
									(category: any) =>
										category.tests.length !== 0 && (
											<AccordionDetails
											key={category.name}
											sx={{ px: 4 }}
											>
												{category.name}
												<br />
												{category.tests.map((t: any) => (
													<Box
														key={t.id}
														sx={{
															display: 'flex',
															justifyContent: 'space-between',
															alignItems: 'center'
														}}>
															<Link
																sx={{
																	fontSize: 14,
																	fontFamily: 'Poppins',
																	color: '#808080',
																	cursor: 'pointer',
																}}
																key={t.id}
																href={t.pdfUrl}
																underline='hover'
																target='_blank'
																rel='noopener'
																>
																{t.name} - (
																	{t.teachersDisciplines.teachers.name})
															<br />
													</Link>
													<Typography
														sx={{
															fontSize: 14,
															fontFamily: 'Poppins',
															color: '#808080'
														}}>
															views
														</Typography>
														</Box>
												))}
											</AccordionDetails>
										)
								)}
							</Accordion>
						))}
					</AccordionDetails>
				</Accordion>
				))

			) : (
				<Accordion onClick={() => findDisciplines(discipline.id)}>
					<AccordionSummary expandIcon={<ExpandMoreIcon/>}>
						{discipline.name}
					</AccordionSummary>
					{disciplinesContent.map(
						(category: any) =>
							category.tests.length !== 0 && (
								<AccordionDetails key={category.name} sx={{ px: 4 }}>
									{category.name}
									<br/>
									{category.tests.map((t: any) => (
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
												key={t.id}
												href={t.pdfUrl}
												underline='hover'
												target='_blank'
												rel='noopener'
												>
													{t.name} - (
														{t.teachersDisciplines.teachers.name}
													)
													<br/>
												</Link>
												<Typography
													sx={{
														fontSize: 14,
														fontFamily: 'Poppins',
														color: '#808080'
													}}>
														views
													</Typography>
										</Box>
									))}
								</AccordionDetails>
							)
					)}
				</Accordion>
			)}
		</>
	);
}

export default TermsContent