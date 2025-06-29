async function scanToken() {
  const address = document.getElementById("tokenAddress").value.trim();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Scanning...";

  if (!address) {
    resultDiv.innerHTML = "Please enter a valid token address.";
    return;
  }

  try {
    const response = await fetch(`https://public-api.birdeye.so/defi/token_metadata?address=${address}`, {
      headers: {
        "X-API-KEY": "ff6f3604fb644a89a984b41f9f1f3871"
      }
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();
    const token = data.data;

    resultDiv.innerHTML = `
      <p><strong>Name:</strong> ${token.name || "Unknown"}</p>
      <p><strong>Symbol:</strong> ${token.symbol || "Unknown"}</p>
      <p><strong>Price:</strong> $${token.price?.toFixed(6) || "N/A"}</p>
      <p><strong>Decimals:</strong> ${token.decimals || "N/A"}</p>
      <p><strong>Address:</strong> ${address}</p>
    `;
  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = "Failed to retrieve token data. Please check the token address.";
  }
}