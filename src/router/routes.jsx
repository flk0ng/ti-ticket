import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import  StructureLayouts  from '../layouts/StructureLayouts';
import { FullScreenLoader } from '../layouts/FullScreenLoader';
import { UserRoutes } from './UserRoutes';


const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));

const Contact = lazy(() => import('../pages/Contact'));

function AppRoutes() {
    return (
            <Suspense fallback={<FullScreenLoader/>}>
            <Routes>
                <Route element={<StructureLayouts />} >
                    <Route index path="/" element ={<Home/>} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path='/users/*' element={<UserRoutes/>} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Route>
            </Routes>
            </Suspense>

    );
}

export default AppRoutes;