import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "HTML: A Comprehensive Guide",
      social: {
        github: "https://github.com/schalkneethling/html-comprehensive-guide",
      },
      sidebar: [
        {
          label: "Chapters",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", link: "/book/introduction/" },
            {
              label: "Getting started with HTML",
              link: "/book/chapter001/",
            },
            {
              label: "The link and style elements",
              link: "/book/chapter002/",
            },
          ],
        },
      ],
    }),
  ],
});
