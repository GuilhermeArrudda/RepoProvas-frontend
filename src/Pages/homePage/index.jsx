import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../Components/DisciplinesComponents/Container';
import Button from '../../Components/DisciplinesComponents/Button'
import Header from '../../Components/DisciplinesComponents/Header';
import TermsContent from '../../Components/DisciplinesComponents/TermsContent';
import TeachersContent from '../../Components/DisciplinesComponents/TeachersContent';
import * as api from '../../services/api';
import useAuth from '../../hooks/userContext';

function HomePage() {
	const [value, setValue] = useState('disciplinas');
	let navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		api.validateToken(user)
		.then((response) => {
			console.log(response.data)
		}).catch(err => {
			alert("You must be logged to acess the page!")
			navigate('/');
		})
	});

	return (
		<>
			<Header mainPage={true} />
			<Container>
				<Button value={value} setValue={setValue} />
				{value === 'disciplinas' && <TermsContent />}
				{value === 'instrutores' && <TeachersContent />}
			</Container>
		</>
	);
}

export default HomePage;