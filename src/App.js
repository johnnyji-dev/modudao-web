import React from 'react';

function Footer() {
  const year = React.useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="footer">
      <small>© <span>{year}</span> ModuDAO</small>
    </footer>
  );
}

export default function App() {

  return (
    <main id="app" className="app">
      <header className="header">
        <div className="brand">
          <div className="logo" aria-hidden="true" />
          <span className="brand-name">ModuDAO</span>
        </div>
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
        <h2 className="section-title">우리의 주요 활동</h2>
        <p className="section-description">
          ModuDAO는 모임, 블록체인 교육, 투자 연구, 인터뷰, 에어드랍 및 트렌드 공유를 제공합니다. 
          오늘 활발한 커뮤니티에 가입하세요!
        </p>
        <div className="grid2">
          <div className="feature-card"><div className="ficon">🎓</div><div className="fname">블록체인 교육 행사</div></div>
          <div className="feature-card"><div className="ficon">👥</div><div className="fname">Crypto Meetups 참석</div></div>
          <div className="feature-card"><div className="ficon">🎁</div><div className="fname">에어드랍에 참여</div></div>
          <div className="feature-card"><div className="ficon">📊</div><div className="fname">블록체인 투자 연구</div></div>
          <div className="feature-card"><div className="ficon">🎤</div><div className="fname">재단 인터뷰 액세스</div></div>
          <div className="feature-card"><div className="ficon">📈</div><div className="fname">트렌드 인사이트 공유</div></div>
          <div className="feature-card"><div className="ficon">💬</div><div className="fname">Yapping 세션 참여</div></div>
          <div className="feature-card"><div className="ficon">📱</div><div className="fname">텔레그램 채널 실행</div></div>
        </div>
      </section>

      {/* Checklist */}
      <section className="checklist">
        <h2 className="section-title">이런 분들을 기다립니다!</h2>
        <ul className="list">
          <li><span className="tick">✔</span> 블록체인을 처음 접하는 분</li>
          <li><span className="tick">✔</span> 밋업이 궁금하신 분</li>
          <li><span className="tick">✔</span> 새로운 재테크를 함께 공부하고 싶은 분</li>
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
    </main>
  );
}
