import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';
import Profile from '../pages/profile/home';
import Logout from '../pages/Logout';

export const useRoutes = () => {

    return (
        <Routes>
            <Route index element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />

            <Route element={<PrivateRoute />}>
                <Route path='/profile/home' element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
            </Route>

        </Routes>
    )
}

export default useRoutes