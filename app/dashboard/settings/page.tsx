import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { SettingsSidebar } from "@/components/dashboard/settings-sidebar"
import { UserSettings } from "@/components/dashboard/user-settings"
import { SettingsPanel } from "@/components/dashboard/settings-panel"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <SettingsSidebar />
      <UserSettings />
      <SettingsPanel />
    </DashboardLayout>
  )
}
