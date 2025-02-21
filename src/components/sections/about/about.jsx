'use client';
import { TextReveal } from '@/components/magicui/text-reveal';
import Wrapper from '@/components/wrapper';

export default function About() {
    return (
        <div className='flex flex-col md:flex-row w-full min-h-screen items-center justify-between p-4 md:p-8'>
            <div className='flex items-center justify-between gap-4 mb-8 md:mb-0'>
                <span className='w-2 h-2 rounded-full bg-brand-yellow'></span>
                <p className='text-lg font-medium '>Hey, Just An Intro</p>
            </div>
            <div className='w-full max-w-3xl flex flex-col space-y-6 md:space-y-8 '>
                <h3 className='text-2xl md:text-3xl font-bold leading-snug md:leading-tight'>
                    <TextReveal
                        text="As a digital designer based in Delhi, I specialize in
                        creating immersive visual experiences that captivate and
                        engage audiences. My expertise spans crafting realistic
                        renderings to developing dynamic animations and interactive
                        designs, all tailored to elevate your brand's presence."
                    />
                </h3>
                {/* <Link href='#'>
                            <InteractiveHoverButton className='px-6 py-3 text-base md:text-lg'>
                                Get in touch
                            </InteractiveHoverButton>
                        </Link> */}
            </div>
        </div>
    );
}
