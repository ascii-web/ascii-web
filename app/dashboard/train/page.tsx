import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { TrainingSidebar } from "@/components/dashboard/training-sidebar"
import { ModelTrainer } from "@/components/dashboard/model-trainer"
import { TrainingPanel } from "@/components/dashboard/training-panel"

export default function TrainPage() {
  return (
    <DashboardLayout>
      <TrainingSidebar />
      <ModelTrainer />
      <TrainingPanel />
    </DashboardLayout>
  )
}
