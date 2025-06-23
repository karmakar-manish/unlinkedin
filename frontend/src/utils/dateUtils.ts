import { format, isValid, parseISO } from "date-fns"

export default function formatDate(dateInput: string | Date) {
  const date = typeof dateInput === "string" ? parseISO(dateInput) : dateInput
  return isValid(date) ? format(date, "MMM yyyy") : "Present"
}
