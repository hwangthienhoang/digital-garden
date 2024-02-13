function toggleTreeNode(e: MouseEvent) {
  e.stopPropagation()
  e.preventDefault()
  const target = e.currentTarget as HTMLElement
  target.parentElement?.classList.toggle("menu__list-item--collapsed")
}

document.addEventListener("nav", () => {
  if (!document.getElementsByClassName("theme-doc-sidebar-menu menu__list")?.length) {
    // Tree not found
    return
  }

  for (const item of document.getElementsByClassName(
    "menu__list-item-collapsible",
  ) as HTMLCollectionOf<HTMLElement>) {
    item.addEventListener("click", toggleTreeNode)
    window.addCleanup(() => item.removeEventListener("click", toggleTreeNode))
  }
})

const a = document.querySelectorAll(".menu__list-item:not(.menu__list-item--collapsed)>.menu__list-item-collapsible")
console.log((a as HTMLElement)[0].dataset["path"])