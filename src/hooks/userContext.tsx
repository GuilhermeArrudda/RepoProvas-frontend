import { useContext } from 'react';
import UserContext from '../contexts/userContext';

export default function useAuth() {
	return useContext(UserContext)
}