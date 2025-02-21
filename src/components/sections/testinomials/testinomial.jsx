'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import CustomBadge from '@/components/ui/customBadge';
import { CircleUser } from 'lucide-react';
import Link from 'next/link';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import Image from 'next/image';

export function Testimonial() {
    const rockRefs = useRef([]);

    useEffect(() => {
        gsap.to(rockRefs.current, {
            y: '+=20',
            rotation: '+=5',
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            stagger: 0.2,
        });
    }, []);

    const testimonials = [
        {
            id: 1,
            quote: 'The AI/ML solutions provided by this agency have revolutionized our data analysis, offering insights we never thought possible.',
            name: 'Alexa Johnson',
            designation: 'Data Scientist at Quantum Analytics',
            src: '/images/clients/client-1.png',
        },
        {
            id: 2,
            quote: 'Their video editing team transformed our raw footage into compelling stories that resonate with our audience.',
            name: 'Mari Gonzalez',
            designation: 'Creative Director at Visionary Media',
            src: '/images/clients/client-2.png',
        },
        {
            id: 3,
            quote: 'The AI image generation service has been a game-changer, enabling us to create stunning visuals with ease.',
            name: 'Liam Smith',
            designation: 'Marketing Manager at PixelPerfect Studios',
            src: '/images/clients/client-3.png',
        },
        {
            id: 4,
            quote: 'Their AI-driven video editing capabilities have significantly enhanced our content quality and engagement rates.',
            name: 'Sophie Lee',
            designation: 'Content Strategist at Digital Dynamics',
            src: '/images/clients/client-4.png',
        },
        {
            id: 5,
            quote: 'Partnering with this agency for our marketing needs has boosted our brand visibility and customer engagement.',
            name: 'Daniel Kim',
            designation: 'Brand Manager at Elevate Enterprises',
            src: '/images/clients/client-5.png',
        },
        {
            id: 6,
            quote: 'The website development team delivered a sleek, user-friendly site that has improved our online presence.',
            name: 'Emily Davis',
            designation: 'Founder at Startup Solutions',
            src: '/images/clients/client-6.png',
        },
    ];

    return (
        <div className='w-full min-h-screen flex flex-col space-y-24 px-4 md:px-8 my-24 relative'>
            <div className='flex flex-col justify-center items-center space-y-8 relative'>
                <CustomBadge className='text-brand-yellow border-brand-yellow/20'>
                    <CircleUser size={24} />
                    <p>Testimonial</p>
                </CustomBadge>

                <div className='max-w-3xl lg:max-w-4xl mx-auto text-center space-y-4 md:space-y-6'>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight md:leading-relaxed'>
                        Trusted By Experts<span className='sr-only'>.</span>
                    </h1>
                    <p className='text-base md:text-lg lg:text-xl text-muted-foreground leading-snug md:leading-relaxed max-w-2xl mx-auto px-4'>
                        Real stories from real clients. See how our designs have transformed international and elevated businesses, and created lasting impressions.
                    </p>
                </div>

                <Link href='#' className='group transition-transform hover:scale-105 active:scale-95'>
                    <InteractiveHoverButton className='px-8 py-4 text-sm md:text-base'>
                        Become a partner
                    </InteractiveHoverButton>
                </Link>
            </div>
            <AnimatedTestimonials testimonials={testimonials} />

            <div className='absolute inset-0 -z-10'>
                {["rock1", "rock3", "rock5", "rock2"].map((rock, index) => (
                    <Image
                        key={index}
                        ref={(el) => (rockRefs.current[index] = el)}
                        src={`/images/bg/${rock}.svg`}
                        alt={`Decorative ${rock}`}
                        width={200}
                        height={200}
                        className='absolute -z-10 will-change-transform'
                        style={{
                            left: index % 2 === 0 ? '24px' : 'auto',
                            right: index % 2 !== 0 ? '24px' : 'auto',
                            top: index === 1 ? '52px' : index === 0 ? '0' : 'auto',
                            bottom: index > 1 ? '0' : 'auto',
                            transform: index === 2 ? 'rotate(45deg)' : 'none',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
