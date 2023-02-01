import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Logo from '../../assets/evergreenmountains.png';

import {
    NavigationContainer,
    LogoContainer,
    LogoImg,
    NavLinks,
    NavLink
} from './navigation.styles.jsx';

const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <LogoImg src={Logo} alt="Logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/'>
                        Map
                    </NavLink>
                    <NavLink to='/home'>
                        Home
                    </NavLink>
                    <NavLink to='/auth'>
                        Authentication
                    </NavLink>
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;