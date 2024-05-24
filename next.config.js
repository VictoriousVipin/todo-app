// `next-pwa` config should be passed here
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

// Use `withPWA` and pass general Next.js config
module.exports = withPWA({});
