'use client';

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import {
    DiscordLogoIcon,
    InstagramLogoIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons';

// Memoized Social Icons to prevent unnecessary re-renders
const SocialLinks = React.memo(() => (
    <>
        <Link
            href='#'
            aria-label='Discord'
            className='p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all'
            title='Join our Discord'
        >
            <DiscordLogoIcon className='w-5 h-5 sm:w-6 sm:h-6 hover:text-brand-primary transition-colors duration-300' />
        </Link>
        <Link
            href='#'
            aria-label='Twitter'
            className='p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all'
            title='Follow us on Twitter'
        >
            <TwitterLogoIcon className='w-5 h-5 sm:w-6 sm:h-6 hover:text-brand-primary transition-colors duration-300' />
        </Link>
        <Link
            href='#'
            aria-label='Instagram'
            className='p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all'
            title='Follow us on Instagram'
        >
            <InstagramLogoIcon className='w-5 h-5 sm:w-6 sm:h-6 hover:text-brand-primary transition-colors duration-300' />
        </Link>
    </>
));

const RotatingLogo = React.memo(() => {
    const ringRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && ringRef.current) {
            // Use CSS animation for better performance
            ringRef.current.style.animation = 'rotate 12s linear infinite';

            return () => {
                if (ringRef.current) {
                    ringRef.current.style.animation = '';
                }
            };
        }
    }, []);

    return (
        <div className='relative flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12'>
            <div
                ref={ringRef}
                className='absolute w-full h-full animate-spin will-change-transform'
                style={{ animation: 'rotate 6s linear infinite' }}
            >
                <Image
                    src='/icons/defi_rec_cr.png'
                    alt=''
                    width={56}
                    height={56}
                    className='object-contain w-full h-full'
                    priority
                    fetchPriority='high'
                    aria-hidden='true'
                />
            </div>
            <div className='relative w-6 h-6 sm:w-8 sm:h-8 -mt-1'>
                <Image
                    src='/icons/defi_rec_tr.1.svg'
                    alt='DefiKrypto Logo'
                    width={32}
                    height={32}
                    className='object-contain w-full h-full'
                    aria-hidden='true'
                />
            </div>
        </div>
    );
});

export default function Navbar() {
    return (
        <nav className='px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 flex items-center justify-between w-full relative max-w-8xl mx-auto'>
            {/* Branding */}
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight'>
                DEFIKRYPTO
                <span className='text-brand-primary'>.</span>
            </h1>

            {/* Logo */}
            <Link
                href='/'
                className='absolute left-1/2 -translate-x-1/2'
            >
                <RotatingLogo />
            </Link>

            {/* Social Links */}
            <div className='flex gap-2 sm:gap-3'>
                <SocialLinks />
            </div>

            {/* CSS Animation */}
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
