/**
 * Created by roger on 25/12/2017.
 */
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

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

class BasicExample extends Component {
    constructor() {
        super();
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen(e) {
        let patent = e.target.parentElement;

        if (patent.className.indexOf('menu-close') > -1) {
            patent.className = patent.className.replace(/menu-close/g, 'menu-open');
        } else {
            patent.className = patent.className.replace(/menu-open/g, 'menu-close');
        }
    }

    

    render() {
        return (
            <Router>
                <div>
                    <div className="menu-container">
                        <ul className="menu">
                            <li className="menu-submenu menu-close">
                                <div className="menu-submenu-title" onClick={this.handleOpen}>
                                <span>
                                    <i className="fa fa-life-ring"></i>
                                    <span className="ml-10"><Link to="/">Home</Link></span>
                                </span>
                                    <i className="fa fa-chevron-down menu-submenu-arrow"></i>
                                </div>
                                <ul className="ant-menu-sub">
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/topics">Topics</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        )
    }
}
export default BasicExample;