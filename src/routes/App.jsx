import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import SendEmail from '@pages/SendEmail';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';

const App = () => {
  const initialState = useInitialState();// <=== const { state, addToCart } = useInitialState();
  return (
    // [1] Create a context provider with the initial state 
    <AppContext.Provider value={initialState}>
      <BrowserRouter basename='/react-shop'>
        {/* <Layout> */}
        <Routes>
          <Route element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/password-recovery' element={<PasswordRecovery />} />
            <Route path='/send-email' element={<SendEmail />} />
            <Route path='/new-password' element={<NewPassword />} />
            <Route path='/account' element={<MyAccount />} />
            <Route path='/signup' element={<CreateAccount />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/orders' element={<Orders />} />
          </Route>
          <Route path='/*' element={<NotFound />} />  // 404
        </Routes>
        {/* </Layout> */}
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App