
let expression = "";
function append(value) {
    if (expression === "0")
        expression = "";
    const operators = ['+', '-', '*', '/'];
    const lastChar = expression.slice(-1);
    
    if (operators.includes(value) && operators.includes(lastChar)) {
        return; 
    }
    
    if (value === '.') {
        const parts = expression.split(/[+\-*/]/);
        const currentNumber = parts[parts.length - 1];
        if (currentNumber.includes('.')) {
            return; 
        }
    }
    
    expression += value;
    document.getElementById("result").innerText = expression;
}
function calculate() {
    try {
        let result = eval(expression);
        document.getElementById("result").innerText = result.toString();
        expression = result.toString();
    }
    catch {
        document.getElementById("result").innerText = "Error";
        expression = "";
    }
}
function clearAll() {
    expression = "";
    document.getElementById("result").innerText = "0";
}
function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById("result").innerText = expression;
}
function scientific(op) {
    let result;
    let val = parseFloat(expression) || 0;
    switch (op) {
        case 'sin':
            result = Math.sin(val * Math.PI / 180);
            break;
        case 'cos':
            result = Math.cos(val * Math.PI / 180);
            break;
        case 'tan':
            result = Math.tan(val * Math.PI / 180);
            break;
        case 'log':
            result = Math.log10(val);
            break;
        case 'ln':
            result = Math.log(val);
            break;
        case 'pow':
            result = Math.pow(val, 2);
            break;
        case 'exp':
            result = Math.exp(val);
            break;
        case 'sqrt':
            result = Math.sqrt(val);
            break;
        case 'pi':
            result = Math.PI;
            break;
        default:
            result = 0;
    }
    document.getElementById("result").innerText = result.toString();
    expression = result.toString();
}
//# sourceMappingURL=index.js.map