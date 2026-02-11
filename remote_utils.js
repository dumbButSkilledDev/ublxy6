async function fetchWrapper(url, options = {}) {
  try {
    const response = await fetch(url, options);

    // Handle non-2xx HTTP responses
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    // Auto-parse JSON if possible
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }

    // Fallback to text
    return await response.text();
  } catch (error) {
    // Network errors, CORS issues, etc.
    console.error("Fetch error:", error);
    throw error;
  }
}

function loadUblxyScriptRemote(url) {
    var fileData = await fetchWrapper(url);
    var lines = fileData.split("\n");

    for (var i = 0; i < lines.length; i++) {
        handleLine(lines[i]);
    }
}

function dymanicScriptLoad(url) {
    eval(await fetchWrapper(url));
}
