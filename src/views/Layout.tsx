import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ILayoutProps {
    children: React.ReactNode | React.ReactNode[]
}

const Layout = (props: ILayoutProps) => {
    const { children } = props;
    return (
        <div className="layout">
            <div className="sidebar">
                <Link to="/">Foo</Link>
                <Link to="/bar">Bar</Link>
            </div>
            <div className="body">
                {children}
            </div>
        </div>
    )
}

export default Layout;