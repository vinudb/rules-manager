import React from 'react';
import RulesListItem from './RulesListItem';

const RulesList = (props) => (
    <div>
        {
            props.rulesList.map((item, index) => {
                return (
                    <div key={index}>
                        <RulesListItem
                            index={item.id}
                            rules={item.rule}
                            key={index}
                            onDeleteClick={props.onDeleteClick}
                            onEditClick={props.onEditClick}
                            onParameterChange={props.onParameterChange}
                            onOperatorChange={props.onOperatorChange}
                            onValueChange={props.onValueChange} />
                    </div>
                );
            })
        }
    </div>
);

export default RulesList;