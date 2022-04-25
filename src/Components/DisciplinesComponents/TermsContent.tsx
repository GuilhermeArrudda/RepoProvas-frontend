import { useState, useEffect } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Link } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as api from "../../services/api";
import useAuth from "../../hooks/userContext";

function TermsContent() {
	const [content, setContent] = useState([])
	const { user } = useAuth()

	useEffect(() => {
		api.getTermsContent(user)
			.then((response) => {
				setContent(response.data)
			})
	}, [user])


	return (
		<>
			{content.map((term: any) => (
				<Accordion key={term.id}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						{term.termName}º Período
					</AccordionSummary>
					<AccordionDetails>
						{term.termTests.map((test: any) => (
							<Accordion key={term.id}>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									{test.disciplineName}
								</AccordionSummary>
								{test.testsCategory.map(
									(category: any) =>
										category.tests.length !== 0 && (
											<AccordionDetails
												key={category.name}
												sx={{ px: 4 }}
											>
												{category.name}
												<br />
												{category.tests.map((t: any) => (
													<Link
														sx={{
															fontSize: 14,
															fontFamily: 'Poppins',
															color: '#808080',
															cursor: 'pointer',
														}}
														key={category.id}
														href={test.pdfUrl}
														underline='hover'
														target='_blank'
													>
														{t.name} - (
														{t.teachersDisciplines.teachers.name})
														<br />
													</Link>
												))}
											</AccordionDetails>
										)
								)}
							</Accordion>
						))}
					</AccordionDetails>
				</Accordion>
			))}
		</>
	);
}

export default TermsContent