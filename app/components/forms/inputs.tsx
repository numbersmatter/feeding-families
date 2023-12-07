import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  SelectValue
} from "../ui/select";

export function StandardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid-cols-1 space-y-2 md:grid-cols-4 md:gap-4  items-center ">
      {children}
    </div>
  )
}

export function TextInput({
  label,
  inputId,
  fieldErrors,
  defaultValue,
  placeholder,
}: {
  label: string,
  inputId: string,
  fieldErrors: string[],
  defaultValue: string,
  placeholder?: string,
}) {
  return (
    <>
      <Label htmlFor={inputId} className="text-right">
        {label}
      </Label>
      <Input
        id={inputId}
        name={inputId}
        defaultValue={defaultValue}
        className="col-span-3"
        placeholder={placeholder}
      />
      {
        fieldErrors.length > 0 &&
        <div className="col-span-full text-red-600">
          <ul>
            {
              fieldErrors.map((errorText) => (
                <li key={errorText}>{errorText}</li>
              ))
            }
          </ul>
        </div>
      }
    </>
  )
}


export function SelectInput({
  label,
  inputId,
  fieldErrors,
  selectValues,
  defaultValue,
}: {
  label: string,
  inputId: string,
  fieldErrors: string[],
  selectValues: { id: string, name: string }[],
  defaultValue: string,
}) {
  return (
    <>
      <Select name={inputId} defaultValue={defaultValue}>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {
              selectValues.map((value) => (
                <SelectItem key={value.id} value={value.id}>
                  {value.name}
                </SelectItem>
              ))
            }
          </SelectGroup>
        </SelectContent>
      </Select>
      {
        fieldErrors.length > 0 &&
        <div className="col-span-full text-red-600">
          <ul>
            {
              fieldErrors.map((errorText) => (
                <li key={errorText}>{errorText}</li>
              ))
            }
          </ul>

        </div>
      }
    </>
  )
}