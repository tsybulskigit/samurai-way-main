import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://spatie.be/images/medialibrary/1062/react.svg" alt="React logo"/>
        </header>
    );
};

export default Header;