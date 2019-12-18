import React from 'react';
import RulesEditor from './RulesEditor';
import RulesList from './RulesList';
import RulesEditorButton from './RulesEditorButtons';
import { fetchRulesList, addNewRule, deleteRule } from '../apiCalls';
import { trackPromise } from 'react-promise-tracker';
import Loading from './Loading';

class RulesManagerApp extends React.Component {
    ruleInit = {
        parameter: "",
        operator: "",
        value: "",
        regex: ""
    }

    state = {
        rules: [this.ruleInit],
        rulesList: [],
        error: ""
    }

    componentDidMount() {
        trackPromise(
            fetchRulesList().then((rulesList) => this.setState({ rulesList }))
        );
    }

    onParameterChange = (parameter, regex, index) => {
        let rule = this.state.rules[index];
        rule = { ...rule, parameter, regex }
        const rules = this.state.rules.map((item, i) => i === index ? rule : item);
        this.setState({ rules, error: "" })
    }

    onOperatorChange = (operator, index) => {
        let rule = this.state.rules[index];
        rule = { ...rule, operator }
        const rules = this.state.rules.map((item, i) => i === index ? rule : item)
        this.setState({ rules, error: "" })
    }

    onValueChange = (value, index) => {
        let rule = this.state.rules[index];
        if (!rule.parameter) {
            return this.setState({ error: "Please select a parameter first before setting value" })
        }
        const pattern = new RegExp(rule.regex);
        if (!value || (pattern.test(value))) {
            rule = { ...rule, value }
            const rules = this.state.rules.map((item, i) => i === index ? rule : item)
            this.setState({ rules, error: "" })
        }
    }

    onAppendClick = () => {
        this.state.rules.every((rule) => rule.parameter && rule.operator && rule.value) ?
            this.setState({ rules: [...this.state.rules, this.ruleInit] }) :
            this.setState({ error: "Please fill all fields before appending new rule" })
    }

    onSaveClick = () => {
        this.state.rules.every((rule) => rule.parameter && rule.operator && rule.value) ?
            trackPromise(
                addNewRule(this.state.rules).then((data) =>
                    this.setState({
                        rulesList: [...this.state.rulesList, { ...data }],
                        rules: [this.ruleInit]
                    }))) :
            this.setState({ error: "Please fill all fields before saving" })
    }

    onDeleteClick = (index) => trackPromise(deleteRule(index).then(() =>
        this.setState({ rulesList: this.state.rulesList.filter((item, i) => !(item.id === index)) }))
    )

    onEditClick = (index) => deleteRule(index).then(() =>
        this.setState({
            rules: this.state.rulesList.filter((item) => (item.id === index))[0].rule,
            rulesList: this.state.rulesList.filter((item, i) => !(item.id === index))
        }))

    render() {
        return (
            <React.Fragment>
                <div className="app-container">
                    {
                        this.state.rules.map((rule, index) => {
                            const editor = <RulesEditor
                                key={index}
                                index={index}
                                rule={rule}
                                onParameterChange={this.onParameterChange}
                                onOperatorChange={this.onOperatorChange}
                                onValueChange={this.onValueChange} />
                            return (
                                index > 0 ? <div key={index}>And {editor}</div> : <div key={index}>{editor}</div>
                            );
                        })
                    }
                    <div className="error">{this.state.error}</div>
                    <RulesEditorButton
                        onSaveClick={this.onSaveClick}
                        onAppendClick={this.onAppendClick} />

                    <RulesList
                        rulesList={this.state.rulesList}
                        onDeleteClick={this.onDeleteClick}
                        onEditClick={this.onEditClick}
                        onParameterChange={this.onParameterChange}
                        onOperatorChange={this.onOperatorChange}
                        onValueChange={this.onValueChange} />
                </div>
            </React.Fragment>
        );
    }
}

export default RulesManagerApp;