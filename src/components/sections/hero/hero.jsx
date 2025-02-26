'use client';
import TextPressure from '@/blocks/TextAnimations/TextPressure/TextPressure';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { lazy, useLayoutEffect, useRef } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    // Refs for GSAP animations
    const rock1Ref = useRef(null);
    const rock2Ref = useRef(null);
    const rock3Ref = useRef(null);

    useLayoutEffect(() => {
        const animations = [
            { ref: rock1Ref, x: -200, y: -160 },
            { ref: rock2Ref, x: 240, y: 180 },
            { ref: rock3Ref, x: -170, y: 140 },
        ];

        animations.forEach(({ ref, x, y }) => {
            if (ref.current) {
                gsap.fromTo(
                    ref.current,
                    { x: 0, y: 0 },
                    {
                        x,
                        y,
                        scrollTrigger: {
                            trigger: ref.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                        },
                    }
                );
            }
        });

        return () =>
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }, []);

    return (
        <section className='flex flex-col relative items-center justify-center w-full py-12 md:py-20 lg:py-24 xl:py-28 overflow-hidden my-12'>
            {/* Text Content */}
            <div className='w-full md:max-w-4xl relative text-center flex flex-col items-center gap-6 p-1 sm:p-6 '>
                {/* Heading */}
                <h1 className='text-xl md:text-5xl  font-bold uppercase leading-tight '>
                    <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4'>
                        <span>Fueling your growth</span>
                        {/* Image inside heading */}
                        <span className='relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 -rotate-12 hidden sm:inline-block -mt-12'>
                            <Image
                                src='/images/image.png'
                                alt='Vivid Motion Logo'
                                width={56}
                                height={56}
                                className='object-contain animate-float'
                                loading='eager'
                            />
                        </span>
                    </div>
                    <span>in web3 solutions with</span>
                    <TextPressure
                        text='Innovation ✦ Disruption'
                        fontFamily='inter'
                        textColor='#D9B343'
                        minFontSize={5}
                        strokeWidth={4}
                        className="text-xl"
                    />
                </h1>

                {/* Button */}
                <Link
                    href='#'
                    className='group transition-transform hover:scale-105 active:scale-95'
                >
                    <InteractiveHoverButton className='px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg lg:text-xl'>
                        Book an appointment
                    </InteractiveHoverButton>
                </Link>
            </div>

            {/* 3D Visualization with Decorative Rocks */}
            <div className='w-full relative max-w-4xl h-[60vh] sm:h-[65vh] md:h-[95vh] max-h-[700px] mt-12 md:mt-16'>
                <div className='hidden md:block w-full h-full rounded-xl object-contain'>
                    <Spline
                        scene='https://prod.spline.design/Tq4nAM0x1iaR7TS3/scene.splinecode'
                        className='w-full h-full rounded-xl object-contain'
                    />
                </div>
                <div className='md:hidden w-full h-full rounded-xl'>
                    <Image
                        src='/images/radial-glass.gif'
                        alt='3D scene'
                        width={500}
                        height={500}
                        className='w-full h-full rounded-xl object-cover'
                    />
                </div>

                {/* Rock 3 */}
                <div className='absolute z-10 -bottom-6 right-0 md:-right-0 md:-bottom-24  w-[24%] max-w-[150px] sm:max-w-[200px] rotate-90'>
                    <Image
                        src='/images/bg/rock4.svg'
                        alt='Decorative rock 3'
                        width={150}
                        height={150}
                        className='object-contain'
                    />
                </div>

                {/* Rock 1 */}
                <div
                    ref={rock1Ref}
                    className='absolute z-10 top-0 left-0  w-[18%] max-w-[140px] sm:max-w-[160px]'
                >
                    <Image
                        src='/images/bg/rock1.svg'
                        alt='Decorative rock 1'
                        width={160}
                        height={160}
                        className='object-contain'
                    />
                </div>
            </div>
            {/* Rock 1 */}
            <div
                ref={rock1Ref}
                className='absolute left-36 md:left-44 top-36 -z-10 w-[22%] max-w-[180px] sm:max-w-[160px]'
            >
                <Image
                    src='/images/bg/rock1.svg'
                    alt='Decorative rock 1'
                    width={200}
                    height={200}
                    className='object-contain'
                />
            </div>

            {/* Rock 2 */}
            <div
                ref={rock2Ref}
                className='absolute right-36 md:right-56 top-56 z-10 w-[24%] max-w-[190px] sm:max-w-[160px]'
            >
                <Image
                    src='/images/bg/rock2.svg'
                    alt='Decorative rock 2'
                    width={220}
                    height={220}
                    className='object-contain'
                />
            </div>
        </section>
    );
}
