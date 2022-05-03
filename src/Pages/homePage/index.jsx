import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '../../Components/DisciplinesComponents/Container';
import Button from '../../Components/DisciplinesComponents/Button';
import Header from '../../Components/DisciplinesComponents/Header';
import TermsContent from '../../Components/DisciplinesComponents/TermsContent';
import TeachersContent from '../../Components/DisciplinesComponents/TeachersContent';
import * as api from '../../services/api';
import useAuth from '../../hooks/userContext';
import { errorModal } from '../../factories/modal';
import AddProveComponent from '../../Components/DisciplinesComponents/AddProveComponent';

function HomePage() {
	const [value, setValue] = useState('disciplinas');
	const [termsContent, setTermsContent] = useState([]);
	const [teachersContent, setTeachersContent] = useState([]);
	const [discipline, setDiscipline] = useState([]);
	const [search, setSearch] = useState('');
	let navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		api.validateToken(user)
		.then((response) => {
		}).catch(err => {
			errorModal('You must to be logged in to access this page')
			navigate('/');
		})
	});

	return (
		<Box>
			<Header 
				mainPage={true}
				label={value}
				terms={termsContent}
				teachers={teachersContent}
				setSearch={setSearch}
				setDiscipline={setDiscipline} />
			<Container>
				<Button value={value} setValue={setValue} setSearch={setSearch}/>
				{value === 'disciplinas' && (
					<TermsContent
						setTermsContent={setTermsContent}
						termsContent={termsContent}
						search={search}
						discipline={discipline}
					/>
				)}
				{value === 'instrutores' && (
					<TeachersContent
						setTeachersContent={setTeachersContent}
						teachersContent={teachersContent}
						search={search}
					/>
				)}
				{value === 'adicionar' && <AddProveComponent setValue={setValue} />}
			</Container>
			</Box>
	);
}

export default HomePage;