export const fetchRulesList = async ()=>{
    const response = await fetch(`https://fake-restful-api-vinay.herokuapp.com/db`)
    if (response.status === 200) {
        const data = await response.json()
        return data.rulesList
    } else {
        throw new Error('Unable to fetch rules')
    }
}

export const addNewRule = async (rule) =>{
    const response = await fetch(`https://fake-restful-api-vinay.herokuapp.com/rulesList`, {
        method: 'POST',
        body: JSON.stringify({rule: rule}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
    });
    if (response.status === 200 || response.status === 201) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to add new rules')
    }
}

export const deleteRule = async (index)=>{
    const response = await fetch(`https://fake-restful-api-vinay.herokuapp.com/rulesList/${index}`, {
        method: 'DELETE'
    });
    if (response.status === 200 || response.status === 201) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to add new rules')
    }
}