"use client";

import { redirect } from "next/navigation";

export default function SettingsPage() {
  redirect("/dashboard/settings/profile");
}
