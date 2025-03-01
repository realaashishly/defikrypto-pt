'use client';

import { TextReveal } from '@/components/magicui/text-reveal';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const videoRef = useRef(null);

    useGSAP(() => {
        if (!videoRef.current) return;

        const video = videoRef.current;

        const scrollTrigger = ScrollTrigger.create({
            trigger: video,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => video.play(),
            onLeave: () => video.pause(),
            onEnterBack: () => video.play(),
            onLeaveBack: () => video.pause(),
        });

        return () => scrollTrigger.kill(); // Cleanup on unmount
    }, []);

    return (
        <div className='flex flex-col lg:flex-row w-full items-center justify-between p-1 md:p-8 gap-12 md:gap-24 my-12'>
            {/* Video Section */}
            <div className='flex flex-col items-center justify-between gap-1 md:gap-4 md:mb-0'>
                <video
                    ref={videoRef}
                    src='/ceo/ceo.mp4'
                    className='w-[32rem] h-[32rem] rounded-lg object-cover'
                    muted
                    playsInline
                    preload='none' // Prevents unnecessary buffering
                    loading='lazy' // Improves initial page load
                ></video>

                {/* Name & Socials */}
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h3 className='text-lg md:text-xl flex flex-col items-center'>
                        <span className='text-2xl'>Md. Saklain Jawed</span>
                        <span className='text-zinc-700'>Founder, CEO</span>
                    </h3>
                    <Link
                        href='www.linkedin.com/in/md-saklain-jawed-3772271b3'
                        prefetch={false}
                        className='cursor-pointer'
                    >
                        <Linkedin />
                    </Link>
                </div>
            </div>

            {/* About Section */}
            <div className='w-full rounded-lg'>
                <h3 className='hidden lg:block font-bold leading-snug md:leading-tight'>
                    <TextReveal
                        text='DappRush is a leading Web3 agency dedicated to accelerating
                        the growth of decentralized applications (dApps). Our
                        platform connects businesses, developers, and users with
                        innovative solutions driving the future of blockchain
                        technology. We specialize in data-driven growth marketing,
                        strategic development, and impactful adoption strategies
                        that ensure your dApps reach their target audience and
                        deliver measurable results. As your trusted Web3 partner,
                        DappRush.xyz empowers you to navigate the decentralized
                        ecosystem, scale your projects, and unlock the full
                        potential of blockchain technology.'
                    />
                </h3>
                <p className='lg:hidden text-xl md:text-3xl font-bold leading-snug md:leading-tight text-justify'>
                    DappRush is a leading Web3 agency dedicated to accelerating
                    the growth of decentralized applications (dApps). Our
                    platform connects businesses, developers, and users with
                    innovative solutions driving the future of blockchain
                    technology. We specialize in data-driven growth marketing,
                    strategic development, and impactful adoption strategies
                    that ensure your dApps reach their target audience and
                    deliver measurable results. As your trusted Web3 partner,
                    DappRush.xyz empowers you to navigate the decentralized
                    ecosystem, scale your projects, and unlock the full
                    potential of blockchain technology.
                </p>
            </div>
        </div>
    );
}
