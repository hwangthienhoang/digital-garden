import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Header({ children }: QuartzComponentProps) {
  return children.length > 0 ? <div>{children}</div> : null
}

export default (() => Header) satisfies QuartzComponentConstructor
