export const configWithToken = getState => {
  // get token
  const token = getState().Auth.token;
  // configurate headers
  const headerConfig = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    headerConfig.headers["Authorization"] = `Token ${token}`;
  }

  return headerConfig;
};
