import { UserSquare } from "lucide-react";
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
      value="735"
      description="+20.1% from last year"
      icon={<UserSquare className="h-4 w-4 text-muted-foreground" />}
    />
  )
}