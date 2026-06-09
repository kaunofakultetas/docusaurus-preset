import path from "path";
import type { Config } from "@docusaurus/types";
import type { PresetOptions } from "@kaunofakultetas/docusaurus-preset";

// Serve the brand assets bundled inside the preset (lib/static/img/*) as if
// they were local — no need to copy SVGs into every consuming site.
const presetStaticDir = path.join(
  path.dirname(require.resolve("@kaunofakultetas/docusaurus-preset")),
  "static",
);

const config: Config = {
  title: "Preset Test Site",
  url: "https://example.com",
  baseUrl: "/",
  favicon: "img/vuLogo.svg",
  markdown: { mermaid: true },
  staticDirectories: ["static", presetStaticDir],

  presets: [
    [
      "@kaunofakultetas/docusaurus-preset",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          routeBasePath: "/",
        },
      } satisfies PresetOptions,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Preset Test Site",
      logo: { alt: "Kauno fakultetas", src: "img/knfLogoText.svg" },
      items: [],
    },
  },
};

export default config;
