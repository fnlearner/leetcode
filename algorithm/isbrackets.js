var isValid = function (s) {
    if (!s) {
        return true;
    }
    let map = [];
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            map.push(s[i])
        } else {
            let top = map.pop();
            if (ch == ')' && top != '(') return false;
            if (ch == '}' && top != '{') return false;
            if (ch == ']' && top != '[') return false;

        }
    }

    return !map.length;
};