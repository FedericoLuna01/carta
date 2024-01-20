import MercadoPagoConfig from "mercadopago";

const MpClient = new MercadoPagoConfig({
  accessToken: process.env.NEXT_PUBLIC_MP_ACCESS_TOKEN!,
})

export default MpClient