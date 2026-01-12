import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

const extendedSchema = frontmatterSchema.extend({
  authors: z
    .array(
      z.object({
        name: z.string(),
        url: z.string().url().optional(),
      })
    )
    .optional(),
});

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: extendedSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
