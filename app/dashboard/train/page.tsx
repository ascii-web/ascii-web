"use client";

import { ModelTrainer } from "@/components/dashboard/model-trainer";
import { TrainingPanel } from "@/components/dashboard/training-panel";

export default function TrainPage() {
  return (
    <div className='w-full p-6'>
      <div className='flex gap-6 w-full justify-between'>
        <ModelTrainer />
        <TrainingPanel />
      </div>
    </div>
  );
}
