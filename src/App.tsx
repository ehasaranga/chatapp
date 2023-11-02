import { Routes, Route } from 'react-router-dom'
import DashboardPage from './views/Dashboard/DashboardPage'
import ErrorPage from './views/Error/ErrorPage'
import LoginPage from './views/Login/LoginPage'
import RegisterPage from './views/Register/RegisterPage'
import { AppContextProvider } from './store/AppContext'
import { PrivateLayout } from './components/PrivateLayout/PrivateLayout'
import { LoginRedirect } from './components/LoginRedirect/LoginRedirect'

function App() {

	return (

		<AppContextProvider>

			<div className="App">

				<Routes>

					<Route element={<PrivateLayout />}>

						<Route path="/" element={<DashboardPage />} />

					</Route>


					<Route element={<LoginRedirect />}>

						<Route path="/login" element={<LoginPage />} />

						<Route path="/register" element={<RegisterPage />} />

					</Route>

					<Route path="*" element={<ErrorPage />} />

				</Routes>

			</div>

		</AppContextProvider>
	)
}

export default App
