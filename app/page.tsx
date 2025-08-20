import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">StoreRate</h1>
          <div className="space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">Professional Store Rating Platform</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover, rate, and review stores with our comprehensive business rating system. Built for transparency and
            trust in business relationships.
          </p>
          <div className="flex justify-center gap-4 mb-16">
            <Button size="lg" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">For Customers</CardTitle>
              <CardDescription>Rate and review stores based on your experience</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Submit detailed store ratings</li>
                <li>• Browse store reviews</li>
                <li>• Track your rating history</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">For Store Owners</CardTitle>
              <CardDescription>Manage your store presence and customer feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Manage store information</li>
                <li>• View customer ratings</li>
                <li>• Track performance metrics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">For Administrators</CardTitle>
              <CardDescription>Comprehensive platform management and oversight</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• User management</li>
                <li>• Store verification</li>
                <li>• System analytics</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
