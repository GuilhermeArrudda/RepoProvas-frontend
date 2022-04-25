import { useEffect, useState } from 'react';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Link
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as api from "../../services/api"
import useAuth from '../../hooks/userContext';

function TeachersContent() {
	const [content, setContent] = useState([]);
	const { user } = useAuth();

	useEffect(() => {
		api.getTeachersContent(user)
			.then((response) => {
			setContent(response.data);
		});
	}, [user]);

	return (
		<>
			{content.map((content: any) => (
				<Accordion key={content.id}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						{content.instructorName}
					</AccordionSummary>
					{content.categories.map(
						(category: any) =>
							category.tests.length !== 0 && (
								<AccordionDetails sx={{ px: 4 }} key={category.id}>
									{category.name}
									<br />
									{category.tests.map((test: any) => (
										<Link
											sx={{
												fontSize: 14,
												fontFamily: 'Poppins',
												color: '#808080',
												cursor:'pointer'
											}}
											key={category.id}
											href={test.pdfUrl}
											underline='hover'
											target='_blank'
										>
											{test.name} - (
											{test.teachersDisciplines.disciplines.name})
										</Link>
									))}
								</AccordionDetails>
							)
					)}
				</Accordion>
			))}
		</>
	);
}

export default TeachersContent;