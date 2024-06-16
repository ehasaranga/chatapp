import { Routes, Route } from 'react-router-dom'
import DashboardPage from './views/Dashboard/DashboardPage'
import ErrorPage from './views/Error/ErrorPage'
import LoginPage from './views/Login/LoginPage'
import RegisterPage from './views/Register/RegisterPage'
import { PrivateLayout } from './components/PrivateLayout/PrivateLayout'
import { LoginRedirect } from './components/LoginRedirect/LoginRedirect'
import { Provider } from 'react-redux'
import { store } from '@/state/store'

function App() {

	return (

		<Provider store={store} >

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

		</Provider>
	)
}

export default App
