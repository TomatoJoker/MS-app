import React, {useRef, useState} from 'react';
import UseClickOutside from '@/utils/useClickOutside.jsx';
import {Link} from "react-router-dom";
import {clsx} from "clsx";
import './header-profile.scss';

const HeaderProfile = ({className}) => {
    const [profileSettings, setProfileSettings] = useState(false);
    const profileMenuWrapperRef = useRef(null);
    const headerProfile = `header-profile`;

    const handleClick = () => {
        setProfileSettings(!profileSettings);
    }

    UseClickOutside(
        profileMenuWrapperRef,
        () => setProfileSettings(false)
    )

    return (
        <div ref={profileMenuWrapperRef} className={clsx(headerProfile, true && className)}>
            <div onClick={handleClick} className={ `${headerProfile}__avatar` }>
                <img src="" alt=""/>
            </div>
            {profileSettings && (
                <ul className={ `${headerProfile}__menu` }>
                    <li className={`${headerProfile}__menu-item`}><Link to="/my-profile">Налаштування профілю</Link></li>
                </ul>
            )}
        </div>
    );
};

export default HeaderProfile;