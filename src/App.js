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
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // public/photos 폴더의 이미지들
  const galleryImages = [
    {
      id: 1,
      src: "/photos/KakaoTalk_Photo_2025-09-14-23-29-23 001.jpeg",
      alt: "모임 사진 1"
    },
    {
      id: 2,
      src: "/photos/KakaoTalk_Photo_2025-09-14-23-29-23 002.jpeg",
      alt: "모임 사진 2"
    },
    {
      id: 3,
      src: "/photos/KakaoTalk_Photo_2025-09-14-23-29-23 003.jpeg",
      alt: "모임 사진 3"
    },
    {
      id: 4,
      src: "/photos/KakaoTalk_Photo_2025-09-14-23-29-23 004.jpeg",
      alt: "모임 사진 4"
    },
    {
      id: 5,
      src: "/photos/KakaoTalk_Photo_2025-09-14-23-29-24 005.jpeg",
      alt: "모임 사진 5"
    }
  ];

  // 자동 슬라이더 효과
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 3000); // 3초마다 자동 전환

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // 수동 네비게이션 함수
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

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
          ModuDAO는 아래와 같은 활동을 진행합니다.
        </p>
        <p className="section-description">
          오늘 활발한 커뮤니티에 가입하세요!
        </p>
        <div className="grid2">
          <div className="feature-card"><div className="ficon">📅</div><div className="fname">정기 모임</div></div>
          <div className="feature-card"><div className="ficon">👥</div><div className="fname">Crypto Meetups 참석</div></div>
          <div className="feature-card"><div className="ficon">🎁</div><div className="fname">에어드랍에 참여</div></div>
          <div className="feature-card"><div className="ficon">📊</div><div className="fname">블록체인 투자 연구</div></div>
          <div className="feature-card"><div className="ficon">🎓</div><div className="fname">블록체인 교육</div></div>
          <div className="feature-card"><div className="ficon">🎤</div><div className="fname">재단 인터뷰 액세스</div></div>
          <div className="feature-card"><div className="ficon">📈</div><div className="fname">트렌드 인사이트 공유</div></div>
          <div className="feature-card"><div className="ficon">💬</div><div className="fname">Yapping 세션 참여</div></div>
          <div className="feature-card"><div className="ficon">📱</div><div className="fname">텔레그램 채널 실행</div></div>
          <div className="feature-card"><div className="ficon">💡</div><div className="fname">운영하고 싶은 활동</div></div>
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
            <br/>
            <a href="https://t.me/TEMPi_KR" target="_blank" rel="noopener noreferrer" className="contact-link">
              📱 텔레그램으로 연락하기
            </a>
          </div>
          <div className="pill">
            <strong>DAO 멤버들</strong>
            <small>각 텔레그램 채널 운영</small>            
          </div>
        </div>
      </section>

      {/* Telegram Channels */}
      <section className="telegram-channels">
        <h2 className="section-title">텔레그램 채널</h2>
        <div className="channel-grid">
          <a href="https://t.me/Modu_DAO" target="_blank" rel="noopener noreferrer" className="channel-card">
            <div className="channel-icon">🏛️</div>
            <div className="channel-name">ModuDAO : 모두다오</div>
            <div className="channel-desc">공식 텔레그램</div>
          </a>
          <a href="https://t.me/dnjseorka123" target="_blank" rel="noopener noreferrer" className="channel-card">
            <div className="channel-icon">🎓</div>
            <div className="channel-name">원대감의 성균관</div>
            <div className="channel-desc">설명 필요</div>
          </a>
          <a href="https://t.me/cripto_dock" target="_blank" rel="noopener noreferrer" className="channel-card">
            <div className="channel-icon">⚓️</div>
            <div className="channel-name">Crypto Dock</div>
            <div className="channel-desc">설명 필요</div>
          </a>
          <a href="https://t.me/kimdonut_mp" target="_blank" rel="noopener noreferrer" className="channel-card">
            <div className="channel-icon">🍩</div>
            <div className="channel-name">김도넛의 돈복사실</div>
            <div className="channel-desc">같이 경제적 자유를 이루러 가보죠.</div>
          </a>
          <a href="https://t.me/woojunmining" target="_blank" rel="noopener noreferrer" className="channel-card">
            <div className="channel-icon">⛏️</div>
            <div className="channel-name">우쥰의 코인채굴작전</div>
            <div className="channel-desc">설명 필요</div>
          </a>
          <a href="https://t.me/Crypto_Deliverys" target="_blank" rel="noopener noreferrer" className="channel-card">
            <div className="channel-icon">📰</div>
            <div className="channel-name">사대감의 크립통</div>
            <div className="channel-desc">육대감의 크립토 소식통</div>
          </a>
          <a href="https://t.me/DORDCI" target="_blank" rel="noopener noreferrer" className="channel-card">
            <div className="channel-icon">💬</div>
            <div className="channel-name">DORDCI</div>
            <div className="channel-desc">If it's profit, it's YES Cryptocurrency</div>
          </a>
          <a href="https://t.me/cryptohighschool" target="_blank" rel="noopener noreferrer" className="channel-card">
            <div className="channel-icon">🎒</div>
            <div className="channel-name">크립토 하이스쿨</div>
            <div className="channel-desc">친구들과 함께 크립토에 대해 공부해서 경제적 졸업을 이루자!</div>
          </a>
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
        <div className="gallery-slider">
          <div className="slider-container">
            <button className="slider-btn prev" onClick={prevImage} aria-label="이전 사진">
              ‹
            </button>
            <div className="slider-image-container">
              <img 
                src={galleryImages[currentImageIndex]?.src} 
                alt={galleryImages[currentImageIndex]?.alt || "모임 사진"} 
                className="slider-image"
              />
            </div>
            <button className="slider-btn next" onClick={nextImage} aria-label="다음 사진">
              ›
            </button>
          </div>
          <div className="slider-dots">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`사진 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="youtube-section">
        <h2 className="section-title">활동 영상</h2>
        <div className="youtube-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/slhWBXh3dys?si=64mNhsk3xRvkYJOD"
            title="ModuDAO 활동 영상"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="youtube-embed"
          ></iframe>
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
