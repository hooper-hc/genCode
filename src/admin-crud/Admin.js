import React from 'react';
import { Link } from 'react-router';

import actions from '../actions';

const Admin = props => (
    <div>
        <h1>Developer tools</h1>
        {props.children}
        <ul>
            <li><Link to="/admin/realities/">Realities</Link></li>
        </ul>
    </div>
);

export default Admin;
