function generatePowerballNumbers() {
  const mainNumbers = [];
  while(mainNumbers.length < 5){
    const num = Math.floor(Math.random() * 69) + 1;
    if(!mainNumbers.includes(num)) mainNumbers.push(num);
  }

  const powerball = Math.floor(Math.random() * 26) + 1;

  document.getElementById('numbers').innerHTML = `
    Main Numbers: <span class="main">${mainNumbers.join(', ')}</span> 
    | Powerball: <span class="powerball">${powerball}</span>
  `;
}

document.getElementById('generateBtn').addEventListener('click', generatePowerballNumbers);

// Generate numbers on page load
generatePowerballNumbers();
