let expression: string = "";

function append(value: string | number): void {
    if (expression === "0") expression = "";
    expression += value;
    document.getElementById("result")!.innerText = expression;
}

function calculate(): void {
    try {
        let result: number = eval(expression);
        document.getElementById("result")!.innerText = result.toString();
        expression = result.toString();
    } catch {
        document.getElementById("result")!.innerText = "Error";
        expression = "";
    }
}

function clearAll(): void {
    expression = "";
    document.getElementById("result")!.innerText = "0";
}

function backspace(): void {
    expression = expression.slice(0, -1);
    document.getElementById("result")!.innerText = expression || "0";
}

function scientific(op: string): void {
    let result: number;
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
    
    document.getElementById("result")!.innerText = result.toString();
    expression = result.toString();
}
