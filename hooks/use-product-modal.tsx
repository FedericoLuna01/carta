import { FullProduct } from '@/types/types'
import { create } from 'zustand'

interface ProductModalStore {
  isOpen: boolean
  data?: FullProduct
  onOpen: (data: FullProduct) => void
  onClose: () => void
}

const useProductModal = create<ProductModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: FullProduct) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useProductModal