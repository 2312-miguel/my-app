const validate = (value, rules) => {
    console.log(rules)
    let isValid = true;
    for(const rule in rules){
        switch (rule) {
            case 'isRequired' :
                    isValid = isRequired(value);
                break;
            case 'minLength' :
                    isValid = minLength(value, rules[rule]);
                break;
            case 'onlyNumbers' :
                isValid =  onlyNumbers(value);
                break;
        }
        if (!isValid) break ;
    }

    return isValid ? 1 : 0 ;

}


const isRequired = value => {
        if (value !== '') {
            return true;
        }        
        return false;
}
const minLength = (value, minLength) => {
    if (value.length >  minLength) {
            return true;
        }    
        return false
}
const onlyNumbers = value => {
    const number = /^[0-9]*$/gm.test(value);
    if (number) {
            return true;
        }    
    return false;
}

export default validate;


