import { Routes, Route } from 'react-router-dom'
import PageNotAllowed from '../pages/PNA';
import PNF from '../pages/PNF';
// import ProtectedRoute from './ProtectedRoute';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MarketingPage from '../components/MarketingPage';


export default function AppRoutes() {

    return (
        <>
            <Routes>
                <Route path="/*" element={<PNF />} />
                <Route path='/login' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                {/* <Route path='/userinfo' >
                    <Route path=':id' element={<ProtectedRoute><Theme component={<UserInfoEdit />} /></ProtectedRoute>} />
                </Route> */}
                <Route path='/' element={<MarketingPage />}/>
                {/* <Route path='/profile' element={<ProtectedRoute><Theme component={<Profile />} /></ProtectedRoute>} /> */}
                <Route path='/pna' element={<PageNotAllowed />} />
            </Routes>
        </>
    )
}
