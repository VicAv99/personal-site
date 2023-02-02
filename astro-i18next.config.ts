/** @type {import('astro-i18next').AstroI18nextConfig} */
import locales from "./public/locales/locales";

export default {
  defaultLocale: "en",
  locales: ["en", "es"],
  fallbackLang: "en",
  routes: {
    es: {
      blog: "blog",
      portfolio: "portafolio",
      "guest-book": "libro-de-vistas",
    },
  },
  i18nextServer: {
    resources: locales,
  },
  i18nextServerPlugins: {
    fsBackend: null,
  },
};
