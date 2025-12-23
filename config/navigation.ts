
export type NavigationItem = {
  href: string;
  label: string;
}

export const navigation: NavigationItem[] = [
  { href: "/home", label: "Home" },
  { href: "/tentang", label: "Tentang" },
  { href: "/list-villa", label: "List Villa" },
  { href: "/kontak", label: "Kontak" },
]

export default navigation;
