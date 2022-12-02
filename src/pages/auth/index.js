export const isAuthenticate = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("cookieFallback"));
  } else {
    return false;
  }
};

export const logout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("cookieFallback");
    next();
  }
};
