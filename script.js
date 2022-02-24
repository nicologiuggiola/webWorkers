const primeWorker = new Worker('./worker.js');
primeWorker.addEventListener('message', messageReceived)
let message = {operation: "prime", numberToReach: 1000000}
let message1 = {operation: "sum", numberToReach: 1000000}
primeWorker.postMessage(message)
let loader = document.getElementById('loader');
loader.style.display = 'inline-block';

function messageReceived(event) {
    loader.style.display = 'none';
    if (event.data.operation === 'prime') {
        let primeToNumber = event.data.result;
        let par = document.getElementById('prime-numbers')
        for (const prime of primeToNumber) {
            const node = document.createTextNode(prime + ' ');
            par.appendChild(node);
        }
    } else {
        let par = document.getElementById('prime-numbers')
        let sum = event.data.result
        const node = document.createTextNode(sum)
        par.appendChild(node)
    }
    
}