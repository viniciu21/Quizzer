import React from 'react';

import { Link } from 'react-router-dom';

const InicialPage = () => {
    return (
        <div>
            <Link to="/signin"> Signin</Link>
            <Link to="/signup"> Signup</Link>
        </div>
    )
}

export default InicialPage;