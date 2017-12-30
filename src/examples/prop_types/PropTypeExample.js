/**
 * Created by roger on 29/12/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropTypesExample extends Component {
    render () {
        return (
            <div className="alert alert-danger" role="alert">
                <pre style={{color: '#721c24'}}>
                    array bool func number object string symbol<br/>
                    PropTypes.element --- A React element.<br/>
                    PropTypes.instanceOf(Message) --- Message is a element<br/>
                    optionalEnum: PropTypes.oneOf(['News', 'Photos'])<br/>
                    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Message)])<br/>
                    PropTypes.arrayOf(PropTypes.number),<br/>
                </pre>
            </div>
        );
    }
}

PropTypesExample.propTypes = {
    // array bool func number object string symbol
    // PropTypes.element --- A React element.
    // PropTypes.instanceOf(Message) --- Message is a element
    // optionalObjectWithShape: PropTypes.shape({color: PropTypes.string,fontSize: PropTypes.number})<br/>
    // 对象的所有属性值都需要是number类型
    optionalObjectOf: PropTypes.objectOf(PropTypes.number).isRequired,
    // 自定义方法  必须返回一个 Error 在oneOf中不起作用
    custom: function (props, propName, componentName) {
        if (!/matchme/.test(props[propName])) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    },
    customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
        if (!/matchme/.test(propValue[key])) {
            return new Error(
                'Invalid prop `' + propFullName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    })
};

export default PropTypesExample;