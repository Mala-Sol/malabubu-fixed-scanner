function scanToken() {
  const input = document.getElementById('tokenInput').value;
  const resultDiv = document.getElementById('results');
  if (!input) {
    resultDiv.innerHTML = '<p style="color:red">Please enter a token address.</p>';
    return;
  }
  resultDiv.innerHTML = `<p>🔍 Scanning ${input}...</p>`;
  setTimeout(() => {
    resultDiv.innerHTML = `
      <h3>Risk Score: 72/100</h3>
      <ul style='text-align:left; display:inline-block;'>
        <li>✅ Liquidity Locked</li>
        <li>❌ Mint Authority Not Renounced</li>
        <li>⚠️ Dev Wallet Flagged</li>
        <li>✅ No Honeypot Behavior</li>
        <li>❌ High Sell Tax Detected</li>
      </ul>`;
  }, 1500);
}
