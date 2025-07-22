"use client"
import { Calendar, Tag, FileText, Download, Share2, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  name: string
  type: "ASCII Art" | "Generative Poem" | "Code Snippet" | "Musical MIDI"
  content: string
  tags: string[]
  createdAt: string
  description: string
  size: string
}

interface ProjectDetailsPanelProps {
  selectedProject?: Project | null
}

export function ProjectDetailsPanel({ selectedProject }: ProjectDetailsPanelProps) {
  const defaultStats = {
    projectsCreated: 14,
    modelsTrained: 1,
    storageUsed: 2.5,
    storageTotal: 10,
  }

  return (
    <div className="w-80 bg-gray-800 border-l border-gray-700 p-6 overflow-y-auto">
      <div className="space-y-6">
        {!selectedProject ? (
          // Default State - Storage Stats
          <>
            <div>
              <h3 className="text-lg font-bold text-terminal-green mb-4 flex items-center gap-2">
                <span className="text-gray-500">//</span> STORAGE_STATS
              </h3>
            </div>

            <div className="space-y-4">
              {/* Projects Created */}
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Projects Created</span>
                  <span className="text-terminal-green font-bold text-xl">{defaultStats.projectsCreated}</span>
                </div>
                <div className="text-xs text-gray-500">Total projects in your library</div>
              </div>

              {/* Models Trained */}
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Models Trained</span>
                  <span className="text-magenta font-bold text-xl">{defaultStats.modelsTrained}</span>
                </div>
                <div className="text-xs text-gray-500">Custom AI models created</div>
              </div>

              {/* Storage Usage */}
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Storage Used</span>
                  <span className="text-yellow-500 font-bold text-xl">
                    {defaultStats.storageUsed} / {defaultStats.storageTotal} GB
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(defaultStats.storageUsed / defaultStats.storageTotal) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-gray-500">
                  {Math.round(
                    ((defaultStats.storageTotal - defaultStats.storageUsed) / defaultStats.storageTotal) * 100,
                  )}
                  % remaining
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                <h4 className="text-terminal-green font-semibold mb-3">Recent Activity</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-terminal-green"></div>
                    <span className="text-gray-300">Created "Cyberpunk Portrait"</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-magenta"></div>
                    <span className="text-gray-300">Generated new poem</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300">Shared to gallery</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Button className="w-full bg-terminal-green text-black hover:bg-terminal-green/90" asChild>
                  <a href="/dashboard">Create New Project</a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-magenta text-magenta hover:bg-magenta hover:text-black bg-transparent"
                  asChild
                >
                  <a href="/dashboard/train">Train Custom Model</a>
                </Button>
              </div>
            </div>
          </>
        ) : (
          // Selected Project Details
          <>
            <div>
              <h3 className="text-lg font-bold text-terminal-green mb-4 flex items-center gap-2">
                <span className="text-gray-500">//</span> DETAILS
              </h3>
              <h4 className="text-white font-semibold text-lg mb-2">{selectedProject.name}</h4>
            </div>

            <div className="space-y-4">
              {/* Large Preview */}
              <div className="bg-black border border-gray-600 rounded-lg overflow-hidden">
                <div className="bg-gray-900 px-3 py-2 border-b border-gray-600 flex items-center justify-between">
                  <span className="text-xs text-gray-400">preview.txt</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-terminal-green"></div>
                  </div>
                </div>
                <div className="p-4 max-h-64 overflow-auto">
                  <pre className="text-terminal-green text-xs leading-tight">{selectedProject.content}</pre>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-semibold text-gray-300">Description</span>
                </div>
                <p className="text-gray-400 text-sm">{selectedProject.description}</p>
              </div>

              {/* Metadata */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-400 uppercase tracking-wide">Created</span>
                  <span className="text-white text-sm">{selectedProject.createdAt}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-400 uppercase tracking-wide">Type</span>
                  <span className="text-terminal-green text-sm font-semibold">{selectedProject.type}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-400 uppercase tracking-wide">Size</span>
                  <span className="text-white text-sm">{selectedProject.size}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-4 border-t border-gray-700">
                <Button className="w-full bg-terminal-green text-black hover:bg-terminal-green/90 flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Project
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-magenta text-magenta hover:bg-magenta hover:text-black flex items-center gap-2 bg-transparent"
                >
                  <Share2 className="w-4 h-4" />
                  Share to Gallery
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black flex items-center gap-2 bg-transparent"
                >
                  <Download className="w-4 h-4" />
                  Export Project
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-500 flex items-center gap-2 bg-transparent"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Project
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
