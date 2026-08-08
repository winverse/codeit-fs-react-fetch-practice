import { useState } from 'react';
import ApiFetchPractice from './features/api-fetch';

const sessions = [
  {
    id: 'api-fetch',
    label: 'API 데이터 불러오기',
    component: ApiFetchPractice,
  },
];

function App() {
  const [activeSessionId, setActiveSessionId] = useState(sessions[0].id);
  const activeSession = sessions.find(
    (session) => session.id === activeSessionId,
  );
  const ActivePractice = activeSession.component;

  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="eyebrow">18. React로 데이터 다루기</p>
        <h1>API 데이터 연동 실습</h1>
        <p>
          버튼을 선택하고 지정된 <code>Exercise.jsx</code>를 수정합니다.
        </p>
      </header>

      <div className="workspace">
        <aside className="session-panel">
          <h2>실습 선택</h2>
          <nav aria-label="API 데이터 연동 실습">
            {sessions.map((session, index) => (
              <button
                key={session.id}
                className={
                  session.id === activeSessionId
                    ? 'session-button active'
                    : 'session-button'
                }
                type="button"
                aria-pressed={session.id === activeSessionId}
                data-session-id={session.id}
                onClick={() => setActiveSessionId(session.id)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {session.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="practice-panel">
          <ActivePractice />
        </main>
      </div>
    </div>
  );
}

export default App;
