
import { useState } from 'react';
import './App.css';

import { Discover } from './pages/Discover';
import { Matches } from './pages/Matches';

type Tab = 'home' | 'discover' | 'matches';

function App() {
  const [tab, setTab] = useState<Tab>('discover');

  return (
    <div>
      <main>
        {tab === 'home' && <div>Home Screen</div>}

        {tab === 'discover' && (
          <Discover navigateToMatches={() => setTab('matches')} />
        )}

        {tab === 'matches' && (
          <Matches navigateToDiscover={() => setTab('discover')} />
        )}
      </main>

      <nav className="tab-bar">
        <div className="tab-bar-items">
          <button
            type="button"
            className={`tab-button ${tab === 'home' ? 'is-active' : ''}`}
            onClick={() => setTab('home')}
          >
            <svg viewBox="0 0 24 24">
              <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z" />
            </svg>
            <span>Home</span>
          </button>

          <button
            type="button"
            className={`tab-button ${tab === 'discover' ? 'is-active' : ''}`}
            onClick={() => setTab('discover')}
          >
            <svg viewBox="0 0 24 24">
              <rect x="5" y="4" width="12" height="16" rx="1.5" transform="rotate(-10 11 12)" />
              <rect x="9" y="5" width="11" height="15" rx="1.5" transform="rotate(10 14.5 12.5)" />
            </svg>
            <span>Discover</span>
          </button>

          <button
            type="button"
            className={`tab-button ${tab === 'matches' ? 'is-active' : ''}`}
            onClick={() => setTab('matches')}
          >
            <svg viewBox="0 0 24 24">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
            </svg>
            <span>Matches</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
