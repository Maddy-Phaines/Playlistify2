import pkceChallenge from "pkce-challenge";

// We’ll use pkceChallenge to generate the code verifier and code challenge.

// Generates a code verifier and its corresponding code challenge
const generatePKCE = () => {
  const { code_verifier, code_challenge } = pkceChallenge();
  localStorage.setItem("code_verifier", code_verifier); // Store verifier for later use
  return code_challenge;
};

// Redirects user to Spotify Authorization URL
const redirectToSpotify = () => {
  const clientId = "1fa60dad101b4603a88a79b8ab5ff066";
  const redirectUri = "http:/localhost:5173";
  const scope = "playlist-modify-public playlist-modify-private";

  // Generates PKCE code challenge
  const codeChallenge = generatePKCE();

  // Constructs the authorization URL
  const authUrl = new URL("https://accounts.spotify.com/authorize");
  authUrl.searchParams.append("client_id", clientId);
  authUrl.searchParams.append("response_type", "code");
  authUrl.searchParams.append("redirect_uri", redirectUri);
  authUrl.searchParams.append("scope", scope);
  authUrl.searchParams.append("code_challenge_method", "S256");
  authUrl.searchParams.append("code_challenge", codeChallenge);

  // Redirects the user
  window.location.href = authUrl.toString();
};

// Extracts authorization code from the URL
const extractAuthorizationCode = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  if (code) {
    // Clear the query parameters from the URL
    window.history.pushState({}, null, "/");
  }

  return code;
};

// Exchanges Authorization Code for Access Token
const exchangeCodeForToken = async () => {
  const code = extractAuthorizationCode();
  const codeVerifier = localStorage.getItem("code_verifier");
  const clientId = "1fa60dad101b4603a88a79b8ab5ff066";
  const redirectUri = "http:/localhost:5173";

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier,
    }),
  });

  const data = await response.json();

  if (data.access_token) {
    const expiresIn = data.expires_in; // Token expiration in seconds
    const expirationTime = Date.now() + expiresIn * 1000;

    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("token_expiration", expirationTime);

    console.log("Access Token:", data.access_token);
  } else {
    console.error("Failed to obtain access token", data);
  }
};

// Fetches Data using the Access Token
const fetchSpotifyAPI = async (endpoint) => {
  const accessToken = localStorage.getItem("access_token");
  const tokenExpiration = localStorage.getItem("token_expiration");

  if (!accessToken || Date.now() > tokenExpiration) {
    console.warn("Access token has expired or is missing. Redirecting...");
    redirectToSpotify();
    return null;
  }

  const response = await fetch(`https://api.spotify.com/v1${endpoint}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    throw new Error(`API Request Failed: ${response.status}`);
  }

  return response.json();
};

export { redirectToSpotify, exchangeCodeForToken, fetchSpotifyAPI };
