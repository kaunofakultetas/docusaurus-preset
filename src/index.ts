import type { LoadContext } from "@docusaurus/types";
import type { Options as ClassicOptions } from "@docusaurus/preset-classic";
import presetClassic from "@docusaurus/preset-classic";

export interface PresetOptions {
  sidebarPath?: string | false;
  docs?: Partial<ClassicOptions["docs"]>;
  classic?: Partial<ClassicOptions>;
}

export default function preset(context: LoadContext, opts: PresetOptions = {}) {
  // A Docusaurus preset can only return `plugins` and `themes` — the core
  // `loadPresets` helper ignores any nested `presets` key. So we invoke
  // preset-classic ourselves and merge its output, then add the Mermaid theme.
  const classicOptions = {
    docs: {
      sidebarPath: opts.sidebarPath ?? false,
      ...(opts.docs || {}),
    },
    theme: {
      customCss: require.resolve("./css/custom.css"),
    },
    ...(opts.classic || {}),
  } satisfies ClassicOptions;

  const classic = presetClassic(context, classicOptions);

  return {
    plugins: classic.plugins ?? [],
    themes: [...(classic.themes ?? []), "@docusaurus/theme-mermaid"],
  };
}
