import { Contact, ShoppingBag, ShoppingBasket, UserSquare, UtensilsCrossed } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Overview } from "./overview";


export function StandardSmallInfoCard({
  title, value, description, icon
}: {
  title: string, value: string, description: string, icon: React.ReactNode
}) {

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

export function TotalMealsServedCard() {
  return (
    <StandardSmallInfoCard
      title="Total Meals Served"
      value="835"
      description="+20.1% from last year"
      icon={<UtensilsCrossed className="h-4 w-4 text-muted-foreground" />}
    />
  )
}

export function ActiveUsersCard() {
  return (
    <StandardSmallInfoCard
      title="Active Users"
      value="61"
      description="users signing in this month"
      icon={<Contact className="h-4 w-4 text-muted-foreground" />}
    />
  )
}
export function PickupMealsServedCard() {
  return (
    <StandardSmallInfoCard
      title="Pick Up Meals"
      value="489"
      description="Meals picked up by drive thru"
      icon={<ShoppingBasket className="h-4 w-4 text-muted-foreground" />}
    />
  )
}

export function DeliveryMealsServedCard() {
  return (
    <StandardSmallInfoCard
      title="Delivered Meals"
      value="346"
      description="Meals delivered to homes"
      icon={<ShoppingBag className="h-4 w-4 text-muted-foreground" />}
    />
  )
}