import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Overview } from "./overview";




export function OverviewCard() {

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Number of Meals Served</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <Overview />
      </CardContent>
    </Card>


  )
}