import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Logo from '../../assets/mtn_logo.png';

import {
    NavigationContainer,
    LogoContainer,
    LogoImg,
    NavTitle,
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
                <NavTitle className="f1">Wild Places</NavTitle>
                <NavLinks>
                    <NavLink to='/'>
                        Map
                    </NavLink>
                    <NavLink to='/home'>
                        Home
                    </NavLink>
                    <NavLink to='/auth'>
                        Sign In
                    </NavLink>
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;