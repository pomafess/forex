import React from 'react';
import {Header} from './components/Header/Header'
import {MainPage} from './pages/MainPage'
import {Footer} from './components/Footer/Footer'
import { Modal } from './shared/Modal/Modal'
import { Loader } from './shared/Loader/Loader';
import { useSelector } from 'react-redux';

import './App.scss'

export const App = () => {
    const loading = useSelector((state) => state.common.isLoading);

    return (
        <div >
            <Header title={'Корм для котов и других животных'}/>
            <main>
                <MainPage/>
            </main>
            <Footer />
            <Modal />
            <Loader open={loading}/>
        </div>
    )
}
