import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'

import { ToasterProvider } from '@/providers/toaster-provider'
import ModalsProviders from '@/providers/modals-provider'
import AdminNav from '@/components/admin-nav'
import MobileAdminNavbar from '@/components/mobile-admin-navbar'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Carta - Admin',
}

const AdminLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <html lang="es">
      <body
        className={`${inter.className} min-h-screen`}
      >
        <ToasterProvider />
        <ModalsProviders />
        <div
          className='sticky top-0 z-50 bg-white shadow-md md:hidden'
        >
          <MobileAdminNavbar />
        </div>
        <AdminNav>
          <main
            className="w-full p-5"
          >
            {children}
          </main>
        </AdminNav>
      </body>
    </html>
  )
}

export default AdminLayout