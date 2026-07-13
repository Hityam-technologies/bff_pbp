const cardPatterns = {
  'Trail Mix': ({ blob1, blob2, doodle }) => (
    <>
      <circle cx="12" cy="12" r="5" fill={blob2} opacity="0.35" />
      <ellipse cx="28" cy="20" rx="6" ry="4" fill={blob1} opacity="0.25" transform="rotate(20 28 20)" />
      <circle cx="8" cy="28" r="3" fill={doodle} opacity="0.4" />
    </>
  ),
  'Seed Mix': ({ blob1, blob2, doodle }) => (
    <>
      <ellipse cx="14" cy="14" rx="3" ry="7" fill={blob1} opacity="0.3" transform="rotate(30 14 14)" />
      <ellipse cx="26" cy="22" rx="2.5" ry="6" fill={blob2} opacity="0.35" transform="rotate(-20 26 22)" />
      <circle cx="10" cy="30" r="2.5" fill={doodle} opacity="0.4" />
    </>
  ),
  Edamame: ({ blob1, blob2, doodle }) => (
    <>
      <ellipse cx="18" cy="18" rx="12" ry="5" fill={blob1} opacity="0.2" />
      <circle cx="12" cy="16" r="4" fill={blob2} opacity="0.35" />
      <circle cx="22" cy="18" r="4" fill={doodle} opacity="0.3" />
    </>
  ),
  'Energy Bars': ({ blob1, blob2, doodle }) => (
    <>
      <rect x="6" y="10" width="20" height="8" rx="3" fill={blob1} opacity="0.25" transform="rotate(-8 16 14)" />
      <path d="M28,8 L31,4 L34,8 L31,12 Z" fill={doodle} opacity="0.4" />
    </>
  ),
  'Protein Bars': ({ blob1, blob2, doodle }) => (
    <>
      <rect x="8" y="12" width="22" height="9" rx="3" fill={blob1} opacity="0.25" />
      <circle cx="30" cy="10" r="5" fill="none" stroke={doodle} strokeWidth="1.5" opacity="0.35" />
    </>
  ),
};

export default function CategoryPageDecor({ category, theme }) {
  const Pattern = cardPatterns[category] || cardPatterns['Trail Mix'];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(165deg, ${theme.light} 0%, #fafaf8 45%, ${theme.light}cc 100%)`,
        }}
      />

      <div className="absolute inset-0 bff-grain opacity-40" />

      <svg
        className="absolute -top-20 -left-20 w-[360px] h-[360px] animate-blob-drift opacity-[0.1]"
        viewBox="0 0 100 100"
        fill={theme.blob1}
      >
        <circle cx="50" cy="50" r="48" />
      </svg>

      <svg
        className="absolute top-[18%] -right-32 w-[420px] h-[420px] animate-blob-drift-reverse opacity-[0.08]"
        viewBox="0 0 100 100"
        fill={theme.blob2}
      >
        <ellipse cx="50" cy="50" rx="48" ry="40" />
      </svg>

      <svg
        className="absolute top-[48%] -left-16 w-[300px] h-[300px] animate-float-slow opacity-[0.07]"
        viewBox="0 0 100 100"
        fill={theme.blob2}
      >
        <path d="M0,50 Q50,0 100,50 Q50,100 0,50" />
      </svg>

      <svg
        className="absolute bottom-[5%] right-[3%] w-[380px] h-[380px] animate-blob-drift opacity-[0.09]"
        style={{ animationDelay: '2s' }}
        viewBox="0 0 100 100"
        fill={theme.blob1}
      >
        <circle cx="50" cy="50" r="45" />
      </svg>

      <svg className="absolute inset-0 w-full h-full opacity-[0.14]" viewBox="0 0 1440 2000" preserveAspectRatio="xMidYMid slice">
        <g transform="translate(100, 380)" className="animate-float-slow">
          <Pattern blob1={theme.blob1} blob2={theme.blob2} doodle={theme.doodle} />
        </g>
        <g transform="translate(1280, 420)" className="animate-float-reverse" style={{ animationDelay: '1s' }}>
          <Pattern blob1={theme.blob1} blob2={theme.blob2} doodle={theme.doodle} />
        </g>
        <g transform="translate(80, 780) scale(1.1)" className="animate-float" style={{ animationDelay: '0.5s' }}>
          <Pattern blob1={theme.blob1} blob2={theme.blob2} doodle={theme.doodle} />
        </g>
        <g transform="translate(1300, 820)" className="animate-float-slow" style={{ animationDelay: '1.5s' }}>
          <Pattern blob1={theme.blob1} blob2={theme.blob2} doodle={theme.doodle} />
        </g>
        <g transform="translate(120, 1180)" className="animate-float-reverse" style={{ animationDelay: '0.8s' }}>
          <Pattern blob1={theme.blob1} blob2={theme.blob2} doodle={theme.doodle} />
        </g>
        <g transform="translate(1260, 1240)" className="animate-float" style={{ animationDelay: '2s' }}>
          <Pattern blob1={theme.blob1} blob2={theme.blob2} doodle={theme.doodle} />
        </g>

        <path
          d="M720,300 Q750,500 720,700 Q690,900 720,1100 Q750,1300 720,1500"
          stroke={theme.accent}
          strokeWidth="1"
          fill="none"
          opacity="0.06"
          strokeDasharray="4 16"
          className="animate-shimmer"
        />

        <circle cx="720" cy="700" r="90" fill="none" stroke={theme.blob1} strokeWidth="1" opacity="0.04" className="animate-spin-slow" />
        <circle cx="720" cy="1200" r="110" fill="none" stroke={theme.blob2} strokeWidth="1" opacity="0.04" className="animate-spin-slow" />
      </svg>
    </div>
  );
}
