import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage'
import AppLayout from './components/AppLayout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}