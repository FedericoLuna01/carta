import AdminAccordion from "@/components/admin-accordion"
import Header from "@/components/header"
import UserSettings from "@/components/user-settings"
import prismadb from "@/lib/prismadb"

const AdminPage = async () => {
  const userSettings = await prismadb.userSettings.findFirst({})

  return (
    <section
      className="flex items-center flex-col"
    >
      <Header />
      <UserSettings
        userSettings={userSettings}
      />
      <AdminAccordion />
    </section>
  )
}

export default AdminPage