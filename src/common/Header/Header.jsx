import React from 'react';
import './header.scss';
import Search from "@/ui/Search/index.js";
import HeaderProfile from "@/common/Header/HeaderProfile/HeaderProfile.jsx";
import HeaderTop from "@/common/Header/HeaderTop/HeaderTop.jsx";

const Header = () => {
    const header = "header";

    return (
        <header className={ `${header}` }>
            <HeaderTop/>
        </header>
    );
};

export default Header;