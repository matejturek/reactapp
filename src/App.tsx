import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Faq from "./components/Faq";
import { Provider } from 'react-redux'
import store from './store/store'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="faq" element={<Faq />}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
