import { UtensilsCrossed } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";


export function FoodEligibleAlert() {

  return (
    <Alert variant={"default"} className="bg-accent">
      <UtensilsCrossed className="h-5 w-5 text-accent-foreground" />
      <AlertTitle className="text-sm font-medium text-accent-foreground">
        You are eligible for Dec. 11th food drive box.
      </AlertTitle>
      <AlertDescription className="text-muted-foreground">
        Please request to reserve your box as soon as possible.

      </AlertDescription>
    </Alert>
  )
}