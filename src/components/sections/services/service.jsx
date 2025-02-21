import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import CustomBadge from '@/components/ui/customBadge';
import { Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '@/components/wrapper';

const portfolioWorks = [
    {
        id: 1,
        title: '3D Creation',
        category: 'Modeling',
        description: '',
        format: 'video',
        src: '/images/works/3d-dev-video-1.mp4',
        services: [
            'Modeling',
            'Animation',
            'Rendering',
            'Sculpting',
            'Texturing',
        ],
    },
    {
        id: 2,
        title: 'Web3',
        category: 'Development',
        description: '',
        format: 'image',
        src: '/images/works/web3-img-1.png',
        services: [
            'Blockchain Integration',
            'Dapp Development',
            'Smart Contract Development',
            'NFT Development',
            'Crypto Development',
        ],
    },
    {
        id: 3,
        title: 'Crypto',
        category: 'Development',
        description: '',
        format: 'video',
        src: '/images/works/web-dev-video-1.mp4',
        services: [
            'Crypto Development',
            'Cryptocurrency Exchanges',
            'Crypto Mining',
            'Crypto Wallets',
        ],
    },
    {
        id: 4,
        title: 'Mobile Development',
        category: 'Development',
        description: '',
        format: 'image',
        src: '/images/works/mob-dev-img-1.png',
        services: [
            'Mobile App Development',
            'iOS Development',
            'Android Development',
            'Cross-Platform Development',
        ],
    },
    {
        id: 5,
        title: 'Editing',
        category: 'Video Editing',
        description: '',
        format: 'video',
        src: '/images/works/portfolio-video-1.mp4',
        services: [
            'Video Editing',
            'Motion Graphics',
            'Animation',
            'Special Effects',
        ],
    },
    {
        id: 6,
        title: 'Web',
        category: 'Web Development',
        description: '',
        format: 'image',
        src: '/images/works/web-dev-img-1.png',
        services: [
            'Static Website',
            'Dynamic Website',
            '3D Website',
            'Portfolio Website',
        ],
    },
];

function PortfolioCard({ work }) {
    const servicesRefs = useRef([]);
    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const tl = useRef(null);

    // Helper to add each service <p> element to the refs array.
    const addToRefs = (el) => {
        if (el && !servicesRefs.current.includes(el)) {
            servicesRefs.current.push(el);
        }
    };

    // Build the GSAP timeline after the component mounts.
    useLayoutEffect(() => {
        tl.current = gsap.timeline({ paused: true });
        tl.current
            .from(servicesRefs.current, {
                x: -50,
                opacity: 0,
                duration: 0.5,
                delay: 0.2,
                stagger: 0.1,
                ease: 'power2.out',
            })
            .from(
                [titleRef.current, categoryRef.current],
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.4,
                    delay: 0.2,
                    ease: 'power2.out',
                },
                '-=0.3'
            );
    }, []);

    // Play animation on hover, reverse on mouse leave.
    const handleMouseEnter = () => {
        tl.current.play();
    };

    const handleMouseLeave = () => {
        tl.current.reverse();
    };

    return (
        <article
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='relative overflow-hidden rounded-xl border border-transparent transition-all duration-300 shadow-lg hover:shadow-xl bg-brand-yellow/5 cursor-pointer'
        >
            {/* Media Container */}
            <div className='relative aspect-video overflow-hidden'>
                {work.format === 'image' ? (
                    <Image
                        src={work.src}
                        alt={work.title}
                        width={800}
                        height={450}
                        className='object-cover w-full h-full transition-transform duration-500 hover:scale-105'
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
                        className='object-cover w-full h-full transition-transform duration-500 hover:scale-105'
                    />
                )}
            </div>

            {/* Background Overlay */}
            <div className='absolute inset-0 transition-all duration-500 bg-black bg-opacity-5 hover:bg-opacity-90' />

            {/* Text Overlay (pointer-events-none so that hover events pass through) */}
            <div className='absolute inset-0 pointer-events-none flex justify-between items-end p-6'>
                {/* Services on the Left */}
                <div className='flex flex-col space-y-1'>
                    {work.services.map((service) => (
                        <p
                            key={service}
                            ref={addToRefs}
                            className='text-sm text-brand-yellow'
                        >
                            {service}
                        </p>
                    ))}
                </div>

                {/* Title and Category on the Right */}
                <div className='absolute bottom-6 right-6 space-y-2 text-right'>
                    <h3
                        ref={titleRef}
                        className='text-3xl font-semibold text-white'
                    >
                        {work.title}
                    </h3>
                    <p
                        ref={categoryRef}
                        className='text-sm text-brand-yellow'
                    >
                        {work.category}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default function Service() {
    const rock1Ref = useRef(null);
    const rock3Ref = useRef(null);
    const rock6Ref = useRef(null);
    const rock4Ref = useRef(null);

    useLayoutEffect(() => {
        const rocks = [
            { ref: rock1Ref, x: -130, y: 120 },
            { ref: rock3Ref, x: 140, y: -120 },
            { ref: rock6Ref, x: -120, y: 130 },
            { ref: rock4Ref, x: 130, y: -110 },
        ];

        rocks.forEach(({ ref, x, y }) => {
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
    }, []);
    return (
        <section className='w-full min-h-screen flex flex-col space-y-24 lg:space-y-36 px-4 md:px-8 my-36 relative'>
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
                        <PortfolioCard
                            key={work.id}
                            work={work}
                        />
                    ))}
                </div>
            </div>

            <div className='absolute inset-0'>
                <Image
                    ref={rock1Ref}
                    src='/images/bg/rock1.svg'
                    alt='Decorative rock 1'
                    width={200}
                    height={200}
                    className='absolute left-24 top-0 -z-10 will-change-transform'
                />
                <Image
                    ref={rock3Ref}
                    src='/images/bg/rock3.svg'
                    alt='Decorative rock 3'
                    width={200}
                    height={200}
                    className='absolute right-24 top-72 -z-10 will-change-transform'
                />
                <Image
                    ref={rock6Ref}
                    src='/images/bg/rock6.svg'
                    alt='Decorative rock 6'
                    width={200}
                    height={200}
                    className='absolute right-0 bottom-72 -z-10 will-change-transform'
                />
                <Image
                    ref={rock4Ref}
                    src='/images/bg/rock4.svg'
                    alt='Decorative rock 4'
                    width={200}
                    height={200}
                    className='absolute left-24 bottom-0 -z-10 will-change-transform'
                />
            </div>
        </section>
    );
}
