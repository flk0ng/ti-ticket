import {Route, Routes} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { FullScreenLoader } from '../layouts/FullScreenLoader';

const HomeUser = lazy(() => import('../pages/User/HomeUser'));
const ListUser = lazy(() => import('../pages/User/ListUser'));
const AddUser = lazy(() => import('../pages/User/AddUser'));

//LLamar las rutass que sean necesitadas


export const UserRoutes = () => {
    return (
        <Suspense fallback={<FullScreenLoader/>}>
        <Routes>
            <Route path="/" element={<HomeUser/>} />
            <Route path="/list" element={<ListUser/>} />
            <Route path="/add" element={<AddUser/>} />
           {/* <Route path="/edit/:id" element={<AddUser/>} />*/}
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        </Suspense>
    );
}