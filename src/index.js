import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

import store from './store';
import App from './App';
import Core from './core/components/core.jsx';
import Admin from './admin-crud/Admin';
// import ConstellationsContainer from './admin-crud/constellations/Container';
// import ViewConstellations from './admin-crud/constellations/ViewConstellations';
// import EditConstellation from './admin-crud/constellations/EditConstellation';
import RealitiesContainer from './admin-crud/realities/Container';
import ViewRealities from './admin-crud/realities/ViewRealities';
import EditReality from './admin-crud/realities/EditReality';
// import GalaxiesContainer from './admin-crud/galaxies/Container';
// import ViewGalaxies from './admin-crud/galaxies/ViewGalaxies';
// import EditGalaxy from './admin-crud/galaxies/EditGalaxy';
import NotFound from './core/components/NotFound';
import './index.css';

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Core} />
                <Route path="/admin" component={Admin}>
                    <Route path="realities" component={ViewRealities} />
                </Route>
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>),
  document.getElementById('root')
);
