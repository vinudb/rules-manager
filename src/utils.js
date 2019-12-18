export const operators = ["<", ">", "<=", ">=", "=", "!="];

export const parameters = [
    {
        parameter: "Rental Amount In $",
        regex: "^\\d{1,}(\\.\\d{0,2})?$" 
    },
    {
        parameter: "Rental Tenure In Months",
        regex: "^\\d{1,}?$"  
    },
    {
        parameter: "Rental Item",
        regex: "^[a-z0-9]+$" 
    },
    {
        parameter: "Customer Age",
        regex: "^0*(?:[1-9][0-9]?|100)$" 
    },
    {
        parameter: "Customer Zipcode",
        regex: "^[0-9]+$"
    }
]