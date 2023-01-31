import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <div>
                <div>
                    <a href='/'>
                        Map
                    </a>
                    &nbsp;
                    <a href='/home'>
                        Home
                    </a>
                    &nbsp;
                    <a href='/auth'>
                        Authentication
                    </a>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;