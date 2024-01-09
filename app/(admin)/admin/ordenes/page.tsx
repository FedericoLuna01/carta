import { unstable_noStore as noStore } from "next/cache"

import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import prismadb from "@/lib/prismadb"
import OrderClient from "./orderClient"

const OrdersPage = async () => {
  noStore()

  const orders = await prismadb.order.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      products: {
        include: {
          extras: true,
          size: true,
          product: true
        }
      }
    }
  })

  return (
    <section>
      <div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <Heading
          title="Ordenes"
          description="Administra tus ordenes"
        />
      </div>
      <Separator />
      <OrderClient
        // @ts-ignore
        data={orders}
      />

    </section>
  )
}

export default OrdersPage