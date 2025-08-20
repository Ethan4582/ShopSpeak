import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/get-user"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  // Only allow system_admin and store_owner
  if (user.role === "normal_user") {
    redirect("/stores")
  }

  const getRoleSpecificContent = () => {
    switch (user.role) {
      case "system_admin":
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">User Management</CardTitle>
                <CardDescription>Manage all platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/admin/users">Manage Users</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Store Management</CardTitle>
                <CardDescription>Oversee all stores on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/admin/stores">Manage Stores</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">System Analytics</CardTitle>
                <CardDescription>View platform statistics and reports</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/admin/analytics">View Analytics</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )

      case "store_owner":
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">My Stores</CardTitle>
                <CardDescription>Manage your store listings and information</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/store-owner/stores">Manage Stores</Link>
                </Button>
              </CardContent>
            </Card>
           
          </div>
        )

      default:
        return null
    }
  }

  const getRoleTitle = () => {
    switch (user.role) {
      case "system_admin":
        return "System Administrator Dashboard"
      case "store_owner":
        return "Store Owner Dashboard"
      default:
        return "Dashboard"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={user} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">{getRoleTitle()}</p>
        </div>

        {getRoleSpecificContent()}
      </main>
    </div>
  )
}
