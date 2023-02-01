/** @type {import('astro-i18next').AstroI18nextConfig} */

export default {
  defaultLocale: "en",
  locales: ["en", "es"],
  routes: {
    es: {
      blog: "blog",
      portfolio: "portafolio",
      "guest-book": "libro-de-vistas",
    },
  },
  i18nextServer: {
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
};
