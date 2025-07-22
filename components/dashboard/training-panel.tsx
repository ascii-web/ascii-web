"use client"

import { useState } from "react"
import { Brain, Clock, Zap, CheckCircle } from "lucide-react"

export function TrainingPanel() {
  const [activeTraining, setActiveTraining] = useState(null)

  const trainingHistory = [
    {
      id: "1",
      name: "CyberpunkStyle_v2",
      status: "completed",
      progress: 100,
      accuracy: 94.2,
      startTime: "2024-01-15 14:30",
      duration: "45 min",
    },
    {
      id: "2",
      name: "PoetryMaster_v1",
      status: "completed",
      progress: 100,
      accuracy: 87.8,
      startTime: "2024-01-14 09:15",
      duration: "32 min",
    },
    {
      id: "3",
      name: "CodeGen_v3",
      status: "failed",
      progress: 67,
      accuracy: 0,
      startTime: "2024-01-13 16:45",
      duration: "12 min",
    },
  ]

  return (
    <div className="w-80 bg-gray-800 border-l border-gray-700 p-6 overflow-y-auto">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-terminal-green mb-4 flex items-center gap-2">
            <span className="text-gray-500">//</span> TRAINING_STATUS
          </h3>
        </div>

        {/* Current Training */}
        {!activeTraining ? (
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <Brain className="w-8 h-8 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">No active training sessions</p>
            <p className="text-gray-500 text-xs mt-1">Start a new training to see progress here</p>
          </div>
        ) : (
          <div className="bg-gray-900 rounded-lg p-4 border border-magenta">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-magenta animate-pulse" />
              <span className="text-magenta font-semibold">Training Active</span>
            </div>
            <div className="space-y-2">
              <div className="text-white font-semibold">CustomModel_v1</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-magenta h-2 rounded-full" style={{ width: "73%" }} />
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>73% complete</span>
                <span>~15 min remaining</span>
              </div>
            </div>
          </div>
        )}

        {/* Training History */}
        <div>
          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Training History
          </h4>
          <div className="space-y-3">
            {trainingHistory.map((training) => (
              <div key={training.id} className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-terminal-green font-semibold text-sm">{training.name}</span>
                  <div className="flex items-center gap-1">
                    {training.status === "completed" && <CheckCircle className="w-3 h-3 text-green-500" />}
                    {training.status === "failed" && <div className="w-3 h-3 rounded-full bg-red-500" />}
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        training.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {training.status}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Accuracy:</span>
                    <span className={training.accuracy > 90 ? "text-green-400" : "text-yellow-400"}>
                      {training.accuracy}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{training.duration}</span>
                  </div>
                  <div className="text-gray-500">{training.startTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Model Performance */}
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
          <h4 className="text-terminal-green font-semibold mb-3">Model Performance</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Best Accuracy:</span>
              <span className="text-green-400">94.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Avg Training Time:</span>
              <span className="text-white">38 min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Success Rate:</span>
              <span className="text-green-400">85%</span>
            </div>
          </div>
        </div>

        {/* GPU Usage */}
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
          <h4 className="text-terminal-green font-semibold mb-3">Resource Usage</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">GPU Memory</span>
                <span className="text-yellow-400">2.1 / 8.0 GB</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "26%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">CPU Usage</span>
                <span className="text-blue-400">45%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: "45%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
