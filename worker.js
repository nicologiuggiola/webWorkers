addEventListener('message', messageReceived);


function messageReceived(event) {
    if (event.data.operation === "prime") {
        let numberToReach = event.data.numberToReach;
        let primeToNumber = calculatePrimeNumbersTo(numberToReach);
        let message = {operation: "prime", result: primeToNumber}
        postMessage(message);
    } else {
        let numberToReach = event.data.numberToReach;
        let sumToNumber = sumNumbersTo(numberToReach);
        let message1 = {operation: "sum", result: sumToNumber}
        postMessage(message1);
    }
}

function calculatePrimeNumbersTo(number) {
    let array = Array.from({length: number - 1}, (v, i) => i + 2);
    return array.reduce((p, c) => p.some(e => c % e === 0) ? p : [...p, c],[]);
}

function sumNumbersTo(number) {
    let result = 0;
    for (let i = 0; i < number; i++) {
        result += i;
    }
    return result;
}