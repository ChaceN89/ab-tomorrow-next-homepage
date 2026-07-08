import { redirect } from "next/navigation";

// Server-side redirect to default locale to support static export.
export default function Page() {
  redirect("/en");
}