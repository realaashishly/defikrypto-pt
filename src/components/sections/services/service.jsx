import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import CustomBadge from '@/components/ui/customBadge';
import { Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const portfolioWorks = [
    {
        id: 1,
        title: '3D Creation',
        category: 'Modeling',
        description: '',
        format: 'video',
        src: '/images/works/3d-dev-video-1.mp4',
    },
    {
        id: 2,
        title: 'Web3 ',
        category: 'Development',
        description: '',
        format: 'image',
        src: '/images/works/web3-img-1.png',
    },
    {
        id: 3,
        title: 'Crypto ',
        category: 'Development',
        description: '',
        format: 'video',
        src: '/images/works/web-dev-video-1.mp4',
    },
    {
        id: 4,
        title: 'Mobile Development',
        category: 'Development',
        description: '',
        format: 'image',
        src: '/images/works/mob-dev-img-1.png',
    },
    {
        id: 5,
        title: 'Editing',
        category: 'Video Editing',
        description: '',
        format: 'video',
        src: '/images/works/portfolio-video-1.mp4',
    },

    {
        id: 6,
        title: 'Web',
        category: 'Web Development',
        description: '',
        format: 'image',
        src: '/images/works/web-dev-img-1.png',
    },
];

export default function Service() {
    return (
        <section className='w-full min-h-screen flex flex-col space-y-24 lg:space-y-36 px-4 md:px-8 my-36'>
            {/* Header Section */}
            <div className='flex flex-col justify-center items-center space-y-8'>
                <CustomBadge className='text-brand-yellow border-brand-yellow/20'>
                    <Layers size={24} />
                    <p>portfolio</p>
                </CustomBadge>

                <div className='max-w-3xl lg:max-w-4xl mx-auto text-center space-y-4 md:space-y-6'>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight md:leading-relaxed'>
                        Featured Portfolio<span className='sr-only'>®</span>
                        <sup className='hidden md:inline-block text-base ml-1'>
                            ®
                        </sup>
                    </h1>
                    <p className='text-base md:text-lg lg:text-xl text-muted-foreground leading-snug md:leading-relaxed max-w-2xl mx-auto px-4'>
                        Explore a collection of high-quality, innovative designs
                        crafted to elevate brands and captivate audiences.
                    </p>
                </div>

                <Link
                    href='#'
                    className='group transition-transform hover:scale-105 active:scale-95'
                >
                    <InteractiveHoverButton className='px-8 py-4 text-sm md:text-base'>
                        View Portfolio
                    </InteractiveHoverButton>
                </Link>
            </div>

            {/* Portfolio Grid */}
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                    {portfolioWorks.map((work) => (
                        <article
                            key={work.id}
                            className='group relative overflow-hidden rounded-xl border border-transparent hover:border-brand-yellow/30 transition-all duration-300 shadow-lg hover:shadow-xl bg-brand-yellow/5 cursor-pointer '
                        >
                            <div className='relative aspect-video overflow-hidden'>
                                {work.format === 'image' ? (
                                    <Image
                                        src={work.src}
                                        alt={work.title}
                                        width={800}
                                        height={450}
                                        className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
                                        loading='lazy'
                                    />
                                ) : (
                                    <video
                                        src={work.src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload='metadata'
                                        className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
                                    />
                                )}
                            </div>

                            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <div className='p-6 space-y-2'>
                                    <h3 className='text-3xl font-semibold text-white'>
                                        {work.title}
                                    </h3>
                                    <p className='text-sm text-brand-yellow'>
                                        {work.category}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
