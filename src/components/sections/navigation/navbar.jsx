'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

// Updated socialIcons array with fill="currentColor" added to each SVG
const socialIcons = [
    {
        name: 'Instagram',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>`,
        link: 'https://instagram.com/dapprush',
    },
    {
        name: 'Telegram',
        icon: `<svg viewBox="0 0 48 48" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="#ffffff"/>
</svg>`,
        link: 'https://t.me/dapprush',
    },
    {
        name: 'Twitter',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>`,
        link: 'https://twitter.com/dapprush',
    },
    {
        name: 'Discord',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
             <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
           </svg>`,
        link: 'https://discord.com/invite/dapprush',
    },
];

const SocialLinks = React.memo(() => (
    <div className='flex gap-1 sm:gap-3'>
        {socialIcons.map((icon, index) => (
            <Link
                key={index}
                href={icon.link}
                aria-label={icon.name}
                className='p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all'
                title={`Follow us on ${icon.name}`}
            >
                <div
                    dangerouslySetInnerHTML={{ __html: icon.icon }}
                    className='w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 hover:text-brand-primary'
                />
            </Link>
        ))}
    </div>
));

const RotatingLogo = React.memo(() => {
    const ringRef = useRef(null);

    useEffect(() => {
        if (ringRef.current) {
            ringRef.current.style.animation = 'rotate 8s linear infinite';
            return () => {
                if (ringRef.current) {
                    ringRef.current.style.animation = '';
                }
            };
        }
    }, []);

    return (
        <div className='relative flex justify-start items-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'>
            <div
                ref={ringRef}
                className='absolute w-full h-full z-50'
            >
                <Image
                    src='/images/defi_rec_cr.png'
                    alt='Rotating background'
                    width={64}
                    height={64}
                    className='object-contain w-full h-full z-50'
                    aria-hidden='true'
                    loading='eager'
                />
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12'>
                <Image
                    src='/icons/defi_rec_tr.1.svg'
                    alt='DefiKrypto Logo'
                    width={40}
                    height={40}
                    className='object-contain w-full h-full'
                    aria-hidden='true'
                    loading='eager'
                />
            </div>
        </div>
    );
});

export default function Navbar() {
    return (
        <nav className='relative  py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 flex items-center justify-between w-full max-w-screen-xl mx-auto mt-6'>
            {/* Logo aligned left */}
            <Link
                href='/'
                className='flex items-center'
            >
                <RotatingLogo />
            </Link>
            {/* Branding – hidden on small devices */}
            <h1 className='hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:block text-xl md:text-3xl lg:text-4xl font-black tracking-tight text-center'>
                DappRush<span className='text-brand-primary'>.</span>
            </h1>
            {/* Social Links */}
            <SocialLinks />
            {/* Global CSS for animation */}
            <style
                jsx
                global
            >{`
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                @media (prefers-reduced-motion: reduce) {
                    .animate-spin {
                        animation: none;
                    }
                }
            `}</style>
        </nav>
    );
}
