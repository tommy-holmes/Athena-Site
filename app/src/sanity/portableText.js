import { portableTextToHtml } from "astro-sanity";
import { urlForImage } from "./urlForImage";

const customComponents = {
  types: {
    image: ({ value }) => {
      return `
        <picture>
          <source
            srcset="${urlForImage(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${urlForImage(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
    code: ({ value }) => {
      return `
        <pre><code>${value.code}</code></pre>
      `;
    },
  },
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}
