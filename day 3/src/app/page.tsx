import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to /studio
  redirect("/studio");
  return null; // This ensures no content is rendered
}
