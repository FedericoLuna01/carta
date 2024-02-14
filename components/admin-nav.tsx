'use client'

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Separator } from "./ui/separator"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable"
import { navItems } from "@/data/data"
import { buttonVariants } from "./ui/button"
import LogoutButton from "./ui/logout-button"

const AdminNav = ({ children }: { children: React.ReactNode}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="hidden md:flex"
    >
      <ResizablePanel
        minSize={15}
        maxSize={17}
        defaultSize={15}
        className={cn(isCollapsed && "min-w-[60px] transition-all duration-300 ease-in-out", "hidden md:flex items-center flex-col")}
        collapsible={true}
        collapsedSize={5}
        onCollapse={() => setIsCollapsed(true)}
        onExpand={() => setIsCollapsed(false)}
      >
        <div
          className="w-full h-[100vh]"
        >
          <div
            className="w-full sticky top-0"
          >
            <div
              className="p-4 flex items-center justify-center"
            >
              {
                isCollapsed ?
                  <Image
                    src='/carta-mobile.png'
                    width={40}
                    height={40}
                    alt='Carta logo'
                  />
                  :
                  <Image
                    src='/logocarta.png'
                    width={200}
                    height={40}
                    alt='Carta logo'
                  />
              }
            </div>
            <Separator />
            <nav
              className="flex flex-col w-full p-2 space-y-2"
            >
              {
                navItems.map((link, index) => (
                  isCollapsed ? (
                    <Link
                      key={index}
                      href={link.href}
                      className={cn(
                        buttonVariants({ variant: pathname === link.href ? 'default' : 'ghost', size: "sm" }),
                        "justify-center"
                      )}
                      onClick={() => console.log({ href: link.href, pathname: pathname })}
                    >
                      <link.icon className="h-4 w-4" />
                    </Link>
                  )
                    : (
                      <Link
                        key={index}
                        href={link.href}
                        className={cn(
                          buttonVariants({ variant: pathname === link.href ? 'default' : 'ghost', size: "sm" }),
                          "justify-start"
                        )}
                      >
                        <link.icon className="mr-2 h-4 w-4" />
                        {link.label}
                      </Link>
                    )
                ))
              }
            </nav>
            <Separator />
            <div
              className="w-full p-2 bg-white"
            >
              <LogoutButton
                className="w-full"
                isCollapsed={isCollapsed}
              />
            </div>
            <div
              className="justify-self-end"
            >
          footer
            </div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        defaultSize={85}
        className="flex justify-center"
      >
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default AdminNav