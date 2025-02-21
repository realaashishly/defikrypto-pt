'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SpotlightCard from '@/blocks/Components/SpotlightCard/SpotlightCard';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import Wrapper from '@/components/wrapper';
import Image from 'next/image';
import Link from 'next/link';

export default function AppointmentBooking() {
    const rock1Ref = useRef(null);
    const rock2Ref = useRef(null);

    useEffect(() => {
        gsap.to(rock1Ref.current, {
            rotation: 360,
            duration: 10,
            repeat: -1,
            ease: 'linear',
        });
        gsap.to(rock2Ref.current, {
            y: '+=20',
            yoyo: true,
            repeat: -1,
            duration: 3,
            ease: 'sine.inOut',
        });
    }, []);

    return (
        <Wrapper>
            <div className='w-full relative h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-12'>
                <SpotlightCard
                    className='custom-spotlight-card p-6 md:p-12 lg:p-24 border-brand-yellow/60 bg-brand-yellow/10'
                    spotlightColor='rgba(217, 179, 67, 0.5)'
                >
                    <div className='flex flex-col justify-center items-center space-y-8'>
                        <div className='max-w-3xl lg:max-w-4xl mx-auto text-center space-y-4 md:space-y-6'>
                            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-relaxed'>
                                Schedule Your Consultation Today
                            </h1>
                            <p className='text-base md:text-lg lg:text-xl text-muted-foreground leading-snug md:leading-relaxed max-w-2xl mx-auto px-4'>
                                Take the first step towards transforming your
                                business with our expert services. Book a
                                consultation to discuss how we can collaborate to
                                achieve your goals.
                            </p>
                        </div>
                        <Link
                            href='#'
                            className='group transition-transform hover:scale-105 active:scale-95'
                        >
                            <InteractiveHoverButton className='px-6 py-3 md:px-8 md:py-4 text-sm md:text-base'>
                                Book an Appointment
                            </InteractiveHoverButton>
                        </Link>
                    </div>
                </SpotlightCard>
                {/* Animated Background Images */}
                <Image
                    ref={rock1Ref}
                    src='/images/bg/rock6.svg'
                    alt='blockchain-distribution'
                    width={200}
                    height={200}
                    className='absolute top-10 left-0 -z-10 rotate-45'
                />
                <Image
                    ref={rock2Ref}
                    src='/images/bg/rock3.svg'
                    alt='blockchain-distribution'
                    width={200}
                    height={200}
                    className='absolute bottom-10 right-0 -z-10'
                />
            </div>
        </Wrapper>
    );
}
