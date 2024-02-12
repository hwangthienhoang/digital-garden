import { QuartzTransformerPlugin } from "../types"
import rehypePrettyCode, { Options as CodeOptions } from "rehype-pretty-code"

export const SyntaxHighlighting: QuartzTransformerPlugin = () => ({
  name: "SyntaxHighlighting",
  htmlPlugins() {
    return [
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: {
            dark: "dracula",
            light: "dracula-soft",
          },
        } satisfies Partial<CodeOptions>,
      ],
    ]
  },
})
