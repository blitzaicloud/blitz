import { useState } from 'react'

const CPUIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <rect x="7" y="7" width="10" height="10" fill="currentColor" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <circle cx="12" cy="4" r="2" fill="currentColor" />
    <circle cx="6" cy="16" r="2" fill="currentColor" />
    <circle cx="18" cy="16" r="2" fill="currentColor" />
    <path d="M12 6v4M12 10L6 14M12 10l6 4" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
    <path d="M2 12l10 5 10-5M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="currentColor" />
    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M8 10h8M8 14h6m-9 4h10.6c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C17.2 17.24 17.2 16.96 17.2 16.4V7.6c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C16.44 6 16.16 6 15.6 6H5.4c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437C3.8 6.76 3.8 7.04 3.8 7.6v13.5L7 18z" stroke="currentColor" fill="none" strokeWidth="2" />
  </svg>
)

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <circle cx="12" cy="8" r="4" />
    <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
  </svg>
)

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M7 3h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
    <path d="M14 3v5h5" stroke="white" fill="none" strokeWidth="1.5" />
  </svg>
)

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M6 6l4.5 4.5M13.5 13.5L18 18m0-12l-4.5 4.5M10.5 13.5L6 18" />
  </svg>
)

const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400">
    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
)

const CreditCardIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 9h20" stroke="white" strokeWidth="1.5" />
  </svg>
)

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
    <circle cx="11" cy="11" r="8" strokeWidth="2" />
    <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

type NavPage = 'Overview' | 'Agents' | 'Provision' | 'Deployments' | 'Settings'

function App() {
  const [activePage, setActivePage] = useState<NavPage>('Overview')
  const [activeTab, setActiveTab] = useState('System State')
  const [selectedPayment, setSelectedPayment] = useState('api')

  const deploymentSlots = [
    { name: 'GPT-4 Turbo', amount: 0, period: 'Ready', icon: CPUIcon, iconColor: 'text-amber-500' },
    { name: 'Claude 3.5', amount: 0, period: 'Ready', icon: NetworkIcon, iconColor: 'text-orange-500' },
    { name: 'Gemini Pro', amount: 0, period: 'Ready', icon: LayersIcon, iconColor: 'text-blue-500' },
    { name: 'Local LLaMA', amount: 0, period: 'Ready', icon: DatabaseIcon, iconColor: 'text-slate-600' }
  ]

  const chartData = [
    { month: 'W1', lastMonth: 0, runningMonth: 0 },
    { month: 'W2', lastMonth: 0, runningMonth: 0 },
    { month: 'W3', lastMonth: 0, runningMonth: 0 },
    { month: 'W4', lastMonth: 0, runningMonth: 0 },
    { month: 'W5', lastMonth: 0, runningMonth: 0 },
    { month: 'W6', lastMonth: 0, runningMonth: 0 },
    { month: 'W7', lastMonth: 0, runningMonth: 0 }
  ]

  const systemMetrics = [
    { stars: 5, percentage: 0, count: '0%' },
    { stars: 4, percentage: 0, count: '0%' },
    { stars: 3, percentage: 0, count: '0%' },
    { stars: 2, percentage: 0, count: '0%' }
  ]

  const renderContent = () => {
    switch (activePage) {
      case 'Overview':
        return <OverviewPage
          deploymentSlots={deploymentSlots}
          chartData={chartData}
          systemMetrics={systemMetrics}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
        />
      case 'Agents':
        return <AgentsPage />
      case 'Provision':
        return <ProvisionPage />
      case 'Deployments':
        return <DeploymentsPage />
      case 'Settings':
        return <SettingsPage />
      default:
        return null
    }
  }

  return (
    <div className="h-screen bg-[#1a1a1e] text-white flex overflow-hidden font-sans">
      <aside className="w-64 bg-[#0f0f11] p-5 flex flex-col border-r border-[#2a2a30]">
        <div className="flex items-center mb-10 px-2">
          <span className="text-4xl font-bold tracking-tight metallic-logo uppercase">blitz</span>
        </div>

        <nav className="space-y-1 flex-1">
          <button
            onClick={() => setActivePage('Overview')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activePage === 'Overview'
                ? 'bg-white text-black'
                : 'text-gray-400 hover:text-white hover:bg-[#1a1a1e]'
            }`}
          >
            <HomeIcon />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActivePage('Agents')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activePage === 'Agents'
                ? 'bg-white text-black'
                : 'text-gray-400 hover:text-white hover:bg-[#1a1a1e]'
            }`}
          >
            <MessageIcon />
            <span>Agents</span>
          </button>
          <button
            onClick={() => setActivePage('Provision')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activePage === 'Provision'
                ? 'bg-white text-black'
                : 'text-gray-400 hover:text-white hover:bg-[#1a1a1e]'
            }`}
          >
            <UserIcon />
            <span>Provision</span>
          </button>
          <button
            onClick={() => setActivePage('Deployments')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activePage === 'Deployments'
                ? 'bg-white text-black'
                : 'text-gray-400 hover:text-white hover:bg-[#1a1a1e]'
            }`}
          >
            <DocumentIcon />
            <span>Deployments</span>
          </button>
          <button
            onClick={() => setActivePage('Settings')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activePage === 'Settings'
                ? 'bg-white text-black'
                : 'text-gray-400 hover:text-white hover:bg-[#1a1a1e]'
            }`}
          >
            <SettingsIcon />
            <span>Settings</span>
          </button>
        </nav>

        <div className="mt-auto pt-4 border-t border-[#2a2a30]">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1a1a1e] transition-all cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1e] border border-[#2a2a30] flex items-center justify-center text-white">
  <CPUIcon />
          </div>
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-semibold text-white">Operator</div>
              <div className="text-xs text-gray-400">operator@blitz.ai</div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-[#2a2a30] flex items-center justify-between px-6 bg-[#0f0f11]">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="flex-1 flex items-center gap-3 bg-[#1a1a1e] rounded-lg px-4 py-2 border border-[#2a2a30]">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-gray-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#1a1a1e] transition-all relative">
              <BellIcon />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></div>
            </button>
            <div className="flex items-center gap-2 bg-[#1a1a1e] px-3 py-2 rounded-lg border border-[#2a2a30]">
              <CreditCardIcon />
              <span className="text-sm font-medium">12.4K</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto bg-[#1a1a1e]">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}

function OverviewPage({ deploymentSlots, chartData, systemMetrics, activeTab, setActiveTab, selectedPayment, setSelectedPayment }: any) {
  return (
    <div className="p-6">
      <div className="flex gap-6">
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-1 metallic-text-strong">Overview</h1>
            <p className="text-sm text-gray-400">Monitor your deployment metrics and system performance</p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {deploymentSlots.map((slot, idx) => {
              const Icon = slot.icon
              return (
                <div key={idx} className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-5 hover:border-[#3a3a40] transition-all cursor-pointer group">
                  <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4 ${slot.iconColor} group-hover:scale-105 transition-transform`}>
                    <Icon />
                  </div>
                  <div className="text-xs text-gray-400 mb-1 font-medium">{slot.name}</div>
                  <div className="text-2xl font-bold mb-0.5 metallic-text-strong">{slot.amount.toLocaleString()}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{slot.period}</div>
                </div>
              )
            })}
          </div>

          <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold metallic-text-strong">Execution Throughput</h2>
                <p className="text-xs text-gray-400 mt-0.5">Weekly execution metrics</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#1a1a1e] transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="px-3 text-gray-300 font-medium">Cycle 07, 2026</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#1a1a1e] transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl font-bold metallic-text-strong">0</div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
                  </svg>
                  <span>+12% from previous cycle</span>
                </div>
              </div>

              <div className="flex items-center gap-5 text-xs mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                  <span className="text-gray-400 font-medium">Previous Cycle</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <span className="text-gray-400 font-medium">Current Cycle</span>
                </div>
              </div>

              <div className="h-40 flex items-end gap-3">
                {chartData.map((data: any, idx: number) => (
                  <div key={idx} className="flex-1 flex items-end gap-1.5">
                    <div
                      className="flex-1 bg-gray-600 rounded-t hover:bg-gray-500 transition-all cursor-pointer"
                      style={{ height: `${data.lastMonth * 3.5}px` }}
                    ></div>
                    <div
                      className="flex-1 bg-white rounded-t hover:bg-gray-100 transition-all cursor-pointer"
                      style={{ height: `${data.runningMonth * 3.5}px` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                {chartData.map((data: any, idx: number) => (
                  <div key={idx} className="flex-1 text-center font-medium">{data.month}</div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#2a2a30] pt-5">
              <div className="flex gap-6 mb-5 text-sm border-b border-[#2a2a30]">
                <button
                  onClick={() => setActiveTab('System State')}
                  className={`pb-3 font-medium transition-all relative ${activeTab === 'System State' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  System State
                  {activeTab === 'System State' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('Documentation')}
                  className={`pb-3 font-medium transition-all relative ${activeTab === 'Documentation' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Documentation
                  {activeTab === 'Documentation' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('Release Notes')}
                  className={`pb-3 font-medium transition-all relative ${activeTab === 'Release Notes' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Release Notes
                  {activeTab === 'Release Notes' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('Performance')}
                  className={`pb-3 font-medium transition-all relative ${activeTab === 'Performance' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Performance
                  {activeTab === 'Performance' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                  )}
                </button>
              </div>

              {activeTab === 'System State' && (
                <div className="flex items-start gap-10">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2 metallic-text-strong">99.4</div>
                    <div className="flex gap-1 mb-2 justify-center">
                      {[1,2,3,4,5].map(star => (
                        <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-amber-400">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">Uptime %</div>
                  </div>

                  <div className="flex-1 space-y-3">
                    {systemMetrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-[#2a2a30] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-white rounded-full transition-all"
                            style={{ width: `${metric.percentage}%` }}
                          ></div>
                        </div>
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map(star => (
                            <svg key={star} viewBox="0 0 24 24" fill="currentColor" className={`w-3 h-3 ${star <= metric.stars ? 'text-amber-400' : 'text-gray-700'}`}>
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-400 w-12 font-medium">{metric.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Documentation' && (
                <div className="text-sm text-gray-300 leading-relaxed space-y-4">
                  <div>
                    <div className="font-semibold text-white mb-2">Core Architecture</div>
                    <p>Blitz operates as a stateless orchestration layer. Agent instances are provisioned on-demand within isolated execution contexts.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-2">Deployment Protocol</div>
                    <p>Agents enter the provisioning queue upon configuration submission. The system assigns execution slots based on capacity availability.</p>
                  </div>
                </div>
              )}

              {activeTab === 'Release Notes' && (
                <div className="space-y-4">
                  <div className="border-l-2 border-white pl-4">
                    <div className="text-xs text-gray-500 mb-1">Cycle 07.2026</div>
                    <div className="font-semibold text-white mb-1.5">Runtime optimization layer deployed</div>
                    <div className="text-sm text-gray-400">Execution slot allocation algorithm updated. Reduced provisioning latency by 34%.</div>
                  </div>
                  <div className="border-l-2 border-gray-600 pl-4">
                    <div className="text-xs text-gray-500 mb-1">Cycle 06.2026</div>
                    <div className="font-semibold text-white mb-1.5">Queue management system refactored</div>
                    <div className="text-sm text-gray-400">Introduced priority-based slot assignment. Improved state persistence.</div>
                  </div>
                </div>
              )}

              {activeTab === 'Performance' && (
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#1a1a1e] border border-[#2a2a30] rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-2">Avg Response Time</div>
                    <div className="text-2xl font-bold metallic-text-strong">247ms</div>
                    <div className="text-xs text-emerald-400 mt-1">-18% from last cycle</div>
                  </div>
                  <div className="bg-[#1a1a1e] border border-[#2a2a30] rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-2">Success Rate</div>
                    <div className="text-2xl font-bold metallic-text-strong">99.8%</div>
                    <div className="text-xs text-emerald-400 mt-1">+0.3% from last cycle</div>
                  </div>
                  <div className="bg-[#1a1a1e] border border-[#2a2a30] rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-2">Active Deployments</div>
                    <div className="text-2xl font-bold metallic-text-strong">2,912</div>
                    <div className="text-xs text-gray-500 mt-1">Across 4 models</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <aside className="w-80">
          <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-5 sticky top-6">
            <h3 className="text-sm font-semibold mb-4 metallic-text">Agent Initialization</h3>

            <div className="space-y-2.5 mb-5">
              <button
                onClick={() => setSelectedPayment('api')}
                className={`w-full p-3.5 rounded-lg text-left transition-all border ${selectedPayment === 'api' ? 'bg-white text-black border-white' : 'bg-transparent border-[#2a2a30] hover:border-[#3a3a40]'}`}
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <div className={`w-4 h-4 rounded-full border-2 ${selectedPayment === 'api' ? 'border-black bg-black' : 'border-gray-600'}`}>
                    {selectedPayment === 'api' && <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>}
                  </div>
                  <span className="font-semibold text-sm">API Key</span>
                </div>
                <div className={`text-xs ml-7 ${selectedPayment === 'api' ? 'text-gray-700' : 'text-gray-500'}`}>Direct authentication via provisioned API key</div>
              </button>

              <button
                onClick={() => setSelectedPayment('oauth')}
                className={`w-full p-3.5 rounded-lg text-left transition-all border ${selectedPayment === 'oauth' ? 'bg-white text-black border-white' : 'bg-transparent border-[#2a2a30] hover:border-[#3a3a40]'}`}
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <div className={`w-4 h-4 rounded-full border-2 ${selectedPayment === 'oauth' ? 'border-black bg-black' : 'border-gray-600'}`}>
                    {selectedPayment === 'oauth' && <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>}
                  </div>
                  <span className="font-semibold text-sm">OAuth 2.0</span>
                </div>
                <div className={`text-xs ml-7 ${selectedPayment === 'oauth' ? 'text-gray-700' : 'text-gray-500'}`}>Token-based authentication with refresh cycles</div>
              </button>
            </div>

            <div className="mb-5 pb-5 border-b border-[#2a2a30]">
              <div className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-medium">Model Configuration</div>
              <div className="text-xl font-bold mb-4 metallic-text-strong">GPT-4 <span className="text-sm font-normal text-gray-500">Turbo</span></div>

              <div className="flex items-start gap-3 bg-[#1a1a1e] border border-[#2a2a30] rounded-lg p-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <CPUIcon />
                </div>
                <div>
                  <div className="font-medium text-sm mb-0.5">Primary Model</div>
                  <div className="text-xs text-gray-500">128K context window</div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <div className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-medium">Execution Parameters</div>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-emerald-400">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Autonomous decision-making enabled</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-emerald-400">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Multi-channel deployment routing</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-emerald-400">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Runtime constraint enforcement</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-emerald-400">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">State persistence across cycles</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4 pt-4 border-t border-[#2a2a30]">
              <span className="text-sm text-gray-400">Allocated Load</span>
              <span className="text-xl font-bold metallic-text-strong">4,200</span>
            </div>

            <button className="w-full bg-white text-black py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all active:scale-[0.98]">
              Reserve Execution Slot
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

function AgentsPage() {
  const agents = [
    { id: 1, name: 'GPT-4 Turbo', status: 'Active', requests: '12.4K', uptime: '99.9%', model: 'OpenAI' },
    { id: 2, name: 'Claude 3.5 Sonnet', status: 'Active', requests: '8.2K', uptime: '99.7%', model: 'Anthropic' },
    { id: 3, name: 'Gemini Pro', status: 'Idle', requests: '3.1K', uptime: '98.2%', model: 'Google' },
    { id: 4, name: 'Local LLaMA', status: 'Active', requests: '1.8K', uptime: '97.5%', model: 'Meta' },
  ]

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1 metallic-text-strong">Agents</h1>
        <p className="text-sm text-gray-400">Manage and monitor your deployed AI agents</p>
      </div>

      <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl overflow-hidden">
        <div className="grid grid-cols-5 gap-4 p-4 border-b border-[#2a2a30] text-xs font-semibold text-gray-500 uppercase tracking-wider">
          <div>Agent Name</div>
          <div>Status</div>
          <div>Requests</div>
          <div>Uptime</div>
          <div>Provider</div>
        </div>
        {agents.map(agent => (
          <div key={agent.id} className="grid grid-cols-5 gap-4 p-4 border-b border-[#2a2a30] last:border-0 hover:bg-[#1a1a1e] transition-colors">
            <div className="font-medium">{agent.name}</div>
            <div>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${agent.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-gray-500/10 text-gray-400'}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${agent.status === 'Active' ? 'bg-emerald-400' : 'bg-gray-400'}`}></div>
                {agent.status}
              </span>
            </div>
            <div className="text-gray-300">{agent.requests}</div>
            <div className="text-gray-300">{agent.uptime}</div>
            <div className="text-gray-400 text-sm">{agent.model}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProvisionPage() {
  const [selectedModel, setSelectedModel] = useState('gpt4-turbo')
  const [selectedRole, setSelectedRole] = useState('autonomous')
  const [selectedChannel, setSelectedChannel] = useState('api')
  const [temperature, setTemperature] = useState('0.7')
  const [contextWindow, setContextWindow] = useState('128')
  const [maxTokens, setMaxTokens] = useState('4096')
  const [provisionState, setProvisionState] = useState<'idle' | 'reserved' | 'queued' | 'allocated'>('idle')

  const handleProvision = () => {
    setProvisionState('reserved')
    setTimeout(() => setProvisionState('queued'), 1500)
    setTimeout(() => setProvisionState('allocated'), 3000)
    setTimeout(() => setProvisionState('idle'), 5000)
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2 metallic-text-strong">Configure Your Agent</h1>
        <p className="text-sm text-gray-400">Design your AI agent for upcoming deployment - Currently in preview mode</p>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-5">
        <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-6">
          <h3 className="font-semibold mb-4 metallic-text text-base">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Agent Name</label>
              <input
                type="text"
                placeholder="My Assistant Agent"
                className="w-full bg-[#1a1a1e] border border-[#2a2a30] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white transition-all placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                placeholder="What does this agent do?"
                rows={3}
                className="w-full bg-[#1a1a1e] border border-[#2a2a30] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white transition-all placeholder-gray-600 resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Environment</label>
              <select className="w-full bg-[#1a1a1e] border border-[#2a2a30] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white transition-all">
                <option>Production</option>
                <option>Development</option>
                <option>Testing</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-6">
          <h3 className="font-semibold mb-4 metallic-text text-base">Model Configuration</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">AI Model</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedModel('gpt4-turbo')}
                  className={`p-3 rounded-lg text-left transition-all border ${selectedModel === 'gpt4-turbo' ? 'bg-white text-black border-white' : 'bg-[#1a1a1e] border-[#2a2a30] hover:border-white/20'}`}
                >
                  <div className="font-semibold text-xs mb-0.5">GPT-4 Turbo</div>
                  <div className={`text-xs ${selectedModel === 'gpt4-turbo' ? 'text-gray-700' : 'text-gray-500'}`}>128K</div>
                </button>
                <button
                  onClick={() => setSelectedModel('claude-3.5')}
                  className={`p-3 rounded-lg text-left transition-all border ${selectedModel === 'claude-3.5' ? 'bg-white text-black border-white' : 'bg-[#1a1a1e] border-[#2a2a30] hover:border-white/20'}`}
                >
                  <div className="font-semibold text-xs mb-0.5">Claude 3.5</div>
                  <div className={`text-xs ${selectedModel === 'claude-3.5' ? 'text-gray-700' : 'text-gray-500'}`}>200K</div>
                </button>
                <button
                  onClick={() => setSelectedModel('gemini-pro')}
                  className={`p-3 rounded-lg text-left transition-all border ${selectedModel === 'gemini-pro' ? 'bg-white text-black border-white' : 'bg-[#1a1a1e] border-[#2a2a30] hover:border-white/20'}`}
                >
                  <div className="font-semibold text-xs mb-0.5">Gemini Pro</div>
                  <div className={`text-xs ${selectedModel === 'gemini-pro' ? 'text-gray-700' : 'text-gray-500'}`}>1M</div>
                </button>
                <button
                  onClick={() => setSelectedModel('llama-3')}
                  className={`p-3 rounded-lg text-left transition-all border ${selectedModel === 'llama-3' ? 'bg-white text-black border-white' : 'bg-[#1a1a1e] border-[#2a2a30] hover:border-white/20'}`}
                >
                  <div className="font-semibold text-xs mb-0.5">LLaMA 3</div>
                  <div className={`text-xs ${selectedModel === 'llama-3' ? 'text-gray-700' : 'text-gray-500'}`}>8K</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Temperature: {temperature}</label>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                className="w-full accent-white"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Precise</span>
                <span>Creative</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-2">Context</label>
                <select
                  value={contextWindow}
                  onChange={(e) => setContextWindow(e.target.value)}
                  className="w-full bg-[#1a1a1e] border border-[#2a2a30] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white transition-all"
                >
                  <option value="4">4K</option>
                  <option value="8">8K</option>
                  <option value="16">16K</option>
                  <option value="32">32K</option>
                  <option value="64">64K</option>
                  <option value="128">128K</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Max Output</label>
                <select
                  value={maxTokens}
                  onChange={(e) => setMaxTokens(e.target.value)}
                  className="w-full bg-[#1a1a1e] border border-[#2a2a30] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white transition-all"
                >
                  <option value="512">512</option>
                  <option value="1024">1024</option>
                  <option value="2048">2048</option>
                  <option value="4096">4096</option>
                  <option value="8192">8192</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-6">
          <h3 className="font-semibold mb-4 metallic-text text-base">API Configuration</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">API Key</label>
              <input
                type="password"
                placeholder="sk-..."
                className="w-full bg-[#1a1a1e] border border-[#2a2a30] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white transition-all placeholder-gray-600"
              />
              <p className="text-xs text-gray-500 mt-1.5">Required for agent deployment</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">API Endpoint</label>
              <input
                type="text"
                placeholder="https://api.example.com"
                className="w-full bg-[#1a1a1e] border border-[#2a2a30] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white transition-all placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Rate Limit</label>
              <select className="w-full bg-[#1a1a1e] border border-[#2a2a30] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white transition-all">
                <option>100 req/min</option>
                <option>500 req/min</option>
                <option>1000 req/min</option>
                <option>5000 req/min</option>
                <option>Unlimited</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-5">
        <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-6">
          <h3 className="font-semibold mb-4 metallic-text text-base">Operational Mode</h3>
          <div className="space-y-2.5">
            <button
              onClick={() => setSelectedRole('autonomous')}
              className={`w-full p-3 rounded-lg text-left transition-all border ${selectedRole === 'autonomous' ? 'bg-white text-black border-white' : 'bg-transparent border-[#2a2a30] hover:border-[#3a3a40]'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${selectedRole === 'autonomous' ? 'border-black bg-black' : 'border-gray-600'}`}>
                  {selectedRole === 'autonomous' && <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Autonomous</div>
                  <div className={`text-xs ${selectedRole === 'autonomous' ? 'text-gray-700' : 'text-gray-400'}`}>Full authority</div>
                </div>
              </div>
            </button>
            <button
              onClick={() => setSelectedRole('supervised')}
              className={`w-full p-3 rounded-lg text-left transition-all border ${selectedRole === 'supervised' ? 'bg-white text-black border-white' : 'bg-transparent border-[#2a2a30] hover:border-[#3a3a40]'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${selectedRole === 'supervised' ? 'border-black bg-black' : 'border-gray-600'}`}>
                  {selectedRole === 'supervised' && <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Supervised</div>
                  <div className={`text-xs ${selectedRole === 'supervised' ? 'text-gray-700' : 'text-gray-400'}`}>Requires approval</div>
                </div>
              </div>
            </button>
            <button
              onClick={() => setSelectedRole('advisory')}
              className={`w-full p-3 rounded-lg text-left transition-all border ${selectedRole === 'advisory' ? 'bg-white text-black border-white' : 'bg-transparent border-[#2a2a30] hover:border-[#3a3a40]'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${selectedRole === 'advisory' ? 'border-black bg-black' : 'border-gray-600'}`}>
                  {selectedRole === 'advisory' && <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Advisory</div>
                  <div className={`text-xs ${selectedRole === 'advisory' ? 'text-gray-700' : 'text-gray-400'}`}>Suggestions only</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-6">
          <h3 className="font-semibold mb-4 metallic-text text-base">Deployment Channel</h3>
          <div className="space-y-2.5">
            <button
              onClick={() => setSelectedChannel('api')}
              className={`w-full p-3 rounded-lg text-left transition-all border ${selectedChannel === 'api' ? 'bg-white text-black border-white' : 'bg-transparent border-[#2a2a30] hover:border-[#3a3a40]'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${selectedChannel === 'api' ? 'border-black bg-black' : 'border-gray-600'}`}>
                  {selectedChannel === 'api' && <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">REST API</div>
                  <div className={`text-xs ${selectedChannel === 'api' ? 'text-gray-700' : 'text-gray-400'}`}>HTTP/HTTPS</div>
                </div>
              </div>
            </button>
            <button
              onClick={() => setSelectedChannel('webhook')}
              className={`w-full p-3 rounded-lg text-left transition-all border ${selectedChannel === 'webhook' ? 'bg-white text-black border-white' : 'bg-transparent border-[#2a2a30] hover:border-[#3a3a40]'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${selectedChannel === 'webhook' ? 'border-black bg-black' : 'border-gray-600'}`}>
                  {selectedChannel === 'webhook' && <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Webhook</div>
                  <div className={`text-xs ${selectedChannel === 'webhook' ? 'text-gray-700' : 'text-gray-400'}`}>Event-driven</div>
                </div>
              </div>
            </button>
            <button
              onClick={() => setSelectedChannel('stream')}
              className={`w-full p-3 rounded-lg text-left transition-all border ${selectedChannel === 'stream' ? 'bg-white text-black border-white' : 'bg-transparent border-[#2a2a30] hover:border-[#3a3a40]'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${selectedChannel === 'stream' ? 'border-black bg-black' : 'border-gray-600'}`}>
                  {selectedChannel === 'stream' && <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">WebSocket</div>
                  <div className={`text-xs ${selectedChannel === 'stream' ? 'text-gray-700' : 'text-gray-400'}`}>Real-time</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-6">
          <h3 className="font-semibold mb-4 metallic-text text-base">Security & Privacy</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-[#1a1a1e] border border-[#2a2a30] rounded-lg">
              <div className="flex-1">
                <div className="text-sm font-medium">Audit Logging</div>
                <div className="text-xs text-gray-400 mt-0.5">Track all actions</div>
              </div>
              <input type="checkbox" defaultChecked className="cursor-pointer w-4 h-4" />
            </div>
            <div className="flex items-center justify-between p-3 bg-[#1a1a1e] border border-[#2a2a30] rounded-lg">
              <div className="flex-1">
                <div className="text-sm font-medium">Data Encryption</div>
                <div className="text-xs text-gray-400 mt-0.5">End-to-end security</div>
              </div>
              <input type="checkbox" defaultChecked className="cursor-pointer w-4 h-4" />
            </div>
            <div className="flex items-center justify-between p-3 bg-[#1a1a1e] border border-[#2a2a30] rounded-lg">
              <div className="flex-1">
                <div className="text-sm font-medium">Content Filter</div>
                <div className="text-xs text-gray-400 mt-0.5">Safety constraints</div>
              </div>
              <input type="checkbox" className="cursor-pointer w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5">
              <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
            </svg>
            <div className="flex-1">
              <div className="text-sm font-semibold text-blue-400 mb-1">Preview Mode - Agent Configuration</div>
              <div className="text-xs text-gray-400 leading-relaxed mb-3">
                You're configuring your AI agent for the upcoming launch. All settings will be saved and your agent will be ready to deploy when the platform goes live. Enter your API credentials and customize every aspect of your agent's behavior, model selection, and deployment preferences. Your configuration will be preserved for immediate activation.
              </div>

              {provisionState === 'allocated' && (
                <div className="mt-3 pt-3 border-t border-blue-500/30">
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-400">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <div>
                      <div className="text-xs font-semibold text-emerald-400">Configuration Saved Successfully</div>
                      <div className="text-xs text-gray-400 mt-0.5">Agent Profile ID: <span className="font-mono text-white">BLZ-{Math.random().toString(36).substring(2, 6).toUpperCase()}-{Math.random().toString(36).substring(2, 6).toUpperCase()}</span></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-6">
          <div className="mb-4">
            <div className="text-sm font-semibold metallic-text mb-1">Configuration Status</div>
            <div className="text-xs text-gray-500">Ready for launch</div>
          </div>

          <button
            onClick={handleProvision}
            disabled={provisionState !== 'idle'}
            className="w-full bg-white text-black py-3.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mb-3"
          >
            {provisionState === 'idle' ? 'Save Configuration' : 'Saving...'}
          </button>

          <button className="w-full bg-transparent border border-[#2a2a30] text-white py-3.5 rounded-lg text-sm font-semibold hover:bg-[#1a1a1e] transition-all">
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  )
}

function DeploymentsPage() {
  const deployments = [
    { id: 1, name: 'Production API', version: 'v2.4.1', status: 'Live', deployed: '2 hours ago' },
    { id: 2, name: 'Staging Environment', version: 'v2.5.0-beta', status: 'Live', deployed: '1 day ago' },
    { id: 3, name: 'Development Build', version: 'v2.5.0-alpha', status: 'Building', deployed: '5 minutes ago' },
    { id: 4, name: 'Testing Suite', version: 'v2.4.0', status: 'Live', deployed: '3 days ago' },
  ]

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1 metallic-text-strong">Deployments</h1>
          <p className="text-sm text-gray-400">Monitor and manage your deployment pipeline</p>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all">
          New Deployment
        </button>
      </div>

      <div className="grid gap-4">
        {deployments.map(deployment => (
          <div key={deployment.id} className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-5 hover:border-[#3a3a40] transition-all">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold">{deployment.name}</h3>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${deployment.status === 'Live' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${deployment.status === 'Live' ? 'bg-emerald-400' : 'bg-blue-400'}`}></div>
                    {deployment.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{deployment.version}</span>
                  <span>•</span>
                  <span>Deployed {deployment.deployed}</span>
                </div>
              </div>
              <button className="px-4 py-2 border border-[#2a2a30] rounded-lg text-sm font-medium hover:bg-[#1a1a1e] transition-all">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 metallic-text-strong">Settings</h1>
        <p className="text-sm text-gray-400">Configure your workspace and preferences</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-6">
          <h3 className="font-semibold mb-5 metallic-text text-base">General Settings</h3>
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-5 border-b border-[#2a2a30]">
              <div>
                <div className="font-medium text-sm mb-1">Email Notifications</div>
                <div className="text-xs text-gray-500">Receive updates about your deployments</div>
              </div>
              <button className="w-11 h-6 bg-white rounded-full relative transition-all">
                <div className="w-5 h-5 bg-black rounded-full absolute top-0.5 right-0.5 transition-all"></div>
              </button>
            </div>
            <div className="flex items-center justify-between pb-5 border-b border-[#2a2a30]">
              <div>
                <div className="font-medium text-sm mb-1">Auto-deploy</div>
                <div className="text-xs text-gray-500">Automatically deploy on push to main</div>
              </div>
              <button className="w-11 h-6 bg-[#2a2a30] rounded-full relative transition-all">
                <div className="w-5 h-5 bg-gray-600 rounded-full absolute top-0.5 left-0.5 transition-all"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-sm mb-1">Dark Mode</div>
                <div className="text-xs text-gray-500">Use dark theme interface</div>
              </div>
              <button className="w-11 h-6 bg-white rounded-full relative transition-all">
                <div className="w-5 h-5 bg-black rounded-full absolute top-0.5 right-0.5 transition-all"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-6">
          <h3 className="font-semibold mb-5 metallic-text text-base">API Access</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-3">API Key</label>
              <div className="flex gap-3">
                <input type="password" value="sk_live_****************************" readOnly className="flex-1 bg-[#1a1a1e] border border-[#2a2a30] rounded-lg px-4 py-3 text-sm focus:outline-none" />
                <button className="px-5 py-3 border border-[#2a2a30] rounded-lg text-sm font-medium hover:bg-[#1a1a1e] transition-all">
                  Regenerate
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Keep your API key secure and never share it</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0f0f11] border border-[#2a2a30] rounded-xl p-6 col-span-2">
          <h3 className="font-semibold mb-5 metallic-text text-base">Workspace</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-3">Workspace Name</label>
              <input type="text" value="My Workspace" className="w-full bg-[#1a1a1e] border border-[#2a2a30] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3">Workspace ID</label>
              <input type="text" value="ws_7d9f8e4a2b1c" readOnly className="w-full bg-[#1a1a1e] border border-[#2a2a30] rounded-lg px-4 py-3 text-sm focus:outline-none text-gray-500" />
            </div>
          </div>
        </div>

        <div className="bg-[#0f0f11] border border-red-900/30 rounded-xl p-6 col-span-2">
          <h3 className="font-semibold text-red-400 mb-2 text-base">Danger Zone</h3>
          <p className="text-sm text-gray-400 mb-5">Irreversible and destructive actions</p>
          <button className="px-5 py-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-sm font-medium hover:bg-red-500/20 transition-all">
            Delete Workspace
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
