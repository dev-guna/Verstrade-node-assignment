function chkBalancedstring(stringValue) {
    let charsObjCounts = {};
    for (const charVal of stringValue) {
        charsObjCounts[charVal] = (charsObjCounts[charVal] || 0) + 1;
        //console.log('charsObjCounts',charsObjCounts)
    }
    const counts = Object.values(charsObjCounts);
    return counts.length === 2 && counts[0] === counts[1];
}


function getBalancedSubstrings(S) {
    const output = [];
    for (let i = 0; i < S.length; i++) {
        for (let j = i + 2; j <= S.length; j++) {
            const substring = S.substring(i, j);
            if (chkBalancedstring(substring)) output.push(substring);
        }
    }
    const maximumLength = output.reduce((max, str) => Math.max(max, str.length), 0);
    //console.log('maximumLength',maximumLength)
    return output.filter(str => str.length === maximumLength);
}

console.log(getBalancedSubstrings("cabbacc"));
