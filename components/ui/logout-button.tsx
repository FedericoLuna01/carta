'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { LogOut } from 'lucide-react'

import { Button } from './button'
import { cn } from '@/lib/utils'

interface LogoutButtonProps {
  className?: string
  isCollapsed: boolean
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ className, isCollapsed }) => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await axios.get('/api/auth/logout')
      if (res.status === 200) {
        toast.success('Sesión cerrada correctamente.')
        router.push('/')
      }
    } catch (error: any) {
      toast.error('Error al cerrar sesión.')
      router.refresh()
    }
  }

  return (
    <Button
      variant='destructive'
      onClick={handleLogout}
      className={cn('justify-start', className, isCollapsed && 'justify-center')}
      size='sm'
    >
      {
        isCollapsed ? (
          <LogOut className='w-5 h-5' />
        )
          : (
            <span
              className='flex items-center'
            >
              <LogOut className='w-5 h-5 mr-2' />
              Cerrar sesión
            </span>
          )
      }

    </Button>
  )
}

export default LogoutButton