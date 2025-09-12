import React from 'react';

const CONSENT_KEY = 'cookie_consent_v1';
function readConsent() { try { return JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null'); } catch { return null; } }
function writeConsent(value) { localStorage.setItem(CONSENT_KEY, JSON.stringify(value)); }

function useConsent() {
  const [consent, setConsent] = React.useState(() => readConsent());
  React.useEffect(() => { if (consent) writeConsent(consent); }, [consent]);
  const accept = () => setConsent({ necessary: true, performance: true, ts: Date.now() });
  const reject = () => setConsent({ necessary: true, performance: false, ts: Date.now() });
  return { consent, setConsent, accept, reject };
}

function Footer() {
  const year = React.useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="footer">
      <small>© <span>{year}</span> ModuDAO</small>
    </footer>
  );
}

export default function App() {
  const { consent, setConsent, accept, reject } = useConsent();
  const [prefsOpen, setPrefsOpen] = React.useState(false);

  return (
    <main id="app" className="app">
      <header className="header">
        <div className="brand">
          <div className="logo" aria-hidden="true" />
          <span className="brand-name">ModuDAO</span>
        </div>
        <button className="ghost-btn" onClick={() => setPrefsOpen(true)} aria-haspopup="dialog">쿠키 설정</button>
      </header>

      {/* Hero / Logo + Title */}
      <section className="hero" style={{ paddingTop: 8 }}>
        <div className="center">
          <div className="hero-logo"><img src="/modu.png" alt="Modu logo" /></div>
          <img className="site-wordmark" src="/text_modudao.png" alt="MODUDAO" />
        </div>
        {/* Intro Card */}
        <div className="intro-card">
          <h2 className="intro-head">블록체인 디젠 모두가 모여 만든<br/>집단 지성체</h2>
          <p className="intro-sub">
            ModuDAO는 특정 전문가나 소수가 아닌,<br/>
            누구나 참여하고 함께 운영하는 탈중앙화 조직입니다.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="features-block">
        <h2 className="section-title">주요 활동</h2>
        <div className="grid2">
          <div className="feature-card"><div className="ficon">👥</div><div className="fname">블록체인 밋업</div></div>
          <div className="feature-card"><div className="ficon">📈</div><div className="fname">재테크 방법 공유</div></div>
          <div className="feature-card"><div className="ficon">📚</div><div className="fname">블록체인 스터디</div></div>
          <div className="feature-card"><div className="ficon">📅</div><div className="fname">정기 모임 (격주)</div></div>
        </div>
      </section>

      {/* Checklist */}
      <section className="checklist">
        <h2 className="section-title">이런 분들을 기다립니다!</h2>
        <ul className="list">
          <li><span className="tick">✔</span> 블록체인을 처음 접하는 분</li>
          <li><span className="tick">✔</span> 밋업이 궁금하신 분</li>
          <li><span className="tick">✔</span> 새로운 재테크를 배우고 싶은 분</li>
          <li><span className="tick">✔</span> 코인을 배우고 싶은 코린이</li>
        </ul>
      </section>

      {/* Members */}
      <section className="members">
        <h2 className="section-title">함께하는 멤버</h2>
        <div className="stack">
          <div className="pill">
            <strong>템피 대표</strong>
            <small>8년차 블록체인 에이전시</small>
          </div>
          <div className="pill">
            <strong>DAO 멤버들</strong>
            <small>각 텔레그램 채널 운영진</small>
          </div>
        </div>
      </section>

      {/* Goal */}
      <section className="goal">
        <div className="goal-icon">🚀</div>
        <h2 className="section-title">우리의 목표</h2>
        <p className="muted center">제2의 머니파이프라인을<br/>만들기 위한 모임입니다.</p>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <h2 className="section-title">활동 사진</h2>
        <div className="img-card">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop" alt="모임 사진" />
        </div>
      </section>

      {/* Join CTA */}
      <section className="join">
        <h2 className="section-title">참여하기</h2>
        <div className="join-stack">
          <button type="button" className="join-btn primary" onClick={()=>{}}>📨 공식 텔레그램</button>
          <button type="button" className="join-btn" onClick={()=>{}}>🐦 공식 트위터</button>
          <button type="button" className="join-btn" onClick={()=>{}}>👥 DAO 멤버 텔레그램</button>
        </div>
      </section>

      {/* Notice */}
      <section className="notice">
        <div className="notice-card">
          <div className="notice-icon">⚠️</div>
          <div>
            <h3 className="notice-title">유의사항</h3>
            <p className="muted">종교 권유, 다단계, 이성 목적, 과도한 술모임은 정중히 사양합니다.
            저희는 건전한 스터디와 네트워킹을 지향합니다.</p>
          </div>
        </div>
      </section>

      <Footer />

      {!consent && (
        <div className="cookie-banner" role="dialog" aria-live="polite" style={{ display: 'flex' }}>
          <div className="cookie-banner__content">이 웹사이트는 사용자 경험 향상을 위해 쿠키를 사용합니다.</div>
          <div className="cookie-banner__actions">
            <button className="ghost-btn" onClick={reject}>거부</button>
            <button className="primary-btn" onClick={accept}>허용</button>
          </div>
        </div>
      )}

      {prefsOpen && (
        <div role="dialog" aria-label="쿠키 설정" className="cookie-banner" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div className="cookie-card">
            <div className="cookie-header"><h2>쿠키 설정</h2></div>
            <div className="cookie-body">
              <p>우리는 필수 쿠키와 성능 분석 쿠키를 사용합니다.</p>
              <label className="toggle">
                <input type="checkbox" checked={Boolean(consent?.performance)} onChange={e => setConsent({ necessary: true, performance: e.target.checked, ts: Date.now() })} />
                <span>성능/분석 쿠키 허용</span>
              </label>
            </div>
            <div className="cookie-actions">
              <button className="ghost-btn" onClick={() => setPrefsOpen(false)}>취소</button>
              <button className="primary-btn" onClick={() => setPrefsOpen(false)}>저장</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
