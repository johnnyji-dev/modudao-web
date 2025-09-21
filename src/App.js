import React from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function Footer() {
  const { t } = useLanguage();
  const year = React.useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="footer">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <small style={{ textAlign: 'center' }}>{t('footer.copyright', { year })}</small>
      </div>
    </footer>
  );
}

function AppContent() {
  const { t, language, changeLanguage } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const [scrollY, setScrollY] = React.useState(0);
  const [currentSection, setCurrentSection] = React.useState('intro');
  const [showBubble, setShowBubble] = React.useState(false);

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

  // 스크롤 이벤트 리스너
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // 각 섹션의 위치를 감지하여 현재 섹션 결정
      const sections = ['intro', 'activities', 'who', 'members', 'gallery'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      let current = 'intro';
      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          // 섹션이 화면 상단에서 100px 이내에 있으면 해당 섹션으로 인식
          if (rect.top <= 100 && rect.bottom > 100) {
            current = sections[i];
            break;
          }
        }
      }
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 말풍선 애니메이션 효과
  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowBubble(true);
      setTimeout(() => {
        setShowBubble(false);
      }, 4000); // 4초 후 말풍선 사라짐
    }, 6000); // 6초마다 반복 (2초 간격)

    return () => clearInterval(interval);
  }, []);

  // 헤더 배경색을 현재 섹션에 따라 결정하는 함수
  const getHeaderBackground = () => {
    const baseOpacity = Math.min(scrollY / 200, 0.95);
    
    switch (currentSection) {
      case 'intro':
        // intro 섹션: 기본 배경 (어두운 톤)
        return scrollY > 50 
          ? `rgba(10, 10, 15, ${baseOpacity})` 
          : 'transparent';
      
      case 'activities':
        // activities 섹션: bg1 색상 (약간 밝은 톤)
        return scrollY > 50 
          ? `rgba(26, 26, 46, ${baseOpacity})` 
          : 'transparent';
      
      case 'who':
        // who 섹션: 기본 배경 (어두운 톤)
        return scrollY > 50 
          ? `rgba(10, 10, 15, ${baseOpacity})` 
          : 'transparent';
      
      case 'members':
        // members 섹션: bg1 색상 (약간 밝은 톤)
        return scrollY > 50 
          ? `rgba(26, 26, 46, ${baseOpacity})` 
          : 'transparent';
      
      case 'gallery':
        // gallery 섹션: 기본 배경 (어두운 톤)
        return scrollY > 50 
          ? `rgba(10, 10, 15, ${baseOpacity})` 
          : 'transparent';
      
      default:
        return scrollY > 50 
          ? `rgba(10, 10, 15, ${baseOpacity})` 
          : 'transparent';
    }
  };

  // 언어 전환 버튼 배경색을 현재 섹션에 따라 결정하는 함수
  const getButtonBackground = () => {
    const baseOpacity = Math.min(scrollY / 200, 0.9);
    
    switch (currentSection) {
      case 'intro':
        return scrollY > 50 
          ? `rgba(45, 55, 72, ${baseOpacity})` 
          : 'rgba(45, 55, 72, 0.7)';
      
      case 'activities':
        return scrollY > 50 
          ? `rgba(22, 33, 62, ${baseOpacity})` 
          : 'rgba(22, 33, 62, 0.7)';
      
      case 'who':
        return scrollY > 50 
          ? `rgba(45, 55, 72, ${baseOpacity})` 
          : 'rgba(45, 55, 72, 0.7)';
      
      case 'members':
        return scrollY > 50 
          ? `rgba(22, 33, 62, ${baseOpacity})` 
          : 'rgba(22, 33, 62, 0.7)';
      
      case 'gallery':
        return scrollY > 50 
          ? `rgba(45, 55, 72, ${baseOpacity})` 
          : 'rgba(45, 55, 72, 0.7)';
      
      default:
        return scrollY > 50 
          ? `rgba(45, 55, 72, ${baseOpacity})` 
          : 'rgba(45, 55, 72, 0.7)';
    }
  };

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
      <header 
        className="header" 
        style={{ 
          position: 'fixed', 
          // backgroundColor: getHeaderBackground(),
          backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
          borderBottom: scrollY > 50 
            ? '1px solid rgba(0, 212, 255, 0.2)' 
            : 'none',
          boxShadow: scrollY > 50 
            ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
            : 'none',
          top: 0, 
          zIndex: 1000, 
          width: '100vw', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: '0 0.5rem', 
          minHeight: '56px', 
          left: 0, 
          right: 0,
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', maxWidth: '440px', width: '100%' }}>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <div className="hero-logo"><img src="/modu-removebg-preview.png" alt="Modu logo" style={{ width: '28px', height: '28px' }} /></div>
              <span className="brand-name">ModuDAO</span>
            </div>
          </a>
          <nav style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'nowrap', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <a href="#intro" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', padding: '0.25rem 0.35rem' }}>{t('nav.intro')}</a>
            <a href="#activities" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', padding: '0.25rem 0.35rem' }}>{t('nav.activities')}</a>
            <a href="#who" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', padding: '0.25rem 0.35rem' }}>{t('nav.target')}</a>
            <a href="#members" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', padding: '0.25rem 0.35rem' }}>{t('nav.members')}</a>
            <a href="#gallery" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', padding: '0.25rem 0.35rem' }}>{t('nav.gallery')}</a>
          </nav>
        </div>
      </header>

      {/* Language Toggle Button - Fixed Position */}
      <button 
        onClick={() => changeLanguage(language === 'ko' ? 'en' : 'ko')}
        style={{ 
          position: 'fixed',
          top: '70px',
          right: '20px',
          zIndex: 999,
          color: 'var(--text)', 
          textDecoration: 'none', 
          fontSize: '0.75rem', 
          fontWeight: '600', 
          whiteSpace: 'nowrap', 
          padding: '0.4rem 0.8rem',
          background: getButtonBackground(),
          backdropFilter: scrollY > 50 ? 'blur(10px)' : 'blur(5px)',
          border: `1px solid ${scrollY > 50 ? 'rgba(0, 212, 255, 0.3)' : 'var(--border)'}`,
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: scrollY > 50 
            ? '0 4px 15px rgba(0, 212, 255, 0.2)' 
            : '0 2px 8px rgba(0,0,0,0.3)'
        }}
        onMouseOver={(e) => {
          e.target.style.background = 'var(--primary)';
          e.target.style.borderColor = 'var(--subtxt)';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'var(--button)';
          e.target.style.borderColor = 'var(--border)';
          e.target.style.transform = 'scale(1)';
        }}
      >
        {language === 'ko' ? 'EN' : '한국어'}
      </button>

      {/* Hero / Identity Section */}
      <section id="intro" className="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px'
      }}>
        {/* Intro */}
        <div style={{
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto',
          // padding: '2rem 1.5rem',
          textAlign: 'center'
        }}>
          <h2 className="intro-head" style={{
            fontSize: '38px',
            // fontSize: '2.4rem',
            fontWeight: '900',
            lineHeight: '1.2',
            margin: '0 0 1.5rem 0',
            color: 'var(--subtxt)',
          }} dangerouslySetInnerHTML={{ __html: t('hero.title') }}>
          </h2>
          <br />
          <p className="intro-sub" style={{
            fontSize: '19px',
            // fontSize: '1.2rem',
            fontWeight: '500',
            lineHeight: '1.5',
            // margin: '0',
            color: '#e7e7ea'
          }} dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}>
          </p>
          <a href="https://linktr.ee/Modudao" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: 'var(--button)',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '14px',
            transition: 'all 0.3s ease',
            marginTop: '0.5rem'
          }}>
            {t('hero.joinButton')}
          </a>
          <br />
          <img 
            src="/linking/modudao_wiki_tree.jpeg" 
            alt="ModuDAO Wiki Tree" 
            style={{
              maxWidth: '120px',
              height: 'auto',
              borderRadius: '6px',
              marginTop: '0.5rem'
            }}
          />
        </div>
      </section>

      {/* Activities grid */}
      <section id="activities" style={{
        marginTop: '0px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bg1)',
        padding: '20px 0 1rem 0',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}>
        <div style={{ maxWidth: '440px', width: '100%', padding: '0 16px' }}>
          <h2 className="section-title" style={{
            fontSize: '28px',
            fontWeight: '1500',
            lineHeight: '1.3',
            margin: '0 0 1rem 0',
            color: 'var(--subtxt)',
          }}>{t('activities.title')}</h2>
          <p className="section-description" style={{
            fontSize: '13px',
            fontWeight: '500',
            lineHeight: '1.4',
            margin: '0 0 1.5rem 0',
            color: '#e7e7ea'
          }} dangerouslySetInnerHTML={{ __html: t('activities.description') }}>
          </p>
          <div className="grid2" style={{ gap: '8px', maxWidth: '400px', width: '100%' }}>
            <div className="feature-card" style={{ padding: '12px 8px' }}>
              <div className="ficon" style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#2a2a2a',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px'
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
              <div className="fname" style={{ fontSize: '11px' }}>{t('activities.regularMeetings')}</div>
              <small style={{ fontSize: '10px' }}>
                <a href="https://www.somoim.co.kr/7871033c-3fb8-4704-b550-001a44f3d76f1" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  {t('activities.scheduleView')}
                </a>
              </small>
            </div>
            <div className="feature-card" style={{ padding: '12px 8px' }}>
              <div className="ficon" style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#2a2a2a',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px'
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
              <div className="fname" style={{ fontSize: '11px' }}>{t('activities.cryptoMeetups')}</div>
            </div>
            <div className="feature-card" style={{ padding: '12px 8px' }}>
              <div className="ficon" style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#2a2a2a',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px'
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
              <div className="fname" style={{ fontSize: '11px' }}>{t('activities.airdrop')}</div>
            </div>
            <div className="feature-card" style={{ padding: '12px 8px' }}>
              <div className="ficon" style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#2a2a2a',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px'
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
              <div className="fname" style={{ fontSize: '11px' }}>{t('activities.blockchainResearch')}</div>
            </div>
            <div className="feature-card" style={{ padding: '12px 8px' }}>
              <div className="ficon" style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#2a2a2a',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px'
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
              <div className="fname" style={{ fontSize: '11px' }}>{t('activities.blockchainEducation')}</div>
            </div>
            <div className="feature-card" style={{ padding: '12px 8px' }}>
              <div className="ficon" style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#2a2a2a',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px'
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
              <div className="fname" style={{ fontSize: '11px' }}>{t('activities.interviews')}</div>
            </div>
            <div className="feature-card" style={{ padding: '12px 8px' }}>
              <div className="ficon" style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#2a2a2a',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px'
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
              <div className="fname" style={{ fontSize: '11px' }}>{t('activities.trendInsights')}</div>
            </div>
            <div className="feature-card" style={{ padding: '12px 8px' }}>
              <div className="ficon" style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#2a2a2a',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px'
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
              <div className="fname" style={{ fontSize: '11px' }}>{t('activities.yapping')}</div>
            </div>
            <div className="feature-card" style={{ padding: '12px 8px' }}>
              <div className="ficon" style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#2a2a2a',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px'
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
              <div className="fname" style={{ fontSize: '11px' }}>{t('activities.telegramChannel')}</div>
            </div>
            <div className="feature-card" style={{ padding: '12px 8px' }}>
              <div className="ficon" style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#2a2a2a',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px'
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
              <div className="fname" style={{ fontSize: '11px' }}>{t('activities.ipoParticipation')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* who */}
      <section id="who" className="checklist" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0 1rem 0',
      }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <h2 className="section-title" style={{
            fontSize: '28px',
            // fontSize: '1.6rem',
            fontWeight: '800',
            marginBottom: '1rem',
            textAlign: 'center',
            color: 'var(--subtxt)',
          }}>{t('target.title')}</h2>
          <ul className="list" style={{ marginBottom: '3rem' }}>
            {t('target.items').map((item, index) => (
              <li key={index} style={{ padding: '10px 30px', marginBottom: '2px' }}>
                <span className="tick">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Members */}
      <section id="members" className="members" style={{
        marginTop: '0px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bg1)',
        padding: '20px 0 1rem 0',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}>
        <div style={{ maxWidth: '440px', width: '100%', padding: '0 16px' }}>
          <h2 className="section-title" style={{
            fontSize: '28px',
            fontWeight: '800',
            marginBottom: '1rem',
            textAlign: 'center',
            color: 'var(--subtxt)'
          }}>{t('members.title')}</h2>
          <div className="stack" style={{ gap: '1rem' }}>
            <a href="https://t.me/TEMPi_KR" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="pill" style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}>
                <strong> TEMPi</strong>
                <small>{t('members.tempDescription')}</small>
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
                    <img src="/tg/tele_nobg.png" alt="ModuDAO" style={{ width: '20px', height: '20px' }} />
                  </div>
                </div>
              </div>
            </a>
            <div className="pill">
              <strong> {t('members.daoMembers')}</strong>
              {/* Telegram Channels */}
              <section className="telegram-channels">
                <div className="channel-grid">
                  <a href="https://t.me/Modu_DAO" target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="channel-icon" style={{ position: 'relative', display: 'inline-block' }}>
                      <img src="/tg/0_modudao.png" alt="ModuDAO" style={{ width: '20px', height: '20px' }} />
                      <img src="/tg/tele_nobg.png" alt="telegram" style={{ 
                        position: 'absolute', 
                        bottom: '2px', 
                        right: '-4px', 
                        width: '12px', 
                        height: '12px',
                        zIndex: 1
                      }} />
                    </div>
                    <div className="channel-name">{t('members.channels.modudao.name')}</div>
                    <div className="channel-desc" dangerouslySetInnerHTML={{ __html: t('members.channels.modudao.desc') }}></div>
                  </a>
                  <a href="https://t.me/dnjseorka123" target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="channel-icon" style={{ position: 'relative', display: 'inline-block' }}>
                      <img src="/tg/1_won_officer.jpeg" alt="won_officer" style={{ width: '20px', height: '20px' }} />
                      <img src="/tg/tele_nobg.png" alt="telegram" style={{ 
                        position: 'absolute', 
                        bottom: '2px', 
                        right: '-4px', 
                        width: '12px', 
                        height: '12px',
                        zIndex: 1
                      }} />
                    </div>
                    <div className="channel-name">{t('members.channels.wonOfficer.name')}</div>
                    <div className="channel-desc">{t('members.channels.wonOfficer.desc')}</div>
                  </a>
                  <a href="https://t.me/cripto_dock" target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="channel-icon" style={{ position: 'relative', display: 'inline-block' }}>
                      <img src="/tg/2_cryptodock.jpeg" alt="cryptodock" style={{ width: '20px', height: '20px' }} />
                      <img src="/tg/tele_nobg.png" alt="telegram" style={{ 
                        position: 'absolute', 
                        bottom: '2px', 
                        right: '-4px', 
                        width: '12px', 
                        height: '12px',
                        zIndex: 1
                      }} />
                    </div>
                    <div className="channel-name">{t('members.channels.cryptoDock.name')}</div>
                    <div className="channel-desc" dangerouslySetInnerHTML={{ __html: t('members.channels.cryptoDock.desc') }}></div>
                  </a>
                  <a href="https://t.me/kimdonut_mp" target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="channel-icon" style={{ position: 'relative', display: 'inline-block' }}>
                      <img src="/tg/3_donut.jpeg" alt="donut" style={{ width: '20px', height: '20px' }} />
                      <img src="/tg/tele_nobg.png" alt="telegram" style={{ 
                        position: 'absolute', 
                        bottom: '2px', 
                        right: '-4px', 
                        width: '12px', 
                        height: '12px',
                        zIndex: 1
                      }} />
                    </div>
                    <div className="channel-name">{t('members.channels.donut.name')}</div>
                    <div className="channel-desc">{t('members.channels.donut.desc')}</div>
                  </a>
                  <a href="https://t.me/woojunmining" target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="channel-icon" style={{ position: 'relative', display: 'inline-block' }}>
                      <img src="/tg/4_uzun.jpeg" alt="uzun" style={{ width: '20px', height: '20px' }} />
                      <img src="/tg/tele_nobg.png" alt="telegram" style={{ 
                        position: 'absolute', 
                        bottom: '2px', 
                        right: '-4px', 
                        width: '12px', 
                        height: '12px',
                        zIndex: 1
                      }} />
                    </div>
                    <div className="channel-name">{t('members.channels.uzun.name')}</div>
                    <div className="channel-desc">{t('members.channels.uzun.desc')}</div>
                  </a>
                  <a href="https://t.me/Crypto_Deliverys" target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="channel-icon" style={{ position: 'relative', display: 'inline-block' }}>
                      <img src="/tg/5_cryptong.jpeg" alt="crytong" style={{ width: '20px', height: '20px' }} />
                      <img src="/tg/tele_nobg.png" alt="telegram" style={{ 
                        position: 'absolute', 
                        bottom: '2px', 
                        right: '-4px', 
                        width: '12px', 
                        height: '12px',
                        zIndex: 1
                      }} />
                    </div>
                    <div className="channel-name">{t('members.channels.cryptong.name')}</div>
                    <div className="channel-desc">{t('members.channels.cryptong.desc')}</div>
                  </a>
                  <a href="https://t.me/cryptohighschool" target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="channel-icon" style={{ position: 'relative', display: 'inline-block' }}>
                      <img src="/tg/6_chas.jpeg" alt="cryptohighschool" style={{ width: '20px', height: '20px' }} />
                      <img src="/tg/tele_nobg.png" alt="telegram" style={{ 
                        position: 'absolute', 
                        bottom: '2px', 
                        right: '-4px', 
                        width: '12px', 
                        height: '12px',
                        zIndex: 1
                      }} />
                    </div>
                    <div className="channel-name">{t('members.channels.cryptoHighschool.name')}</div>
                    <div className="channel-desc">{t('members.channels.cryptoHighschool.desc')}</div>
                  </a>
                  <a href="https://t.me/coinhotplace" target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="channel-icon" style={{ position: 'relative', display: 'inline-block' }}>
                      <img src="/tg/7_cointown.jpeg" alt="cointown" style={{ width: '20px', height: '20px' }} />
                      <img src="/tg/tele_nobg.png" alt="telegram" style={{ 
                        position: 'absolute', 
                        bottom: '2px', 
                        right: '-4px', 
                        width: '12px', 
                        height: '12px',
                        zIndex: 1
                      }} />
                    </div>
                    <div className="channel-name">{t('members.channels.coinTown.name')}</div>
                    <div className="channel-desc" dangerouslySetInnerHTML={{ __html: t('members.channels.coinTown.desc') }}></div>
                  </a>
                  <a href="https://t.me/coinpaka" target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="channel-icon" style={{ position: 'relative', display: 'inline-block' }}>
                      <img src="/tg/8_copaka.jpeg" alt="copaka" style={{ width: '20px', height: '20px' }} />
                      <img src="/tg/tele_nobg.png" alt="telegram" style={{ 
                        position: 'absolute', 
                        bottom: '2px', 
                        right: '-4px', 
                        width: '12px', 
                        height: '12px',
                        zIndex: 1
                      }} />
                    </div>
                    <div className="channel-name">{t('members.channels.copaka.name')}</div>
                    <div className="channel-desc">{t('members.channels.copaka.desc')}</div>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" style={{
        marginTop: '0px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0 1rem 0',
        color: 'var(--subtxt)',
        fontSize: '28px',
      }}>
        <section className="gallery" style={{ minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            {t('gallery.photos')}
          </h2>
          <div className="gallery-slider">
            <div className="slider-container">
              <button className="slider-btn prev" onClick={prevImage} aria-label={t('gallery.prevPhoto')}>
                ‹
              </button>
              <div className="slider-image-container">
                <img
                  src={galleryImages[currentImageIndex]?.src}
                  alt={galleryImages[currentImageIndex]?.alt || "모임 사진"}
                  className="slider-image"
                />
              </div>
              <button className="slider-btn next" onClick={nextImage} aria-label={t('gallery.nextPhoto')}>
                ›
              </button>
            </div>
            <div className="slider-dots">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`${t('gallery.photoLabel')} ${index + 1}로 이동`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="youtube-section" style={{ minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            {t('gallery.videos')}
          </h2>
          <div className="youtube-slider">
            <div className="youtube-slider-container">
              <button className="youtube-slider-btn prev" onClick={prevVideo} aria-label={t('gallery.prevVideo')}>
                ‹
              </button>
              <div className="youtube-container" style={{ width: '350px', maxWidth: '380px', height: '200px' }}>
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
              <button className="youtube-slider-btn next" onClick={nextVideo} aria-label={t('gallery.nextVideo')}>
                ›
              </button>
            </div>
            <div className="youtube-slider-dots">
              {youtubeVideos.map((_, index) => (
                <button
                  key={index}
                  className={`youtube-dot ${index === currentVideoIndex ? 'active' : ''}`}
                  onClick={() => setCurrentVideoIndex(index)}
                  aria-label={`${t('gallery.videoLabel')} ${index + 1}로 이동`}
                />
              ))}
            </div>
          </div>
        </section>
      </section>

      <section className="notice" style={{ height: '15vh' }}>
        <div className="notice-card">
          <div>
            <h3 className="notice-title"><div className="notice-icon">{t('notice.title')}</div></h3>
            <p className="muted">{t('notice.content')}</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Icon with Speech Bubble */}
      <div 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: '15px'
        }}
      >
        {/* Speech Bubble */}
        {showBubble && (
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(22, 33, 62, 0.95) 0%, rgba(26, 26, 46, 0.9) 100%)',
              color: 'var(--text)',
              padding: '12px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500',
              maxWidth: '250px',
              textAlign: 'center',
              boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease-in-out',
              position: 'relative',
              marginBottom: '5px'
            }}
          >
            Do you need to build a korea-community or co-work?
            {/* Speech bubble tail - pointing to the right */}
            <div
              style={{
                position: 'absolute',
                bottom: '15px',
                right: '-8px',
                width: '0',
                height: '0',
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                borderLeft: '8px solid rgba(22, 33, 62, 0.95)'
              }}
            />
          </div>
        )}

        {/* Floating Icon */}
        <a 
          href="https://t.me/TEMPi_KR" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              // background: 'linear-gradient(145deg, var(--accent) 0%, var(--subtxt) 50%, var(--primary) 100%)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              animation: 'floatSway 3s ease-in-out infinite',
              transition: 'all 3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 12px 30px rgba(0, 212, 255, 0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
            }}
          >
            <img 
              // src="/modu-removebg-preview.png" 
              src="/modudao_whitebg.jpeg" 
              alt="ModuDAO TEMPi" 
              style={{ 
                width: '30px', 
                height: '30px',
                borderRadius: '50%',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
              }} 
            />
          </div>
        </a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
