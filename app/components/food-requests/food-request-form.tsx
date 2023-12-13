import { useFetcher } from "@remix-run/react"
import { FormEvent, useEffect, useRef, useState } from "react"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { StandardAPIResponse } from "~/server/interfaces"
import { SelectInput, StandardGrid, TextInput } from "../forms/inputs"



export function FoodRequestForm({
}: {
  }) {
  const fetcher = useFetcher<StandardAPIResponse>();
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);

  const formData = fetcher.formData;
  const isFormData = formData !== undefined;
  const isSaving = fetcher.state !== "idle" && isFormData
  const actionData = fetcher.data;
  const success = actionData ? actionData.success : false;
  const isError = actionData ? !actionData.success : false;


  useEffect(() => {
    if (isError) {
      // toast({ title: "Error Occurred", description: "Error Occurred" });
    }

  }, [isSaving, success])



  const handleSaveChanges = (e: FormEvent) => {
    // @ts-ignore
    const formData = new FormData(e.currentTarget);
    if (!formRef.current) return;
    fetcher.submit(formData, { method: "POST" })
  }


  const schoolOptions = [
    { id: "primary", name: "Primary School" },
    { id: "elementary", name: "Elementary School" },
    { id: "middle", name: "Middle School" },
    { id: "high", name: "High School" },
    { id: "other", name: "Other" },
  ]


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button >Request Food</Button>
      </DialogTrigger>
      <DialogContent className="rounded-none sm:rounded-md sm:max-w-[525px]">
        <fetcher.Form method="POST" ref={formRef} onSubmit={handleSaveChanges}>
          <DialogHeader>
            <DialogTitle>Request Verification</DialogTitle>
            <DialogDescription>
              Request verification for your account.
            </DialogDescription>
          </DialogHeader>
          {
            isError &&
            <div
              className="mx-3 my-3 px-2 py-2 rounded-lg border border-red-600 bg-red-300 text-red-700"
            >
              <h5>Errors</h5>
            </div>
          }
          <div className="grid gap-4 py-4">
            <StandardGrid>
              <TextInput
                label="First Name"
                inputId="firstName"
                fieldErrors={[]}
                defaultValue={""}
              />
            </StandardGrid>
            <StandardGrid>
              <TextInput
                label="Last Name"
                inputId="lastName"
                fieldErrors={[]}
                defaultValue={""}
              />
            </StandardGrid>
            <StandardGrid>
              <TextInput
                label="Phone Number"
                inputId="phone"
                fieldErrors={[]}
                defaultValue={""}
                placeholder="555-555-5555"
              />
            </StandardGrid>
            <StandardGrid>
              <SelectInput
                label="Select School"
                inputId="schoolId"
                fieldErrors={[]}
                selectValues={schoolOptions}
                defaultValue={""}

              />
            </StandardGrid>

          </div>
          <DialogFooter>
            <input readOnly hidden name="_action" value={"addField"} />
            <Button type="submit">Submit Request</Button>
          </DialogFooter>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  )
}
