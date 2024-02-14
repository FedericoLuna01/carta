import { Layers, Pizza, Settings, ShoppingCart, Tag, Tags } from "lucide-react"

export const typeOptions = [
  {
    label: "Retiro",
    value: "TAKEAWAY",
  },
  {
    label: "Mesa",
    value: "TABLE",
  },
  {
    label: "Delivery",
    value: "DELIVERY",
  }
]

export const statusOptions = [
  { label: 'Pendiente', value: 'PENDING' },
  { label: 'En progreso', value: 'IN_PROGRESS' },
  { label: 'En camino', value: 'ON_THE_WAY' },
  { label: 'Pagado', value: 'PAID' },
  { label: 'Listo', value: 'READY' },
  { label: 'Entregado', value: 'DONE' },
  { label: 'Cancelado', value: 'CANCELED' }
]

export const navItems = [
  {
    id: 1,
    label: 'Mi cuenta',
    icon: Settings,
    href: '/admin',
    variant: 'default'
  },
  {
    id: 2,
    label: 'Productos',
    icon: Pizza,
    href: '/admin/productos',
    variant: 'ghost'
  },
  {
    id: 3,
    label: 'Categorías',
    icon: Tag,
    href: '/admin/categorias',
    variant: 'ghost'
  },
  {
    id: 4,
    label: 'Subcategorías',
    icon: Tags,
    href: '/admin/subcategorias',
    variant: 'ghost'
  },
  {
    id: 5,
    label: 'Órdenes',
    icon: ShoppingCart,
    href: '/admin/ordenes',
    variant: 'ghost'
  },
  {
    id: 6,
    label: 'Reordenar',
    icon: Layers,
    href: '/admin/reordenar',
    variant: 'ghost'
  },
]