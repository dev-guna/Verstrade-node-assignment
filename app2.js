function chkBalancedstring(stringValue) {
    let charsObjCounts = {};
    for (const charVal of stringValue) {
        charsObjCounts[charVal] = (charsObjCounts[charVal] || 0) + 1;
        //console.log('charsObjCounts',charsObjCounts)
    }
    const counts = Object.values(charsObjCounts);
    return counts.length === 2 && counts[0] === counts[1];
}


function resolveBalancedSubstrings(inputStr) {
    const output = [];
    for (let i = 0; i < inputStr.length; i++) {
        for (let j = i + 2; j <= inputStr.length; j++) {
            const substring = inputStr.substring(i, j);
            if (chkBalancedstring(substring)) output.push(substring);
        }
    }
    const maximumLength = output.reduce((max, str) => Math.max(max, str.length), 0);
    //console.log('maximumLength',maximumLength)
    return output.filter(str => str.length === maximumLength);
}

console.log(resolveBalancedSubstrings("cabbacc"));

