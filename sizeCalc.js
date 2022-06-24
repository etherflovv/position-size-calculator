const calculate = document.querySelector('.calculate');
const resetBtn = document.querySelector('.reset');

calculate.addEventListener('click', (e) => {
    e.preventDefault();

    let entry = document.getElementById('entry').value;
    let takeProfit = document.getElementById('take-profit').value;
    let stopLoss = document.getElementById('stop-loss').value;
    let portfolioSize = document.getElementById('portfolio-size').value;
    let riskPercent = document.getElementById('risk-percent').value;

    let profit = document.getElementById('profit');
    let loss = document.getElementById('loss');
    let tradeSize = document.getElementById('trade-size');
    let rr = document.getElementById('rr');

    
    tradeSize.value = Math.abs((riskPercent * portfolioSize) / (100 * ( (entry - stopLoss) / entry )));
    profit.value = Math.abs(((takeProfit - entry) / entry) * tradeSize.value);
    loss.value = Math.abs(( (entry - stopLoss) / entry ) * tradeSize.value);
    rr.value = profit.value / loss.value;

    // discountAmt.value = billAmt * percentage / 100;
    // FinalPay.value = billAmt - discountAmt.value;
});

resetBtn.addEventListener('click', () => {
    window.location.reload();
});
