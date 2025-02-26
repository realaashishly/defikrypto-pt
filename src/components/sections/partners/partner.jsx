'use client';
import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const partners = [
    'AppiVa Software',
    'Ashfield',
    'Bill Safe',
    'Bombay Play',
    'Calibr',
    'Trust Enterprises',
    'Bhutani Infra',
];

const RotatingLogo = React.memo(() => {
    const ringRef = useRef(null);

    useEffect(() => {
        if (ringRef.current) {
            ringRef.current.style.animation = 'rotate 12s linear infinite';
        }
        return () => {
            if (ringRef.current) {
                ringRef.current.style.animation = '';
            }
        };
    }, []);

    return (
        <div className='relative flex justify-center items-center w-28 h-28 sm:w-40 sm:h-40'>
            <div
                ref={ringRef}
                className='absolute w-full h-full animate-spin-slow'
            >
                <Image
                    src='/images/defi_rec_cr.png'
                    alt='Rotating Ring'
                    layout='fill'
                    objectFit='contain'
                    aria-hidden='true'
                />
            </div>
            <div className='relative w-16 h-16 sm:w-20 sm:h-20'>
                <Image
                    src='/icons/defi_rec_tr.1.svg'
                    alt='DefiKrypto Logo'
                    layout='fill'
                    objectFit='contain'
                    aria-hidden='true'
                />
            </div>
        </div>
    );
});

const ReviewCard = ({ partner }) => (
    <div className='h-20 w-48 sm:w-64 flex items-center justify-center rounded-xl border border-yellow-500/20 p-2 shadow-md'>
        <span className='text-lg font-semibold uppercase text-yellow-500/80'>
            {partner}
        </span>
    </div>
);

export default function Partner() {
    const halfIndex = Math.ceil(partners.length / 2);
    const firstRow = partners.slice(0, halfIndex);
    const secondRow = partners.slice(halfIndex);

    return (
            <div className='flex flex-col items-center justify-center w-full  py-12 my-12'>
                <div className='mb-12'>
                    <h5 className='text-xl uppercase text-center'>
                        Our Esteemed Partners
                    </h5>
                </div>
                <div className='relative flex flex-col items-center justify-center overflow-hidden w-full'>
                    <Marquee
                        pauseOnHover
                        className='w-full [--duration:15s]'
                    >
                        {firstRow.map((partner, index) => (
                            <ReviewCard
                                key={index}
                                partner={partner}
                            />
                        ))}
                    </Marquee>
                    <div className='absolute w-full flex justify-center my-8 overflow-hidden'>
                        <div className='glassmorphic-card w-40 h-40 sm:w-72 sm:h-72 flex items-center justify-center rounded-full border border-yellow-500/20 z-10'>
                            <RotatingLogo />
                        </div>
                    </div>
                    <Marquee
                        reverse
                        pauseOnHover
                        className='w-full [--duration:15s]'
                    >
                        {secondRow.map((partner, index) => (
                            <ReviewCard
                                key={index}
                                partner={partner}
                            />
                        ))}
                    </Marquee>
                    <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent'></div>
                    <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-transparent'></div>
                </div>
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
                    .animate-spin-slow {
                        animation: rotate 12s linear infinite;
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .animate-spin-slow {
                            animation: none;
                        }
                    }
                `}</style>
            </div>
    );
}
