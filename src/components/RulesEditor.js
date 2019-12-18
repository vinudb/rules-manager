import React from 'react';
import { parameters, operators } from '../utils';

const RulesEditor = (props) => {
    return (
        <div>
            <select
                className="select"
                onChange={(e) =>
                    props.onParameterChange(
                        e.target.value,
                        e.target.childNodes[e.target.selectedIndex].getAttribute('data-regex'),
                        props.index)}
                value={props.rule.parameter}>
                <option value="">Select Parameter</option>
                {
                    parameters.map((item, index) =>
                        <option data-regex={item.regex} value={item.parameter} key={index}>{item.parameter}</option>
                    )
                }
            </select>

            <select
                className="select"
                onChange={(e) => props.onOperatorChange(e.target.value, props.index)}
                value={props.rule.operator}>
                <option value="">Select Operator</option>
                {
                    operators.map((operator, index) =>
                        <option value={operator} key={index}>{operator}</option>
                    )
                }
            </select>

            <input
                className="text-input"
                type="text"
                value={props.rule.value}
                placeholder="Enter Value"
                onChange={(e) => props.onValueChange(e.target.value, props.index)} />
        </div>
    );
}

export default RulesEditor;