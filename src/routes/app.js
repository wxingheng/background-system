/**
 * Created by roger on 25/12/2017.
 */
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import PropTypesExample from '../examples/prop_types'
import SyncReactReduxExample from '../examples/sync_react_redux/components'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

const Topics = ({ match }) => (
    <div className="test">
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
);

class BaseRouter extends Component {
    constructor() {
        super();
        this.handleOpen = this.handleOpen.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
        this.routerConfig = [
            {
                header: 'Home',
                items: [
                    {name: 'home', path: '/'},
                    {name: 'about', path: '/about'},
                    {name: 'topics', path: '/topics'}
                ]
            },
            {
                header: 'examples',
                items: [
                    {name: 'PropTypesExample', path: '/examples/propTypes'},
                    {name: 'syncReactReduxExample', path: '/examples/syncReactRedux'},
                ]
            }
        ];
    }

    handleOpen(e) {
        let patent = e.target.parentElement;

        if (patent.className.indexOf('menu-close') > -1) {
            patent.className = patent.className.replace(/menu-close/g, 'menu-open');
        } else {
            patent.className = patent.className.replace(/menu-open/g, 'menu-close');
        }
    }

    handleSelected(e) {
        let target = e.target,
            selectedElement = document.querySelectorAll('.menu-item-selected');

        if (target.className.indexOf('menu-item-selected') < 0.5) {
            Array.from(selectedElement);
            selectedElement.forEach((elem) => elem.className = elem.className.replace(/menu-item-selected/g, '').trim());
            target.className = target.className + ' menu-item-selected';
        }
    }

    render() {
        let router = this.routerConfig.map((elem, index) =>
            <li className="menu-submenu menu-close" key={index}>
                <div className="menu-submenu-title" onClick={this.handleOpen}>
                    <span>
                        <i className="fa fa-life-ring"></i>
                        <span className="ml-10">{elem.header}</span>
                    </span>
                    <i className="fa fa-chevron-down menu-submenu-arrow"></i>
                </div>
                <ul className="menu-sub" style={{height: (elem.items.length * 44) + 'px'}}>
                    {elem.items.map((elementSub, indexSub) => <li key={indexSub}><Link className="menu-sub-item" onClick={this.handleSelected} to={elementSub.path}>{elementSub.name}</Link></li>)}
                </ul>
            </li>
        );

        return (
            <Router>
                <div>
                    <div className="menu-container">
                        <ul className="menu">
                            {router}
                        </ul>
                    </div>

                    <div className="content-container">
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                        <Route path="/examples/propTypes" component={PropTypesExample}/>
                        <Route path="/examples/syncReactRedux" component={SyncReactReduxExample}/>
                    </div>
                </div>
            </Router>
        )
    }
}
export default BaseRouter;