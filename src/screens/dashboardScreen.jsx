import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { initialProducts } from '../data/products';
import { categoryMeta, categoryThemes } from '../data/categoryThemes';
import { categoryPath } from '../utils/navigation';
import partnersImage from '../assets/About_us_image_1080x.webp';

const clientPains = [
    {
        icon: '📋',
        title: 'Quotes stall when numbers aren’t clear',
        accent: '#f37500',
    },
    {
        icon: '📉',
        title: 'Margins get lost in spreadsheet chaos',
        accent: '#649e1e',
    },
    {
        icon: '📦',
        title: 'Pack sizes don’t match what buyers need',
        accent: '#67003f',
    },
    {
        icon: '⏳',
        title: 'You close the deal… then chase the landing price',
        accent: '#f37500',
    },
];

const growthPoints = [
    { title: 'Price with confidence', accent: '#649e1e' },
    { title: 'Move products faster', accent: '#f37500' },
    { title: 'Grow together', accent: '#67003f' },
];

export default function DashboardScreen() {
    const navigate = useNavigate();
    const products = initialProducts;
    const categories = [...new Set(products.map((p) => p.category))];

    return (
        <div className="min-h-screen bg-[#fafaf8] flex flex-col">
            <Header />

            {/* Welcome + growth — one continuous section */}
            <section className="relative overflow-hidden">
                <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                    style={{
                        background:
                            'linear-gradient(165deg, #eef8d8 0%, #fafaf8 32%, #fff4e0 68%, #f0f7e6 88%, #fafaf8 100%)',
                    }}
                />
                <div
                    className="pointer-events-none absolute -right-20 -top-24 h-[480px] w-[480px] rounded-full animate-pulse-glow"
                    aria-hidden="true"
                    style={{
                        background: 'radial-gradient(circle, rgba(100,158,30,0.28) 0%, transparent 68%)',
                    }}
                />
                <div
                    className="pointer-events-none absolute -left-32 bottom-1/3 h-[360px] w-[360px] rounded-full opacity-70"
                    aria-hidden="true"
                    style={{
                        background: 'radial-gradient(circle, rgba(243,117,0,0.14) 0%, transparent 70%)',
                    }}
                />
                <div className="pointer-events-none absolute inset-0 bff-grain opacity-45" aria-hidden="true" />

                <svg
                    className="pointer-events-none absolute inset-0 w-full h-full opacity-40 md:opacity-50"
                    viewBox="0 0 1200 900"
                    fill="none"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <path d="M90 540 C90 580 140 580 140 540 C140 500 70 500 70 560" stroke="#649e1e" strokeWidth="3" strokeLinecap="round" className="animate-shimmer" />
                    <path d="M980 120 L1000 120 M990 110 L990 130 M960 150 L970 150 M965 145 L965 155" stroke="#f37500" strokeWidth="3" strokeLinecap="round" className="animate-sparkle" />
                    <path d="M1080 420 Q1100 390 1120 420" stroke="#870024" strokeWidth="4" strokeLinecap="round" className="animate-float-slow" />
                    <circle cx="200" cy="160" r="6" fill="#649e1e" className="animate-sparkle" />
                    <circle cx="860" cy="560" r="5" fill="#f37500" opacity="0.7" />
                    <path d="M720 80 A28 28 0 0 1 720 136 Z" fill="#8bc34a" opacity="0.35" transform="rotate(25 720 108)" />
                </svg>

                <div className="relative max-w-[1480px] mx-auto w-full px-5 sm:px-6 pt-10 pb-10 md:pt-14 md:pb-12">
                    {/* Welcome */}
                    <div className="w-full animate-fade-up">
                        <h1 className="tracking-tight">
                            <span
                                className="block font-['Finger_Paint'] text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] text-[#649e1e] leading-[1.02]"
                                style={{ WebkitTextStroke: '0.6px #649e1e', paintOrder: 'stroke fill' }}
                            >
                                Welcome,
                            </span>
                            <span className="mt-3 block text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#1a1f16] leading-[1.08] tracking-tight">
                                product breakdown platform
                            </span>
                        </h1>

                        <div className="mt-5 w-full space-y-1 text-lg sm:text-xl font-medium text-[#1a1f16]/65 leading-relaxed">
                            <p>
                                Costing & landing prices for every snack, pack, and variant — ready when you are.
                            </p>
                            <p>
                                Stronger margins, clearer deals, and a snack range that helps your business grow with every order.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href="#categories"
                                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1a1f16] text-white text-sm font-bold hover:bg-[#649e1e] transition-colors duration-300"
                            >
                                Browse catalogue
                                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                            </a>
                            <a
                                href="tel:+918341234440"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#1a1f16]/15 text-[#1a1f16] text-sm font-bold hover:border-[#649e1e] hover:text-[#649e1e] transition-colors duration-300"
                            >
                                Talk to sales
                            </a>
                        </div>
                    </div>

                    {/* Partners / grow — same section, tight gap */}
                    <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-5 lg:gap-8 items-center">
                        <div className="relative flex justify-center lg:justify-start animate-fade-up">
                            <img
                                src={partnersImage}
                                alt="Partners and distributors growing with Better Food Factory"
                                className="w-full max-w-[400px] sm:max-w-[460px] h-auto object-contain"
                            />
                        </div>

                        <div className="animate-fade-up animate-fade-up-delay-1 lg:pl-4 max-w-lg">
                            <h2
                                className="font-['Finger_Paint'] text-[1.85rem] sm:text-[2.35rem] md:text-[2.65rem] text-[#67003f] leading-[1.1] tracking-tight"
                                style={{ WebkitTextStroke: '0.5px #67003f', paintOrder: 'stroke fill' }}
                            >
                                We help you grow
                            </h2>

                            <p className="mt-3 text-[15px] sm:text-lg font-semibold text-[#1a1f16]/80 tracking-tight leading-snug">
                                Better margins
                                <span className="mx-2 inline-block h-1.5 w-1.5 rounded-full bg-[#67003f]/45 align-middle" aria-hidden="true" />
                                Clearer prices
                                <span className="mx-2 inline-block h-1.5 w-1.5 rounded-full bg-[#67003f]/45 align-middle" aria-hidden="true" />
                                Stronger shelves
                            </p>

                            <ul className="mt-6 list-none m-0 p-0 space-y-3.5">
                                {growthPoints.map((point, idx) => (
                                    <li
                                        key={point.title}
                                        className={`group flex items-center gap-3.5 animate-fade-up animate-fade-up-delay-${Math.min(idx + 2, 4)}`}
                                    >
                                        <span
                                            className="font-['Finger_Paint'] text-lg leading-none shrink-0"
                                            style={{ color: point.accent }}
                                            aria-hidden="true"
                                        >
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-[15px] sm:text-base font-bold text-[#1a1f16] tracking-tight group-hover:text-[#67003f] transition-colors duration-200">
                                            {point.title}
                                        </h3>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-14"
                    aria-hidden="true"
                    style={{
                        background: 'linear-gradient(to bottom, transparent, #fafaf8)',
                    }}
                />
            </section>

            {/* Categories Grid */}
            <main id="categories" className="relative w-full flex-1 scroll-mt-[110px] sm:scroll-mt-[120px] bg-[#fafaf8]">
                <div className="max-w-[1480px] mx-auto w-full px-5 sm:px-6 py-14">
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-stone-900">Product Categories</h2>
                        <p className="text-stone-500 font-medium mt-2">Select a category to view pricing breakdown.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {categories.map((category, idx) => {
                            const count = products.filter((p) => p.category === category).length;
                            const meta = categoryMeta[category] || {};
                            const theme = categoryThemes[category] || categoryThemes['Trail Mix'];
                            const delayClass = `animate-fade-up-delay-${Math.min(idx + 1, 4)}`;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => navigate(categoryPath(category))}
                                    className={`group relative text-left rounded-[2rem] h-[320px] md:h-[360px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${theme.shadow} ${theme.bg} animate-fade-up ${delayClass}`}
                                >
                                    {/* --- PLAYFUL BACKGROUND SVGS --- */}
                                    {/* Top Left Blob */}
                                    <svg className="absolute top-0 left-0 w-48 h-48 transform -translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" viewBox="0 0 100 100" fill={theme.blob1} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0,0 L100,0 C100,60 60,100 0,100 Z" />
                                    </svg>

                                    {/* Bottom Right Blob */}
                                    <svg className="absolute bottom-0 right-0 w-64 h-64 transform translate-x-12 translate-y-12 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12" viewBox="0 0 100 100" fill={theme.blob2} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100,100 L0,100 C0,40 40,0 100,0 Z" />
                                    </svg>

                                    {/* Doodles */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
                                        {/* Swirl */}
                                        <path d="M40,250 C40,270 60,270 60,250 C60,230 30,230 30,260" stroke={theme.blob1} strokeWidth="2" fill="none" strokeLinecap="round" />
                                        {/* Sparkles */}
                                        <path d="M160,50 L170,50 M165,45 L165,55 M150,65 L155,65 M152.5,62.5 L152.5,67.5" stroke={theme.doodle} strokeWidth="2" strokeLinecap="round" />
                                        {/* Geometric Half Circle */}
                                        <path d="M40,120 A15,15 0 0,1 40,150 Z" fill={theme.blob1} transform="rotate(45 40 135)" />
                                        {/* Wavy Line */}
                                        <path d="M130,260 Q140,250 150,260 T170,260" stroke={theme.doodle} strokeWidth="2" fill="none" strokeLinecap="round" />
                                        {/* Macaroni / Curved line */}
                                        <path d="M160,110 Q170,90 180,110" stroke={theme.doodle} strokeWidth="3" fill="none" strokeLinecap="round" />
                                        {/* Dots */}
                                        <circle cx="20" cy="80" r="3" fill={theme.doodle} />
                                        <circle cx="180" cy="180" r="4" fill={theme.blob1} />
                                    </svg>
                                    {/* --- END PLAYFUL BACKGROUND --- */}

                                    {/* Variant count */}
                                    <div className="absolute top-5 right-5 z-10 w-12 h-12 rounded-2xl bg-white/90 text-gray-900 flex flex-col items-center justify-center shadow-lg backdrop-blur-sm border border-white">
                                        <span className="text-lg font-black leading-none">{count}</span>
                                        <span className="text-[7px] font-bold uppercase tracking-wider opacity-60">vars</span>
                                    </div>

                                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                                        <h3 className={`text-4xl md:text-5xl font-['Finger_Paint'] ${theme.titleText} mb-2`}>
                                            {category}
                                        </h3>
                                        <p className={`text-sm ${theme.titleText} opacity-80 font-semibold mb-4 max-w-sm leading-relaxed`}>
                                            {meta.description}
                                        </p>
                                        <span className={`inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] ${theme.titleText} group-hover:gap-4 transition-all`}>
                                            View Breakdown →
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Client pains + CTA */}
                <div className="max-w-[1480px] mx-auto w-full px-5 sm:px-6 pb-14">
                    <section id="about" className="mt-10 scroll-mt-[110px] sm:scroll-mt-[120px]">
                        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-black text-[#1a1f16] tracking-tight uppercase mb-8 md:mb-10">
                            It&apos;s not just{' '}
                            <span className="font-['Finger_Paint'] normal-case text-[#67003f] tracking-normal">
                                &ldquo;busy work&rdquo;
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
                            {clientPains.map((pain) => (
                                <div
                                    key={pain.title}
                                    className="flex items-center gap-4 rounded-[2rem] bg-white px-5 py-4 shadow-[0_6px_24px_rgba(26,31,22,0.06)] border border-[#1a1f16]/[0.04]"
                                >
                                    <span
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl"
                                        style={{ backgroundColor: `${pain.accent}22` }}
                                        aria-hidden="true"
                                    >
                                        {pain.icon}
                                    </span>
                                    <p className="text-[15px] sm:text-base font-bold text-[#1a1f16] leading-snug tracking-tight">
                                        {pain.title}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-8 text-center text-sm sm:text-base font-medium text-[#1a1f16]/50 max-w-xl mx-auto leading-relaxed">
                            This platform gives partners costing, landing, and pack-wise clarity — so every quote moves faster.
                        </p>
                    </section>

                    <div className="mt-14 rounded-2xl bg-stone-900 text-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-black mb-1">Need a custom quote?</h3>
                            <p className="text-white/60 text-sm">Bulk orders, distributor pricing, and corporate gifting.</p>
                        </div>
                        <a
                            href="tel:+918341234440"
                            className="shrink-0 px-6 py-3 rounded-xl bg-[#649e1e] font-bold text-sm hover:bg-[#4a7a14] transition-colors"
                        >
                            Contact Sales →
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
