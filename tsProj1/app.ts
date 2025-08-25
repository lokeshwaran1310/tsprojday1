function calculate(op: string): void {
    const num1 = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
    const num2 = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
    let result: String|number;
    
    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers';
    } else {
        switch(op) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'; break;
            default: result = 'Invalid operation';
        }
    }
    
    (document.getElementById('result') as HTMLElement).textContent = 'Result: ' + result;
}
