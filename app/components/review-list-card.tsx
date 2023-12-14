import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";


export type ReviewListCardData = {
  id: string,
  title: string,
  // description: string,
  tags: {
    text: string,
    id: string,
    index: number,
  }[],
  dateString: string,
}

type ReviewStatus = "accepted" | "declined" | "hold" | "unset" | "review"


export function ReviewListCard({
  current,
  title,
  id,
  footer,
}: {
  id: string,
  title: string,
  footer: string,
  current?: boolean
}) {
  const styleClass = current ? "bg-secondary md:rounded-none" : "md:rounded-none";

  const status = "hold" as ReviewStatus;

  const reviewStatusStyles = (status: ReviewStatus) => {
    return {
      "accepted": "text-green-500",
      "declined": "text-red-500",
      "hold": "text-yellow-500",
      "unset": "text-gray-500",
      "review": "text-yellow-500",
    }[status]
  };

  const reviewStatusDisplay = {
    "accepted": "Accepted",
    "declined": "Declined",
    "hold": "On Hold",
    "unset": "Unset",
    "review": "Needs Review",
  }

  return <Card className={styleClass}>
    <CardHeader className="p-3 ">
      <CardTitle className={`${reviewStatusStyles(status)}`}>
        {title}
      </CardTitle>
      <CardDescription>
        Submitted on {new Date().toLocaleDateString()}
      </CardDescription>
      <p className={`${reviewStatusStyles(status)} font-semibold`}>
        review status
      </p>
      <p>
        id: {id}
      </p>
    </CardHeader>
    <CardFooter className="pb-3">
      <p>
        {footer}
      </p>
    </CardFooter>
  </Card>;
}
