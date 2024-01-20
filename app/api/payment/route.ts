import { Preference } from "mercadopago";
import { redirect } from "next/navigation";

import MpClient from "@/lib/mercadopago";
import { NextResponse } from "next/server";

export async function POST (req: Request) {
  const preference = await new Preference(MpClient)
    .create({
      body: {
        items: [
          {
            title: 'Test',
            quantity: 1,
            unit_price: 10,
            id: '1'
          }
        ]
      }
    })

  // console.log(preference)
  // console.log((await preference).sandbox_init_point)
  redirect(preference.sandbox_init_point!)
  // return new NextResponse(preference.sandbox_init_point!, { status: 202 })
}