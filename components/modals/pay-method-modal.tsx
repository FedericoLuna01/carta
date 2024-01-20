'use client'

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { PayMethod } from "@/types/types"
import axios from "axios"
import toast from "react-hot-toast"
import useCart from "@/hooks/use-cart"
import { redirect, useRouter } from "next/navigation"

interface PayMethodModalProps {
  isOpen: boolean
  onClose: () => void
  setLoading: (loading: boolean) => void
  loading: boolean
  data: any
}

export const PayMethodModal: React.FC<PayMethodModalProps> = ({
  isOpen,
  onClose,
  loading,
  data,
  setLoading
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [payMethod, setPayMethod] = useState<PayMethod>()
  const [selectError, setSelectError] = useState(false)

  const { removeAll } = useCart()
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const handleChange = () => {
    if(isOpen) {
      onClose()
    }
  }

  async function onSubmit() {
    if(!payMethod) {
      setSelectError(true)
      return
    }

    if (payMethod === PayMethod.CASH) {
      try {
        const res = await axios.post('/api/orders', data)
        // Guardar la orden en localstorage
        localStorage.setItem('orderId', res.data.id)

        // window.location.reload()
        router.refresh()

        toast.success("Pedido realizado con éxito")
        removeAll()
      } catch (error) {
        toast.error('Algo salio mal')
      } finally {
        setLoading(false)
      }
    }

    if (payMethod === PayMethod.MERCADOPAGO) {
      try {
        const res = await axios.post('/api/payment')
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }

  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={handleChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className="text-center text-2xl font-bold text-black"
          >
            ¿Como quiere pagar?
          </DialogTitle>
          <DialogDescription
            className="text-center"
          >
            Selecciona el método de pago que deseas utilizar para realizar tu pedido.
          </DialogDescription>
          <div
            className="flex flex-col items-center justify-center py-3"
          >
            <Select
              value={payMethod}
              onValueChange={(e) => {
                setPayMethod(e as PayMethod)
                setSelectError(false)
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Método de pago" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value={PayMethod.CASH}
                  >
                      Efectivo
                  </SelectItem>
                  <SelectItem
                    value={PayMethod.MERCADOPAGO}
                  >
                      Mercado pago
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {
              selectError && (
                <span
                  className="text-red-500 text-sm w-[180px] mt-1"
                >
                  Debe seleccionar un método de pago
                </span>
              )
            }
          </div>
          <div
            className="flex justify-center space-x-4"
          >
            <Button
              variant="secondary"
              disabled={loading}
              onClick={onClose}
              type='button'
            >
                Cancelar
            </Button>
            <Button
              disabled={loading}
              onClick={onSubmit}
            >
              Pedir
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}