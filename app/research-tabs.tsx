'use client';

import { useRef, useState, type KeyboardEvent } from 'react';

export type ResearchStage = {
  id: string;
  label: string;
  subtitle: string;
  title: string;
  question: string;
  methods: [string, string][];
  keyWork: string;
};

export default function ResearchTabs({ stages }: { stages: ResearchStage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectTab = (index: number) => {
    const nextIndex = (index + stages.length) % stages.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keyTargets: Record<string, number> = {
      ArrowRight: activeIndex + 1,
      ArrowLeft: activeIndex - 1,
      Home: 0,
      End: stages.length - 1,
    };
    const target = keyTargets[event.key];
    if (target === undefined) return;
    event.preventDefault();
    selectTab(target);
  };

  return (
    <div className="stage-tabs">
      <div className="stage-tablist" role="tablist" aria-label="Research modules" onKeyDown={handleKeyDown}>
        {stages.map((stage, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={stage.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`research-tab-${stage.id}`}
              aria-selected={isActive}
              aria-controls={`research-panel-${stage.id}`}
              tabIndex={isActive ? 0 : -1}
              className="stage-tab"
              onClick={() => setActiveIndex(index)}
            >
              <span className="stage-tab-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="stage-tab-label">{stage.label}</span>
              <span className="stage-tab-subtitle">{stage.subtitle}</span>
            </button>
          );
        })}
      </div>

      {stages.map((stage, index) => (
        <div
          key={stage.id}
          role="tabpanel"
          id={`research-panel-${stage.id}`}
          aria-labelledby={`research-tab-${stage.id}`}
          className={`stage-panel${index === activeIndex ? ' is-active' : ''}`}
          tabIndex={0}
        >
          <div className="stage-overview">
            <p className="stage-kicker">Module {String(index + 1).padStart(2, '0')} · {stage.label}</p>
            <h4>{stage.title}</h4>
            <p className="stage-question">{stage.question}</p>
            <p className="stage-keywork"><strong>Key work</strong>{stage.keyWork}</p>
          </div>

          <ul className="stage-methods">
            {stage.methods.map(([name, description]) => (
              <li key={name}>
                <strong>{name}</strong>
                <span>{description}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
