import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './components/AppLayout'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import PostsPage from './components/pages/PostsPage';
import DetailPage from './components/pages/DetailPage';
import NotFound from './components/pages/NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/posts">
                        <Route index element={<PostsPage />} />
                        <Route path=":id" element={<DetailPage />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}