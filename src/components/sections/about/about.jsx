'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextReveal } from '@/components/magicui/text-reveal';
import Wrapper from '@/components/wrapper';

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
        <div className='flex flex-col md:flex-row w-full min-h-screen items-center justify-between p-4 md:p-8 space-x-24'>
            <div className='flex items-center justify-between gap-4 mb-8 md:mb-0'>
                <video ref={videoRef} src='/ceo/ceo.mp4' className='w-[32rem] h-[32rem] rounded-lg object-cover' muted playsInline></video>
            </div>
            <div className='w-full max-w-3xl flex flex-col space-y-6 md:space-y-8'>
                <h3 className='text-2xl font-bold leading-snug md:leading-tight'>
                    <TextReveal
                        text="As a digital designer based in Delhi, I specialize in
                        creating immersive visual experiences that captivate and
                        engage audiences. My expertise spans crafting realistic
                        renderings to developing dynamic animations and interactive
                        designs, all tailored to elevate your brand's presence."
                    />
                </h3>
            </div>
        </div>
    );
}
