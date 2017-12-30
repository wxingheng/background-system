/**
 * Created by roger on 29/12/2017.
 */
import React, { Component } from 'react';

import PropTypeExample from './PropTypeExample';

class ExampleContainer extends Component {
    render () {
        return <PropTypeExample
            optionalObjectOf = {{a: 1, b: 2}}
            custom = 'matchme'
            customArrayProp = {['matchme', 'matchme', 'matchme']}/>
    }
}

export default ExampleContainer;