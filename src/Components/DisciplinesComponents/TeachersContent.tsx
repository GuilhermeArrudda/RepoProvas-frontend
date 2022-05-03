import { useEffect, useState } from 'react';
import {
	Accordion,
	AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as api from "../../services/api"
import useAuth from '../../hooks/userContext';
import AccordionDetailsComponent from './AccordionDetailsComponent';

function TeachersContent({ teachersContent, setTeachersContent, search }: any) {
	const { user } = useAuth();
	const [update, setUpdate] = useState(false)

	useEffect(() => {
		api.getTeachersContent(user)
			.then((response) => {
			setTeachersContent(response.data);
		});
	}, [user, setTeachersContent, update]);

	return (
		<>
			{search !== '' ? 
				teachersContent.filter((t: any) => t.teacherName === search).map((content: any) => (
					<Accordion key={content.id}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						{content.teacherName}
					</AccordionSummary>
					<AccordionDetailsComponent
						categoriesInfo={content.categories}
						setUpdate={setUpdate}
					/>
					</Accordion>
				))
				: teachersContent.map((content: any) => (
					<Accordion key={content.id}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon/>}
						>
							{content.teacherName}
						</AccordionSummary>	
						<AccordionDetailsComponent
							categoriesInfo={content.categories}
							setUpdate={setUpdate}
						/>
					</Accordion>
				))}
				</>
	)
}
export default TeachersContent;