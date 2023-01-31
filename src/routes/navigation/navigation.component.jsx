import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <div>
                <div>
                    <a href='/'>
                        Home
                    </a>
                    &nbsp;
                    <a href='/map'>
                        Map
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