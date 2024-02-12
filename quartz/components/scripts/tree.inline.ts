console.log("Tree")
document.querySelector(".menu__list-item-collapsible")?.addEventListener("click", (e) => {
  const target = e.currentTarget as HTMLElement
  console.log(target.nodeType)
  target.parentElement?.classList.toggle("menu__list-item--collapsed")
})
