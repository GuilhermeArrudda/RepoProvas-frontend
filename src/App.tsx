import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/login.tsx/Login';
import SignUp from './Pages/sign-up.tsx/SignUp';

function App() {
  return (
			<BrowserRouter>
				<Routes>
				<Route path="/" element={<Login/>} />
				<Route path="/sign-up" element={<SignUp/>} />
				</Routes>
			</BrowserRouter>
		);
}

export default App;
