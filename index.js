function telephoneCheck(str) {
    var regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/g;
    if (regex.test(str)) {
        return true;
    }
    return false;
};