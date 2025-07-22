"use client";

import { Suspense } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { TrainingSidebar } from "@/components/dashboard/training-sidebar";
import { ModelTrainer } from "@/components/dashboard/model-trainer";
import { TrainingPanel } from "@/components/dashboard/training-panel";

function TrainingContent() {
  return (
    <>
      <TrainingSidebar />
      <ModelTrainer />
      <TrainingPanel />
    </>
  );
}

export default function TrainPage() {
  return (
    <DashboardLayout>
      <Suspense
        fallback={
          <div className='p-4 text-terminal-green'>
            Loading training interface...
          </div>
        }
      >
        <TrainingContent />
      </Suspense>
    </DashboardLayout>
  );
}
