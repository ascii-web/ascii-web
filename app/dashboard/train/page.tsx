"use client";

import { ModelTrainer } from "@/components/dashboard/model-trainer";
import { TrainingPanel } from "@/components/dashboard/training-panel";

export default function TrainPage() {
  return (
    <div className='w-full p-6'>
      <h1 className='text-3xl font-bold text-terminal-green mb-6'>
        AI Model Training
      </h1>
      <div className='flex gap-6 w-full justify-between'>
        <ModelTrainer />
        <TrainingPanel />
      </div>
    </div>
  );
}
