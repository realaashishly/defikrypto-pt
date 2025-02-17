import TextPressure from '@/blocks/TextAnimations/TextPressure/TextPressure';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import Coins from '@/components/spline/coins';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='flex flex-col items-center justify-center w-full px-4 py-12 md:py-16 lg:py-20 mb-36'>
            {/* Text Content */}
            <div className='max-w-4xl xl:max-w-6xl text-center flex flex-col items-center gap-4'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9]'>
                    <div className='flex flex-wrap items-center justify-center gap-3 md:gap-4'>
                        <span>Transform Your</span>
                        <span className='relative w-12 h-12 md:w-16 md:h-16 -rotate-12'>
                            <Image
                                src='/images/hero-images/image.png'
                                alt='Vivid Motion Logo'
                                width={60}
                                height={60}
                                className='object-contain animate-float'
                            />
                        </span>
                    </div>

                    <span className='block'>Online Presence with</span>

                    <TextPressure
                        text='Endless ✦ Creativity'
                        className='mt-2 md:mt-3'
                        fontFamily='inter'
                        flex='false'
                        textColor='#D9B343'
                        minFontSize={16}
                    />
                </h1>

                {/* CTA Button */}
                <Link
                    href='#'
                    className='group transition-transform hover:scale-105 active:scale-95'
                >
                    <InteractiveHoverButton className='px-8 py-4 text-sm md:text-base'>
                        Book a call
                    </InteractiveHoverButton>
                </Link>
            </div>

            {/* 3D Visualization */}
            <div className='w-full max-w-4xl xl:max-w-5xl h-[88vh] min-h-[300px] max-h-[800px] mt-8 md:-mt-12 object-cover'>
                <Coins />
            </div>
        </section>
    );
}
