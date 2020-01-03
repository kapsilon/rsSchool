//Solution for rsSchool Task "Brackets" https://github.com/Shastel/brackets

module.exports = function check(str, bracketsConfig) {
    //Brackets are always twins
    let bracketsLength = str.length;
    if (!Number.isInteger(bracketsLength / 2)) {
        return false;
    }

    //Iteration of string
    let startWhile = true;
    while ((str.length > 1) & startWhile) {
        let lastStr = str;
        let pairedBrackets;

        //Iteration of brackets
        for (let i = 0; i < bracketsConfig.length; i++) {
            pairedBrackets = bracketsConfig[i][0] + bracketsConfig[i][1];
            str = str.replace(pairedBrackets, "");
        }

        //Stop iteration when string have not changed
        if (str == lastStr) {
            startWhile = false;
        }
    }
    //Determine residue of string
    if (str.length == 0) {
        return true;
    } else {
        return false;
    }
};
