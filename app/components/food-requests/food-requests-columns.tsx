import { ColumnDef } from "@tanstack/react-table";
import { CheckCircle, XCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "@remix-run/react";

type FoodRequestRow = {
  id: string;
  name: string;
  received: string;
  description: string;
  date?: Date;
};

export const foodRequestTestData: FoodRequestRow[] = [
  {
    id: "1",
    name: "Nov 2023 Food Drive-thru",
    received: "yes",
    description: "Drive-thru food drive for the month of November 2023",
    date: new Date(2023, 11, 1)
  },
  {
    id: "2",
    name: "Oct 2023 Food Drive-thru",
    received: "yes",
    description: "This is a description of product 2",
    date: new Date(2023, 10, 1)
  },
  {
    id: "3",
    name: "Sept 2023 Food Drive-thru",
    received: "no",
    description: "This is a description of product 3",
    date: new Date(2023, 9, 1)
  },
];

function AvailabilityTrue() {
  return <CheckCircle className={`bg-green-700 rounded-full w-7 h-7`} />;
}

function AvailabilityFalse() {
  return (
    <XCircleIcon
      className={`bg-destructive text-destructive-foreground rounded-full w-7 h-7`}
    />
  );
}

export const foodRequestColumnsShort: ColumnDef<FoodRequestRow>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col justify-start gap-2">
          <p className="text-primary-foreground text-base font-semibold">
            {row.original.name}
          </p>
          <p className="text-muted-foreground text-sm">
            {row.original.description}
          </p>
        </div>
      );
    },
  },
  {
    header: () => <div className="text-center">Received</div>,
    accessorKey: "received",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          {row.original.received === "yes" ? (
            <AvailabilityTrue />
          ) : (
            <AvailabilityFalse />
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <Link
          to={`/food-requests/${row.original.id}`}
          className="flex justify-center"

        >
          View Details
        </Link>
      )
    },
  },
];

export const foodRequestColumnsLong: ColumnDef<FoodRequestRow>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col justify-start gap-2">
          <p className="text-primary-foreground text-base font-semibold">
            {row.original.name}
          </p>
        </div>
      );
    },
  },
  {
    header: () => <div className="text-center">Description</div>,
    accessorKey: "description",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <p className="text-muted-foreground">{row.original.description}</p>
        </div>
      );
    },
  },
  {
    header: () => <div className="text-center">Availability</div>,
    accessorKey: "availability",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          {row.original.received === "yes" ? (
            <AvailabilityTrue />
          ) : (
            <AvailabilityFalse />
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <Link
        to={`/food-requests/${row.original.id}`}
        className="flex justify-center"
      >
        View Details
      </Link>
        ;
    },
  },
];
