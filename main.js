document.addEventListener("DOMContentLoaded", function () {
  const scanBtn = document.getElementById("scanButton");
  const resultBox = document.getElementById("resultBox");

  scanBtn.addEventListener("click", async function () {
    const address = document.getElementById("tokenInput").value.trim();
    if (!address) {
      resultBox.innerHTML = "⚠️ Please enter a token address.";
      return;
    }

    resultBox.innerHTML = "🔍 Scanning token...";

    try {
      const response = await fetch(`https://public-api.birdeye.so/public/token/${address}`, {
        headers: {
          "X-API-KEY": "ff6f3604fb644a89a984b41f9f1f3871"
        }
      });

      const data = await response.json();

      if (!data || !data.data) {
        resultBox.innerHTML = "❌ No data found for that token.";
        return;
      }

      const token = data.data;

      resultBox.innerHTML = `
        ✅ <strong>Name:</strong> ${token.name || "Unknown"}<br>
        💲 <strong>Price:</strong> $${token.price || "N/A"}<br>
        🔢 <strong>Symbol:</strong> ${token.symbol || "N/A"}<br>
        📦 <strong>Mint:</strong> ${address}<br>
      `;
    } catch (error) {
      console.error(error);
      resultBox.innerHTML = "🚫 Error fetching token data.";
    }
  });
});
