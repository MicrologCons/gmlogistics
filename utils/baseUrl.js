const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://microlog.tech"
    : "http://localhost:3000";

export default baseUrl;
