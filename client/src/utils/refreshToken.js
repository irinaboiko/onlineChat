export const refreshTokenSetup = (response) => {
  // Timing to renew access token
  let refreshTiming = (response.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthResponse = await response.reloadAuthResponse();
    refreshTiming = (newAuthResponse.expires_in || 3600 - 5 * 60) * 1000;
    console.log("newAuthResponse: ", newAuthResponse);
    // saveUserToken(newAuthResponse.access_token); <-- save new token
    console.log("new auth Token", newAuthResponse.id_token);

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };

  // Setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
};
