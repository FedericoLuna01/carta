'use client'

import { useEffect, useState } from "react"
import axios from "axios"

import { DataTable } from "@/components/ui/data-table"
import { OrderColumn, columns } from "./components/columns"
import { pusherClient } from "@/lib/pusher"
import { useRouter } from "next/navigation"

const OrderClient = ({ data }: { data: OrderColumn[]}) => {
  const [orders, setOrders] = useState(data)
  const router = useRouter()

  const getOrder = async (id: number) => {
    const order = await axios.get(`/api/orders/${id}`)
    return order.data
  }

  useEffect(() => {
    pusherClient.subscribe("orders")

    pusherClient.bind('new-order', (order: OrderColumn) => {
      // const newOrder =  await getOrder(order.id)
      // console.log(newOrder)
      // if (!newOrder) return
      // setOrders((prev) => [newOrder, ...prev])
      // router.refresh()
      window.location.reload()
    })

    return () => {
      pusherClient.unsubscribe("orders")
    }
  }, [])


  return (
    <div>
      <DataTable
        data={orders}
        columns={columns}
        visibility
        order
      />
    </div>
  )
}

export default OrderClient