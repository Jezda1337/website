import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import globalStyles from "./global.css?inline";
import "tailwindcss/tailwind.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />

        <script>
          {`if(localStorage.theme){ const theme = JSON.parse(localStorage.theme) || "light";
if(theme === "dark"){document.documentElement.classList.add("dark", "bg-slate-800", "text-white");} else if (typeof theme === 'undefined') {if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.classList.add("dark", "bg-slate-800", "text-white");}}}`}
        </script>
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
