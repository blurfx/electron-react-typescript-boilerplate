import React from 'react';
import { Link } from 'react-router-dom';

const FooView = () => {

    return (
        <div>
            <h3>nothing here</h3>
            <p>just go to <Link to="/bar">Bar</Link></p>
        </div>
    )
};

export default FooView;
