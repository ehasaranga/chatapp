import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import DashboardPage from './views/Dashboard/DashboardPage'
import ErrorPage from './views/Error/ErrorPage'
import LoginPage from './views/Login/LoginPage'
import RegisterPage from './views/Register/RegisterPage'

function App() {

	// const navigate = useNavigate();

	// useEffect(() => {

	// 	navigate('/login');

	// }, [])

	return (

		<div className="App">

			<Routes>

				<Route path="/" element={<DashboardPage />} />

				<Route path="/login" element={<LoginPage />} />

				<Route path="/register" element={<RegisterPage />} />

				<Route path="*" element={<ErrorPage />} />

			</Routes>

		</div>
	)
}

export default App
