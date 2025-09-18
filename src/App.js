import React from 'react';

function Footer() {
  const year = React.useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="footer">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <small style={{ textAlign: 'center' }}>© <span>2025-{year}</span> ModuDAO. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

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

  // 유튜브 영상들
  const youtubeVideos = [
    {
      id: 1,
      embedId: "slhWBXh3dys?si=64mNhsk3xRvkYJOD",
      title: "ModuDAO 활동 영상 1"
    },
    {
      id: 2,
      embedId: "5pxYQYHhWC4?si=MjKqQou4ZHs0zisr",
      title: "ModuDAO 활동 영상 2"
    },
    {
      id: 3,
      embedId: "G3I6l_6OHXY?si=eoGG4uT5D6zYSfb0",
      title: "ModuDAO 활동 영상 3"
    },
    {
      id: 4,
      embedId: "G3I6l_6OHXY?si=ysuBVvoNY1n-araI",
      title: "ModuDAO 활동 영상 4"
    },
    {
      id: 5,
      embedId: "2LDndYqdoCs?si=YFdEZZctUsxYmUZn",
      title: "ModuDAO 활동 영상 5"
    },
    {
      id: 6,
      embedId: "LNSZlKrqZeg?si=7JcTWuR5AjVBFXRj",
      title: "ModuDAO 활동 영상 6"
    },
    {
      id: 7,
      embedId: "fy43pQ_6RYs?si=GCBK1yDaS2_JPh2g",
      title: "ModuDAO 활동 영상 7"
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

  // 자동 슬라이더 효과 (유튜브 영상)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) =>
        prev === youtubeVideos.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 영상은 5초마다 변경

    return () => clearInterval(interval);
  }, [youtubeVideos.length]);

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

  // 유튜브 영상 네비게이션 함수
  const nextVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === youtubeVideos.length - 1 ? 0 : prev + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? youtubeVideos.length - 1 : prev - 1
    );
  };

  return (
    <main id="app" className="app">
      <header className="header" style={{ position: 'fixed', backgroundColor: 'var(--bg)', top: 0, zIndex: 1000, width: '100vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0.5rem', minHeight: '56px' }}>
        <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="hero-logo"><img src="/modu-removebg-preview.png" alt="Modu logo" style={{ width: '28px', height: '28px' }} /></div>
          <span className="brand-name">ModuDAO</span>
          <span />
          <span />
          <span />
          <nav style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'nowrap', overflowX: 'auto', WebkitOverflowScrolling: 'touch', flex: 1, justifyContent: 'center' }}>
            <a href="#hero" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', padding: '0.25rem 0.35rem' }}>소개</a>
            <a href="#features" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', padding: '0.25rem 0.35rem' }}>활동</a>
            <a href="#goal" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', padding: '0.25rem 0.35rem' }}>목표</a>
            <a href="#members" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', padding: '0.25rem 0.35rem' }}>멤버</a>
            <a href="#gallery" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', padding: '0.25rem 0.35rem' }}>영상&사진</a>
          </nav>
        </div>
      </header>

      {/* Hero / Identity Section */}
      <section id="hero" className="hero" style={{
        paddingTop: '2rem',
        paddingBottom: '20rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {/* Intro */}
        <div style={{
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto',
          padding: '10rem 1.5rem',
          textAlign: 'center'
        }}>
          <h2 className="intro-head" style={{
            fontSize: '38px',
            // fontSize: '2.4rem',
            fontWeight: '900',
            lineHeight: '1.2',
            margin: '0 0 1.5rem 0',
            color: '#ffffff'
          }}>
            블록체인 디젠<br />모두가 모여 만든<br />집단 지성체
          </h2>
          <br />
          <p className="intro-sub" style={{
            fontSize: '19px',
            // fontSize: '1.2rem',
            fontWeight: '500',
            lineHeight: '1.5',
            margin: '0',
            color: '#e7e7ea'
          }}>
            ModuDAO는 디젠들의 집단 지성으로<br /> 움직이는 탈중앙 자율 조직.<br />
            소수의 엘리트가 아닌,<br /> 모든 참여자가 곧 운영자입니다.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section id="features" className="features-block" style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bg1)'
      }}>
        <h2 className="section-title" style={{
          fontSize: '19px',
          // fontSize: '1.2rem',
          fontWeight: '1500',
          lineHeight: '1.5',
          margin: '0',
          color: '#e7e7ea'
        }}>우리의 주요 활동</h2>
        <br />
        <p className="section-description" style={{
          fontSize: '14px',
          // fontSize: '1rem',
          fontWeight: '500',
          lineHeight: '1.5',
          margin: '0',
          color: '#e7e7ea'
        }}>
          ModuDAO의 주요 활동은 다음과 같습니다. <br />
          지금, 활발하게 성장하는 커뮤니티에 합류하세요!
        </p>
        <br />
        <br />
        <div className="grid2" style={{ gap: '16px' }}>
          <div className="feature-card" style={{ padding: '20px 16px' }}>
            <div className="ficon" style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#2a2a2a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid white',
                borderRadius: '3px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '2px',
                  height: '8px',
                  backgroundColor: 'white'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(90deg)',
                  width: '2px',
                  height: '8px',
                  backgroundColor: 'white'
                }}></div>
              </div>
            </div>
            <div className="fname" style={{ fontSize: '14px' }}>정기 모임</div>
            <small style={{ fontSize: '12px' }}>
              <a href="https://www.somoim.co.kr/7871033c-3fb8-4704-b550-001a44f3d76f1" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                일정 보기
              </a>
            </small>
          </div>
          <div className="feature-card" style={{ padding: '20px 16px' }}>
            <div className="ficon" style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#2a2a2a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px'
            }}>
              <div style={{
                width: '16px',
                height: '10px',
                backgroundColor: 'white',
                borderRadius: '8px 8px 0 0',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '-3px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '10px',
                  height: '5px',
                  backgroundColor: 'white',
                  borderRadius: '0 0 5px 5px'
                }}></div>
              </div>
            </div>
            <div className="fname" style={{ fontSize: '14px' }}>Crypto Meetups</div>
          </div>
          <div className="feature-card" style={{ padding: '20px 16px' }}>
            <div className="ficon" style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#2a2a2a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px'
            }}>
              <div style={{
                width: '14px',
                height: '14px',
                backgroundColor: 'white',
                borderRadius: '50%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-3px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '8px',
                  height: '3px',
                  backgroundColor: 'white',
                  borderRadius: '2px'
                }}></div>
              </div>
            </div>
            <div className="fname" style={{ fontSize: '14px' }}>에어드랍</div>
          </div>
          <div className="feature-card" style={{ padding: '20px 16px' }}>
            <div className="ficon" style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#2a2a2a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px'
            }}>
              <div style={{
                width: '16px',
                height: '10px',
                backgroundColor: 'white',
                borderRadius: '2px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '2px',
                  left: '2px',
                  right: '2px',
                  height: '2px',
                  backgroundColor: '#2a2a2a'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '4px',
                  left: '2px',
                  right: '2px',
                  height: '2px',
                  backgroundColor: '#2a2a2a'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  left: '2px',
                  right: '2px',
                  height: '2px',
                  backgroundColor: '#2a2a2a'
                }}></div>
              </div>
            </div>
            <div className="fname" style={{ fontSize: '14px' }}>블록체인 리서치</div>
          </div>
          <div className="feature-card" style={{ padding: '20px 16px' }}>
            <div className="ficon" style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#2a2a2a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px'
            }}>
              <div style={{
                width: '16px',
                height: '12px',
                backgroundColor: 'white',
                borderRadius: '2px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-2px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '8px',
                  height: '2px',
                  backgroundColor: 'white',
                  borderRadius: '1px'
                }}></div>
              </div>
            </div>
            <div className="fname" style={{ fontSize: '14px' }}>블록체인 교육</div>
          </div>
          <div className="feature-card" style={{ padding: '20px 16px' }}>
            <div className="ficon" style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#2a2a2a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: 'white',
                borderRadius: '50%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px',
                  height: '2px',
                  backgroundColor: 'white',
                  borderRadius: '0 0 2px 2px'
                }}></div>
              </div>
            </div>
            <div className="fname" style={{ fontSize: '14px' }}>인터뷰</div>
          </div>
          <div className="feature-card" style={{ padding: '20px 16px' }}>
            <div className="ficon" style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#2a2a2a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px'
            }}>
              <div style={{
                width: '16px',
                height: '10px',
                backgroundColor: 'white',
                borderRadius: '2px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1px',
                  left: '1px',
                  width: '2px',
                  height: '6px',
                  backgroundColor: '#2a2a2a'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '2px',
                  left: '4px',
                  width: '2px',
                  height: '5px',
                  backgroundColor: '#2a2a2a'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: '7px',
                  width: '2px',
                  height: '4px',
                  backgroundColor: '#2a2a2a'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '4px',
                  left: '10px',
                  width: '2px',
                  height: '3px',
                  backgroundColor: '#2a2a2a'
                }}></div>
              </div>
            </div>
            <div className="fname" style={{ fontSize: '14px' }}>트렌드 인사이트</div>
          </div>
          <div className="feature-card" style={{ padding: '20px 16px' }}>
            <div className="ficon" style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#2a2a2a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px'
            }}>
              <div style={{
                width: '16px',
                height: '10px',
                backgroundColor: 'white',
                borderRadius: '6px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '2px',
                  left: '2px',
                  width: '2px',
                  height: '2px',
                  backgroundColor: '#2a2a2a',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '2px',
                  left: '5px',
                  width: '2px',
                  height: '2px',
                  backgroundColor: '#2a2a2a',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '2px',
                  left: '8px',
                  width: '2px',
                  height: '2px',
                  backgroundColor: '#2a2a2a',
                  borderRadius: '50%'
                }}></div>
              </div>
            </div>
            <div className="fname" style={{ fontSize: '14px' }}>Yapping</div>
          </div>
          <div className="feature-card" style={{ padding: '20px 16px' }}>
            <div className="ficon" style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#2a2a2a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px'
            }}>
              <div style={{
                width: '14px',
                height: '16px',
                backgroundColor: 'white',
                borderRadius: '2px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '1px',
                  backgroundColor: '#2a2a2a'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '1px',
                  backgroundColor: '#2a2a2a'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '1px',
                  backgroundColor: '#2a2a2a'
                }}></div>
              </div>
            </div>
            <div className="fname" style={{ fontSize: '14px' }}>텔레그램 채널</div>
          </div>
          <div className="feature-card" style={{ padding: '20px 16px' }}>
            <div className="ficon" style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#2a2a2a',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px'
            }}>
              <div style={{
                width: '14px',
                height: '14px',
                backgroundColor: 'white',
                borderRadius: '50%',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '2px',
                  left: '2px',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#2a2a2a',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: '3px',
                  width: '4px',
                  height: '4px',
                  backgroundColor: 'white',
                  borderRadius: '50%'
                }}></div>
              </div>
            </div>
            <div className="fname" style={{ fontSize: '14px' }}>IPO 참여</div>
          </div>
        </div>
      </section>

      {/* Checklist & Goal Combined */}
      <section id="goal" className="checklist" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 0',
        backgroundColor: 'var(--bg)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            marginBottom: '1rem',
            color: '#ffffff'
          }}>우리의 목표</h2>
          <p className="muted center" style={{
            fontSize: '1rem',
            lineHeight: '1.5',
            color: '#e7e7ea',
            marginBottom: '4rem',
          }}>제2의 머니파이프라인을<br />만들기 위한 모임입니다.</p>
        </div>

        <div style={{ width: '100%', maxWidth: '400px' }}>
          <h2 className="section-title" style={{
            fontSize: '1.6rem',
            fontWeight: '800',
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#ffffff'
          }}>이런 분들을 기다립니다!</h2>
          <ul className="list" style={{ marginBottom: '3rem' }}>
            <li style={{ padding: '10px 30px', marginBottom: '2px' }}>
              <span className="tick">✔</span> 블록체인을 처음 접하는 분
            </li>
            <li style={{ padding: '10px 30px', marginBottom: '2px' }}>
              <span className="tick">✔</span> 밋업이 궁금하신 분
            </li>
            <li style={{ padding: '10px 30px', marginBottom: '2px' }}>
              <span className="tick">✔</span> 새로운 재테크를 함께 공부하고 싶은 분
            </li>
            <li style={{ padding: '10px 30px', marginBottom: '2px' }}>
              <span className="tick">✔</span> 코인을 배우고 싶은 코린이
            </li>
            <li style={{ padding: '10px 30px', marginBottom: '2px' }}>
              <span className="tick">✔</span> 본인 채널 운영과 성장을 꿈꾸는 분
            </li>
          </ul>


        </div>
      </section>

      {/* Members */}
      <section id="members" className="members" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 0',
        backgroundColor: 'var(--bg1)'
      }}>
        <h2 className="section-title" style={{
          fontSize: '1.6rem'
        }}>함께하는 멤버</h2>
        <div className="stack">
          <a href="https://t.me/TEMPi_KR" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="pill" style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}>
              <strong> TEMPi</strong>
              <small>9년차 블록체인 전문 에이전시</small>
              <br />
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                backgroundColor: '#2a2a2a',
                borderRadius: '8px',
                marginTop: '8px'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  position: 'relative'
                }}>
                  {/* 텔레그램 종이비행기 아이콘 */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#0088cc',
                    clipPath: 'polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%, 15% 50%)'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#ffffff',
                    clipPath: 'polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%, 15% 50%)'
                  }}></div>
                </div>
              </div>
            </div>
          </a>
          <div className="pill">
            <strong> DAO 멤버 및 채널소개</strong>
            {/* Telegram Channels */}
            <section className="telegram-channels">
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
                  <div className="channel-desc">온체인 분석 | 디파이 매매 등 관심있는 것 모두 합니다.</div>
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
                <a href="https://t.me/cryptohighschool" target="_blank" rel="noopener noreferrer" className="channel-card">
                  <div className="channel-icon">🎒</div>
                  <div className="channel-name">크립토 하이스쿨</div>
                  <div className="channel-desc">친구들과 함께 크립토에 대해 공부해서 경제적 졸업을 이루자!</div>
                </a>
                <a href="https://t.me/coinhotplace" target="_blank" rel="noopener noreferrer" className="channel-card">
                  <div className="channel-icon">🎒</div>
                  <div className="channel-name">코인타운</div>
                  <div className="channel-desc">세상에 모든 돈되는 정보</div>
                </a>
                <a href="https://t.me/coinpaka" target="_blank" rel="noopener noreferrer" className="channel-card">
                  <div className="channel-icon">🎒</div>
                  <div className="channel-name">코파카</div>
                  <div className="channel-desc">설명 필요</div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Gallery & YouTube Video * Notice */}
      <section id="gallery" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bg1)'
      }}>
        <section className="gallery" style={{ height: '30vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '1.6rem' }}>
            활동 사진
          </h2>
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

        <br />

        <section className="youtube-section" style={{ theight: '30vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '1.6rem' }}>
            활동 영상
          </h2>
          <div className="youtube-slider">
            <div className="youtube-slider-container">
              <button className="youtube-slider-btn prev" onClick={prevVideo} aria-label="이전 영상">
                ‹
              </button>
              <div className="youtube-container" style={{ width: '380px', maxWidth: '400px', height: '250px' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeVideos[currentVideoIndex]?.embedId}`}
                  title={youtubeVideos[currentVideoIndex]?.title || "ModuDAO 활동 영상"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="youtube-embed"
                ></iframe>
              </div>
              <button className="youtube-slider-btn next" onClick={nextVideo} aria-label="다음 영상">
                ›
              </button>
            </div>
            <div className="youtube-slider-dots">
              {youtubeVideos.map((_, index) => (
                <button
                  key={index}
                  className={`youtube-dot ${index === currentVideoIndex ? 'active' : ''}`}
                  onClick={() => setCurrentVideoIndex(index)}
                  aria-label={`영상 ${index + 1}로 이동`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="notice" style={{ height: '10vh' }}>
          <div className="notice-card">
            <div>
              <h3 className="notice-title"><div className="notice-icon">⚠️ 유의사항</div></h3>
              <p className="muted">종교 권유, 다단계, 이성 목적, 과도한 술모임은 정중히 사양합니다.
                저희는 건전한 스터디와 네트워킹을 지향합니다.</p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
