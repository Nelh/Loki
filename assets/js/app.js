import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';

import '../scss/app.scss';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/:id?" component={Home} />
            </BrowserRouter>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));