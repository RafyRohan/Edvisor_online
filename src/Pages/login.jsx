import React from 'react';
import LoginNavbar from '../components/navbar/loginNavbar.jsx';
import LoginModal from '../components/loginModal/loginModal.jsx';
import Footer from '../components/footer/footer.jsx';

function Login() {
    return (
        <div>
            <LoginNavbar />
            <LoginModal />
            <Footer />

        </div>
    );
}

export default Login;
