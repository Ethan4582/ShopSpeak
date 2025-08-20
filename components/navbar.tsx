"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { User } from "@/lib/auth"

interface NavbarProps {
  user: User | null
}

export function Navbar({ user }: NavbarProps) {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "system_admin":
        return "System Admin"
      case "store_owner":
        return "Store Owner"
      case "normal_user":
        return "Customer"
      default:
        return "User"
    }
  }

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={user ? "/dashboard" : "/"} className="text-2xl font-bold text-foreground">
          StoreRate
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            {/* Role-based navigation */}
            <nav className="hidden md:flex items-center gap-4">
              {user.role === "system_admin" && (
                <>
                  <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                    Dashboard
                  </Link>
                  <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">
                    Admin Panel
                  </Link>
                  <Link href="/stores" className="text-sm text-muted-foreground hover:text-foreground">
                    Browse Stores
                  </Link>
                </>
              )}
              {user.role === "store_owner" && (
                <>
                  <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                    Dashboard
                  </Link>
                  <Link href="/store-owner/reviews" className="text-sm text-muted-foreground hover:text-foreground">
                    Customer Reviews
                  </Link>
                  <Link href="/store-owner/stores" className="text-sm text-muted-foreground hover:text-foreground">
                    My Stores
                  </Link>
                  <Link href="/stores" className="text-sm text-muted-foreground hover:text-foreground">
                    Browse Stores
                  </Link>
                </>
              )}
              {/* No nav links for normal_user */}
            </nav>
            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                    <p className="text-xs text-muted-foreground">{getRoleLabel(user.role)}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
