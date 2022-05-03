import { useEffect } from 'react';
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

	useEffect(() => {
		api.getTeachersContent(user)
			.then((response) => {
			setTeachersContent(response.data);
		});
	}, [user, setTeachersContent]);

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
						/>
					</Accordion>
				))}
				</>
	)
}
export default TeachersContent;