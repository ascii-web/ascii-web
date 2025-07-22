"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Zap, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "./page-header"

export function ModelTrainer() {
  const [trainingData, setTrainingData] = useState<File[]>([])
  const [modelName, setModelName] = useState("")
  const [trainingSettings, setTrainingSettings] = useState({
    epochs: 100,
    learningRate: 0.001,
    batchSize: 32,
    modelType: "ascii-art",
  })

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setTrainingData((prev) => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setTrainingData((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="flex-1 bg-gray-900 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        <PageHeader />

        {/* Model Configuration */}
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 space-y-6">
          <h3 className="text-xl font-bold text-terminal-green flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Model Configuration
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Model Name */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">Model Name</label>
              <input
                type="text"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                placeholder="MyCustomModel_v1"
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none"
              />
            </div>

            {/* Model Type */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">Model Type</label>
              <select
                value={trainingSettings.modelType}
                onChange={(e) => setTrainingSettings((prev) => ({ ...prev, modelType: e.target.value }))}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:border-terminal-green focus:outline-none"
              >
                <option value="ascii-art">ASCII Art Generator</option>
                <option value="poetry">Poetry Generator</option>
                <option value="code">Code Generator</option>
                <option value="hybrid">Hybrid Model</option>
              </select>
            </div>
          </div>

          {/* Training Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">Epochs</label>
              <input
                type="number"
                value={trainingSettings.epochs}
                onChange={(e) => setTrainingSettings((prev) => ({ ...prev, epochs: Number.parseInt(e.target.value) }))}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:border-terminal-green focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">Learning Rate</label>
              <input
                type="number"
                step="0.0001"
                value={trainingSettings.learningRate}
                onChange={(e) =>
                  setTrainingSettings((prev) => ({ ...prev, learningRate: Number.parseFloat(e.target.value) }))
                }
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:border-terminal-green focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">Batch Size</label>
              <input
                type="number"
                value={trainingSettings.batchSize}
                onChange={(e) =>
                  setTrainingSettings((prev) => ({ ...prev, batchSize: Number.parseInt(e.target.value) }))
                }
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:border-terminal-green focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Dataset Upload */}
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 space-y-6">
          <h3 className="text-xl font-bold text-terminal-green flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Training Dataset
          </h3>

          {/* Upload Area */}
          <div className="border-2 border-dashed border-magenta rounded-lg p-8 text-center hover:border-magenta/80 transition-colors">
            <input
              type="file"
              multiple
              accept=".txt,.json,.csv"
              onChange={handleFileUpload}
              className="hidden"
              id="dataset-upload"
            />
            <label htmlFor="dataset-upload" className="cursor-pointer">
              <Upload className="w-12 h-12 text-magenta mx-auto mb-4" />
              <p className="text-white font-semibold mb-2">Upload Training Data</p>
              <p className="text-gray-400 text-sm">
                Drag and drop files here, or click to browse
                <br />
                Supported formats: TXT, JSON, CSV
              </p>
            </label>
          </div>

          {/* Uploaded Files */}
          {trainingData.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Uploaded Files ({trainingData.length})</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {trainingData.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700 rounded p-3">
                    <div>
                      <div className="text-terminal-green font-semibold">{file.name}</div>
                      <div className="text-gray-400 text-sm">{(file.size / 1024).toFixed(1)} KB</div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Training Controls */}
        <div className="flex gap-4">
          <Button
            className="flex-1 bg-magenta text-black hover:bg-magenta/90 py-4 text-lg font-bold transition-all duration-300 hover:shadow-magenta-glow flex items-center gap-2"
            disabled={!modelName || trainingData.length === 0}
          >
            <Zap className="w-5 h-5" />
            Start Training
          </Button>
          <Button variant="outline" className="border-gray-600 text-gray-400 hover:border-gray-500 px-8 bg-transparent">
            Save Draft
          </Button>
        </div>

        {/* Training Tips */}
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
          <h4 className="font-bold text-terminal-green mb-3">Training Tips</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Upload at least 100 examples for effective training</li>
            <li>• Higher quality datasets produce better results</li>
            <li>• Training typically takes 30-60 minutes depending on dataset size</li>
            <li>• You can monitor progress in the Training Panel</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
