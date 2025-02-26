'use client';
import { TextReveal } from '@/components/magicui/text-reveal';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const videoRef = useRef(null);

    useGSAP(() => {
        if (videoRef.current) {
            ScrollTrigger.create({
                trigger: videoRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                onEnter: () => videoRef.current.play(),
                onLeave: () => videoRef.current.pause(),
                onEnterBack: () => videoRef.current.play(),
                onLeaveBack: () => videoRef.current.pause(),
            });
        }
    }, []);

    return (
        <div className='flex flex-col md:flex-row w-full items-center justify-between p-1 md:p-8 gap-24 my-12'>
            <div className='flex items-center justify-between gap-4 md:mb-0'>
                <video
                    ref={videoRef}
                    src='/ceo/ceo.mp4'
                    className='w-[32rem] h-[32rem] rounded-lg object-cover'
                    muted
                    playsInline
                ></video>
            </div>
            <div className='w-full rounded-lg'>
                <h3 className='hidden md:block font-bold leading-snug md:leading-tight'>
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
                <p className='  md:hidden text-xl md:text-3xl font-bold leading-snug md:leading-tight'>
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
