const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61565346456750&mibextid=ZbWKwL',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/betterfoodfactoryin?igsh=MTUzZGc1MjZ2MmFodA==',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@betterfoodfactory',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto bg-[#67003f] text-white">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-10 lg:gap-x-16 items-start">
          <div className="flex flex-col">
            <img
              src="https://betterfoodfactory.in/cdn/shop/files/BFFLOGO_TM_W_100x100@2x.png?v=1735987940"
              alt="Better Food Factory"
              className="w-[100px] sm:w-[110px] h-auto object-contain object-left"
            />

            <div className="mt-4 flex items-center gap-3.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="w-6 h-6 text-white hover:opacity-80 transition-opacity [&_svg]:w-full [&_svg]:h-full"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold leading-none mb-3.5">Let&apos;s Talk</h3>
            <div className="flex flex-col gap-2.5 text-[15px] leading-relaxed font-normal">
              <a href="tel:+918341234440" className="hover:opacity-80 transition-opacity">
                +91 83412 34440
              </a>
              <a href="mailto:support@betterfoodfactory.in" className="hover:opacity-80 transition-opacity">
                support@betterfoodfactory.in
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold leading-none mb-3.5">Find Us</h3>
            <div className="text-[15px] leading-relaxed font-normal max-w-sm">
              <p>
                Ancient Eats Pvt Ltd.
                <br />
                Plot Number 25,
                <br />
                1st Floor, Nikitha Enclave, Puppalguda, Manikonda.
              </p>
              <p className="mt-2">Landmark: Above Samsung store.</p>
              <p>Pincode: 500089.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 flex items-center justify-between gap-6">
          <p className="text-sm leading-relaxed text-white/95">
            ©2025 Betterfoodfactory All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="shrink-0 w-10 h-10 rounded-full bg-white text-[#67003f] flex items-center justify-center hover:scale-105 transition-transform"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5" aria-hidden="true">
              <path d="M7 14l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 10l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
