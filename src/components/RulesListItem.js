import React from 'react';

const RulesListItem = (props) => {
    let ruleString = "";
    return (
        <div className="listItem">
            {
                props.rules.forEach((rule, index) =>
                    ruleString = index > 0 ?
                        <div>
                            <div>{ruleString}</div>
                            And
                            <div>{`${rule.parameter} ${rule.operator} ${rule.value}`}</div>
                        </div>
                        :
                        `${rule.parameter} ${rule.operator} ${rule.value}`)
            }
            {
                <div>
                    <span className="listItemText">{ruleString}</span>
                    <div className="listButtonContainer">
                        <button className="button listButton" onClick={() => props.onEditClick(props.index)}>Edit</button>
                        <button className="button listButton" onClick={() => props.onDeleteClick(props.index)}>Delete</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default RulesListItem;