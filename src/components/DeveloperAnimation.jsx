import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  GitBranch, 
  Cpu, 
  Palette, 
  Layers, 
  Zap, 
  Laptop
} from 'lucide-react';

export default function DeveloperAnimation() {
  const [activeTab, setActiveTab] = useState('react');
  const [viewMode, setViewMode] = useState('code'); // 'code' or 'preview'
  const [isRunning, setIsRunning] = useState(false);
  const [runSuccess, setRunSuccess] = useState(false);
  const [counter, setCounter] = useState(0);

  // Auto-pulse status counter to show real-time liveness
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => (prev + 1) % 100);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleRunCode = () => {
    setIsRunning(true);
    setRunSuccess(false);
    setTimeout(() => {
      setIsRunning(false);
      setRunSuccess(true);
      setTimeout(() => setRunSuccess(false), 3000);
    }, 700);
  };

  const codeSnippets = {
    react: [
      { num: '01', content: <><span className="text-champagne-500 font-semibold">import</span> <span className="text-cream-100">{'{'} useState, useMemo {'}'}</span> <span className="text-champagne-500 font-semibold">from</span> <span className="text-rose-300">'react'</span>;</> },
      { num: '02', content: <><span className="text-champagne-500 font-semibold">import</span> <span className="text-cream-100">{'{'} CreativeStorytelling {'}'}</span> <span className="text-champagne-500 font-semibold">from</span> <span className="text-rose-300">'@falah/design'</span>;</> },
      { num: '03', content: <span className="text-stone-400 italic">// Developer Architecture &bull; BCA Kodagu Univ.</span> },
      { num: '04', content: <><span className="text-champagne-500 font-semibold">export default function</span> <span className="text-cream-50 font-bold">FalahProfile</span>() {'{'}</> },
      { num: '05', content: <>&nbsp;&nbsp;<span className="text-champagne-500 font-semibold">const</span> [developer] = <span className="text-amber-300">useState</span>({'{'}</> },
      { num: '06', content: <>&nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-rose-300">"Falah Abdussalam"</span>,</> },
      { num: '07', content: <>&nbsp;&nbsp;&nbsp;&nbsp;role: <span className="text-rose-300">"Frontend Developer &amp; Graphic Designer"</span>,</> },
      { num: '08', content: <>&nbsp;&nbsp;&nbsp;&nbsp;experience: {'{'} web: <span className="text-emerald-400 font-mono">"2+ Years"</span>, design: <span className="text-emerald-400 font-mono">"5+ Years"</span> {'}'},</> },
      { num: '09', content: <>&nbsp;&nbsp;&nbsp;&nbsp;currentOffice: <span className="text-rose-300">"Ziqx Creative Clique LLP"</span>,</> },
      { num: '10', content: <>&nbsp;&nbsp;&nbsp;&nbsp;aiCertified: <span className="text-rose-300">"Dubai 1 Million Prompters"</span>,</> },
      { num: '11', content: <>&nbsp;&nbsp;&nbsp;&nbsp;performance: <span className="text-emerald-400 font-mono">"100/100 Lighthouse"</span></> },
      { num: '12', content: <>&nbsp;&nbsp;{'}'});</> },
      { num: '13', content: <>&nbsp;&nbsp;<span className="text-champagne-500 font-semibold">return</span> (</> },
      { num: '14', content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-200">&lt;FlawlessUI</span> <span className="text-champagne-400">responsive</span> <span className="text-champagne-400">cleanCode</span>={'true'}&nbsp;<span className="text-amber-200">/&gt;</span></> },
      { num: '15', content: <>&nbsp;&nbsp;);</> },
      { num: '16', content: <span className="text-cream-100">{'}'}</span> },
    ],
    tokens: [
      { num: '01', content: <span className="text-stone-400 italic">/* Design System &bull; White Cream &amp; Dark Maroon */</span> },
      { num: '02', content: <><span className="text-champagne-500 font-semibold">:root</span> {'{'}</> },
      { num: '03', content: <>&nbsp;&nbsp;<span className="text-amber-300">--bg-cream-100</span>: <span className="text-rose-300">#FDFBF7</span>; <span className="text-stone-400">/* Luxury White Cream */</span></> },
      { num: '04', content: <>&nbsp;&nbsp;<span className="text-amber-300">--bg-cream-card</span>: <span className="text-rose-300">#FFFFFF</span>;</> },
      { num: '05', content: <>&nbsp;&nbsp;<span className="text-amber-300">--maroon-deep</span>: <span className="text-rose-300">#1A0309</span>; <span className="text-stone-400">/* Deepest Velvet */</span></> },
      { num: '06', content: <>&nbsp;&nbsp;<span className="text-amber-300">--maroon-primary</span>: <span className="text-rose-300">#4A0A1A</span>;</> },
      { num: '07', content: <>&nbsp;&nbsp;<span className="text-amber-300">--maroon-accent</span>: <span className="text-rose-300">#6E1128</span>;</> },
      { num: '08', content: <>&nbsp;&nbsp;<span className="text-amber-300">--gold-accent</span>: <span className="text-rose-300">#C5A059</span>; <span className="text-stone-400">/* Champagne Gold */</span></> },
      { num: '09', content: <>&nbsp;&nbsp;<span className="text-amber-300">--font-heading</span>: <span className="text-rose-300">"Plus Jakarta Sans"</span>, sans-serif;</> },
      { num: '10', content: <>&nbsp;&nbsp;<span className="text-amber-300">--font-serif</span>: <span className="text-rose-300">"Playfair Display"</span>, serif;</> },
      { num: '11', content: <>&nbsp;&nbsp;<span className="text-amber-300">--border-radius</span>: <span className="text-emerald-400 font-mono">1.25rem</span>;</> },
      { num: '12', content: <>&nbsp;&nbsp;<span className="text-amber-300">--fluid-animation</span>: <span className="text-rose-300">cubic-bezier(0.16, 1, 0.3, 1)</span>;</> },
      { num: '13', content: <span className="text-cream-100">{'}'}</span> },
    ],
    ai: [
      { num: '01', content: <span className="text-stone-400 italic">// Dubai 1M Prompters &bull; Generative Pipeline</span> },
      { num: '02', content: <><span className="text-champagne-500 font-semibold">interface</span> <span className="text-cream-50 font-bold">PromptEngineConfig</span> {'{'}</> },
      { num: '03', content: <>&nbsp;&nbsp;initiative: <span className="text-rose-300">"Dubai 1 Million Prompters"</span>;</> },
      { num: '04', content: <>&nbsp;&nbsp;specialization: <span className="text-rose-300">"Few-Shot + Context Optimization"</span>;</> },
      { num: '05', content: <>&nbsp;&nbsp;acceleration: <span className="text-emerald-400 font-mono">"5x Prototyping Velocity"</span>;</> },
      { num: '06', content: <>&nbsp;&nbsp;outputs: [<span className="text-rose-300">"Component Specs"</span>, <span className="text-rose-300">"Brand Visuals"</span>];</> },
      { num: '07', content: <span className="text-cream-100">{'}'}</span> },
      { num: '08', content: <><span className="text-champagne-500 font-semibold">export const</span> <span className="text-amber-300">executePromptPipeline</span> = () =&gt; {'{'}</> },
      { num: '09', content: <>&nbsp;&nbsp;<span className="text-champagne-500 font-semibold">return</span> <span className="text-amber-200">synthesize</span>({'{'} precision: <span className="text-emerald-400">0.99</span>, aesthetic: <span className="text-rose-300">"Premium"</span> {'}'});</> },
      { num: '10', content: <span className="text-cream-100">{'}'};</span> },
    ]
  };

  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      
      {/* Ambient Glows */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-maroon-700/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-champagne-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative Developer Background Elements */}
      <div className="absolute -top-4 -left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-50 border border-maroon-800/20 shadow-lg text-xs font-mono font-bold text-maroon-900 animate-bounce" style={{ animationDuration: '4s' }}>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>&lt;React.Component /&gt;</span>
      </div>

      <div className="absolute -bottom-4 -right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-950 border border-maroon-800 shadow-xl text-xs font-mono font-bold text-champagne-500">
        <Zap className="w-3.5 h-3.5 text-amber-400" />
        <span>Vite 5.4 &bull; 14ms HMR</span>
      </div>

      {/* Main Terminal Frame */}
      <div className="relative rounded-3xl overflow-hidden bg-maroon-950 border-2 border-maroon-800/80 shadow-2xl transition-all duration-300 hover:border-maroon-700/90">
        
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-maroon-900 border-b border-maroon-800 flex items-center justify-between gap-3">
          
          {/* macOS-style Window Dots in Maroon & Cream & Gold */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block shadow-sm" />
          </div>

          {/* File Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {[
              { id: 'react', name: 'FalahDev.tsx', icon: Code2 },
              { id: 'tokens', name: 'ThemeTokens.css', icon: Palette },
              { id: 'ai', name: 'Dubai1M.ai', icon: Sparkles },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setViewMode('code');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                    isActive
                      ? 'bg-maroon-950 text-cream-100 border border-maroon-750 shadow-inner'
                      : 'text-cream-300/60 hover:text-cream-100 hover:bg-maroon-850'
                  }`}
                >
                  <TabIcon className="w-3 h-3" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle Button */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setViewMode(viewMode === 'code' ? 'preview' : 'code')}
              className="p-1.5 rounded-lg bg-maroon-800 hover:bg-maroon-750 text-cream-100 text-xs font-mono border border-maroon-700 transition-colors flex items-center gap-1"
              title="Toggle Live View"
            >
              <Laptop className="w-3.5 h-3.5 text-champagne-500" />
              <span className="hidden md:inline text-[10px] uppercase font-bold">
                {viewMode === 'code' ? 'Preview' : 'Code'}
              </span>
            </button>
          </div>

        </div>

        {/* Terminal Body */}
        {viewMode === 'code' ? (
          <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto min-h-[320px] bg-gradient-to-b from-maroon-950 to-maroon-900/90">
            <div className="space-y-1.5">
              {codeSnippets[activeTab].map((line, idx) => (
                <div key={idx} className="flex items-start gap-4 group hover:bg-maroon-900/50 py-0.5 px-1 rounded transition-colors">
                  <span className="w-6 text-right text-stone-500 select-none text-xs font-mono flex-shrink-0 pt-0.5">
                    {line.num}
                  </span>
                  <div className="text-cream-200 leading-relaxed break-all">
                    {line.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Pulsing Command-Line Prompt at Bottom */}
            <div className="pt-4 mt-4 border-t border-maroon-900/80 flex items-center gap-2 text-xs text-stone-400">
              <span className="text-emerald-400 font-bold">falah@macbook-pro:~$</span>
              <span className="text-cream-200">ready to build next-generation web application</span>
              <span className="w-2 h-4 bg-champagne-500 animate-pulse" />
            </div>
          </div>
        ) : (
          /* Live Interactive Component Render View */
          <div className="p-6 min-h-[320px] bg-cream-100 flex flex-col justify-between text-maroon-950">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-cream-300">
                <span className="text-[11px] font-mono font-bold uppercase text-maroon-800 tracking-wider">
                  Live Component Render
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  State: ACTIVE
                </span>
              </div>

              {/* Rendered Micro Profile Card */}
              <div className="p-5 rounded-2xl bg-cream-50 border border-cream-300 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-extrabold text-lg text-maroon-950 leading-tight">
                      Falah Abdussalam
                    </h4>
                    <p className="text-xs font-mono text-maroon-800">
                      Frontend Developer &bull; Graphic Designer
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-maroon-800/50 flex items-center justify-center shadow-sm flex-shrink-0">
                    <img src="/falah-logo.png" alt="Falah" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-cream-200/80 border border-cream-300">
                    <span className="text-[10px] text-cream-muted uppercase block">Engineering</span>
                    <strong className="text-maroon-950">React &bull; Tailwind</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-cream-200/80 border border-cream-300">
                    <span className="text-[10px] text-cream-muted uppercase block">Aesthetics</span>
                    <strong className="text-maroon-950">Brand &bull; UI/UX</strong>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  Bachelor of Computer Applications (BCA) &bull; Kodagu University. Ziqx Creative Clique LLP &bull; Bekachi Group.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 flex items-center justify-between text-xs font-mono text-cream-muted">
              <span>Interactive preview mode</span>
              <button 
                onClick={() => setViewMode('code')}
                className="text-maroon-800 font-bold hover:underline"
              >
                Return to code editor &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Terminal Bottom Status Bar */}
        <div className="px-4 py-2.5 bg-maroon-950 border-t border-maroon-800/90 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-stone-300">
              <GitBranch className="w-3.5 h-3.5 text-champagne-500" />
              <span>main</span>
            </div>
            <span className="text-maroon-700">&bull;</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>0 errors</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-maroon-800 hover:bg-maroon-700 text-cream-100 border border-maroon-700 transition-all shadow-sm"
            >
              {isRunning ? (
                <>
                  <RotateCcw className="w-3 h-3 animate-spin text-champagne-500" />
                  <span>Compiling...</span>
                </>
              ) : runSuccess ? (
                <>
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-300">Build 100% OK</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-current text-champagne-500" />
                  <span>Run Module</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

      {/* Interactive Bottom Indicator Strip */}
      <div className="pt-4 flex items-center justify-between px-2 text-[11px] font-mono text-cream-muted">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
          <span className="text-maroon-900 font-semibold">Live Interactive Developer Terminal</span>
        </div>
        <span className="text-stone-500 hidden sm:inline">Click tabs to view code architecture</span>
      </div>

    </div>
  );
}
