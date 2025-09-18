export const accountApi = (transport) => ({
  registration: (payload) => transport.post("/registration", payload),
  login: (payload) => transport.post("/login", payload),
  logout: () => transport.get("/logout"),
});
