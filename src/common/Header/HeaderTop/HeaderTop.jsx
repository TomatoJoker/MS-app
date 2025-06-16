import React from 'react';
import Search from "@/ui/Search/index.js";
import HeaderProfile from "@/common/Header/HeaderProfile/index.js";
import './header-top.scss';

const HeaderTop = () => {
    const header = "header-top";

    return (
        <div className={ `${header}` }>
            <div className={`${header}__search-wrapper container`}>
                <Search/>
            </div>
            <HeaderProfile className={ `${header}__profile-menu` }/>
        </div>
    );
};

export default HeaderTop;