import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/userContext';
import HomePage from './Pages/homePage';
import Login from './Pages/login.tsx/Login';
import SignUp from './Pages/sign-up.tsx/SignUp';

function App() {
  return (
			<UserProvider>
				<BrowserRouter>
					<Routes>
					<Route path="/" element={<Login/>} />
					<Route path="/sign-up" element={<SignUp/>} />
					<Route path="home" element={<HomePage/>}/>
					</Routes>
				</BrowserRouter>
				</UserProvider>
		);
}

export default App;
