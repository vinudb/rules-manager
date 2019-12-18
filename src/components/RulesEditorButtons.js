import React from 'react';

const RulesEditorButton = (props) => (
    <div className="rulesEditorButtonsContainer">
        <button className="button" onClick={props.onAppendClick}>Append a rule</button>
        <button className="button" onClick={props.onSaveClick}>Save</button>
    </div>
);

export default RulesEditorButton;