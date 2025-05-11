// Financial Planning & Optimization JS
document.addEventListener('DOMContentLoaded', function() {
  function optimizeCosts() {
    const currentInvestment = parseFloat(document.getElementById('current-investment').value);
    const expectedYield = parseFloat(document.getElementById('expected-yield').value);
    if (!currentInvestment || !expectedYield) {
      alert('Please enter both current investment and expected yield');
      return;
    }
    const costPerKg = currentInvestment / expectedYield;
    const optimizedInvestment = currentInvestment * 0.85;
    const optimizedYield = expectedYield * 1.1;
    const savings = currentInvestment - optimizedInvestment;
    const additionalYield = optimizedYield - expectedYield;
    const resultDiv = document.getElementById('optimization-result');
    resultDiv.innerHTML = `
      <h3 class="font-bold text-green-800 mb-2">Optimization Analysis</h3>
      <p>• Potential Savings: ₹${savings.toLocaleString('en-IN')}</p>
      <p>• Expected Yield Increase: ${additionalYield.toLocaleString('en-IN')} kg</p>
      <p>• New Cost per kg: ₹${(optimizedInvestment/optimizedYield).toFixed(2)}</p>
    `;
    resultDiv.classList.remove('hidden');
  }

  function generateInvestmentPlan() {
    const capital = parseFloat(document.getElementById('available-capital').value);
    const period = parseInt(document.getElementById('investment-period').value);
    if (!capital || !period) {
      alert('Please enter both available capital and investment period');
      return;
    }
    const monthlyInvestment = capital / period;
    const expectedReturn = capital * 1.2;
    const resultDiv = document.getElementById('plan-result');
    resultDiv.innerHTML = `
      <h3 class="font-bold text-green-800 mb-2">Investment Plan:</h3>
      <p>• Monthly Investment: ₹${monthlyInvestment.toLocaleString('en-IN')}</p>
      <p>• Expected Return: ₹${expectedReturn.toLocaleString('en-IN')}</p>
      <p>• ROI: 20%</p>
    `;
    resultDiv.classList.remove('hidden');
  }

  function updateCropSuitability() {
    const soilType = document.getElementById('soil-type').value;
    const climate = document.getElementById('climate').value;
    const water = document.getElementById('water-availability').value;
    if (!soilType || !climate || !water) {
      alert('Please select all parameters');
      return;
    }
    // Example data, you can expand this as needed
    const cropSuitabilityData = {
      'wheat': {soil: ['loamy', 'clay'], climate: ['temperate'], water: ['medium']},
      'rice': {soil: ['clay'], climate: ['tropical', 'subtropical'], water: ['high']},
      'corn': {soil: ['loamy', 'sandy'], climate: ['tropical', 'subtropical'], water: ['medium']}
    };
    const suitableCrops = Object.entries(cropSuitabilityData)
      .filter(([_, req]) =>
        req.soil.includes(soilType) &&
        req.climate.includes(climate) &&
        req.water.includes(water)
      )
      .map(([crop]) => crop);
    const resultsDiv = document.getElementById('suitability-result');
    resultsDiv.innerHTML = suitableCrops.length
      ? suitableCrops.map(crop => `<div class="crop-card"><h4 class="font-bold text-green-700">${crop}</h4><p class="text-sm text-green-600">Suitable for your conditions</p></div>`).join('')
      : '<p>No suitable crops found for the selected conditions</p>';
    resultsDiv.classList.remove('hidden');
  }

  function trackFinances() {
    const start = new Date(document.getElementById('start-date').value);
    const end = new Date(document.getElementById('end-date').value);
    if (!start || !end || start > end) {
      alert('Please select valid date range');
      return;
    }
    const months = [];
    const investments = [];
    const revenues = [];
    const profits = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
      months.push(currentDate.toLocaleString('default', { month: 'short' }));
      investments.push(Math.random() * 50000 + 10000);
      revenues.push(Math.random() * 80000 + 20000);
      profits.push(revenues[revenues.length - 1] - investments[investments.length - 1]);
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    const ctx = document.getElementById('financial-chart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {label: 'Investments', data: investments, borderColor: '#10B981', fill: false},
          {label: 'Revenues', data: revenues, borderColor: '#059669', fill: false},
          {label: 'Profits', data: profits, borderColor: '#047857', fill: false}
        ]
      },
      options: {
        responsive: true,
        scales: {y: {beginAtZero: true}}
      }
    });
    document.getElementById('tracking-result').classList.remove('hidden');
  }

  document.getElementById('optimize-btn').addEventListener('click', optimizeCosts);
  document.getElementById('plan-btn').addEventListener('click', generateInvestmentPlan);
  document.getElementById('analyze-btn').addEventListener('click', updateCropSuitability);
  document.getElementById('track-btn').addEventListener('click', trackFinances);
});
