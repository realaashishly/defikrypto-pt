'use client';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import CustomBadge from '@/components/ui/customBadge';
import gsap from 'gsap';
import { Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const portfolioWorks = [
    {
        id: 1,
        title: 'Web3 Solutions',
        category: ' Web3 Development',
        description:
            'From 3D web design to advanced mobile app development, we craft immersive Web3 experiences.',
        format: 'video',
        src: '/images/works/3d-dev-video-1.mp4',
        services: [
            '3D Web Development',
            '3D  App Design',
            'UI/UX Design',
            'Web 3 Expert Consultation',
        ],
    },
    {
        id: 2,
        title: 'Crypto & Blockchain',
        category: ' Blockchain solutions',
        description:
            'We specialize in delivering tailored blockchain solutions to power your Web3 vision.',
        format: 'image',
        src: '/images/web3-img-1.png',
        services: [
            'Blockchain Development',
            'Tokenomics',
            'NFT Marketplace',
            'Smart Contracts',
            'ICO, IDO, IEO, Fundraising',
            'Blockchain Research',
            'Crypto Market Monitoring',
            'Crypto Content Creation',
            'Blockchain Consultation',
        ],
    },
    {
        id: 3,
        title: 'AI/ML Solutions',
        category: 'Trading strategies.',
        description:
            'Unlock the power of AI and machine learning to optimize your Web3 project’s performance and trading strategies.',
        format: 'video',
        src: '/images/works/web-dev-video-1.mp4',
        services: [
            'AI Chatbots',
            'AI Agents',
            'Predictive Analysis',
            'Algorithmic Trading Strategies',
            'Algorithmic Trading Bots',
            'Crypto Price Prediction',
            'Generative AI',
            'Sentiment Analysis',
            'Fraud Detection Models',
            'Risk Analysis',
        ],
    },
    {
        id: 4,
        title: 'Digital Marketing',
        category: 'Marketing',
        description:
            'Our marketing expertise helps you grow your Web3 presence, increase adoption, and drive measurable results.',
        format: 'image',
        src: '/images/mob-dev-img-1.png',
        services: [
            'Digital Ads Campaigns',
            'Social Media Marketing',
            'Influencer Marketing',
            'Content Creation',
            'Marketing Automation',
            'SEO',
            'Website Auditing',
            'Email Marketing',
            'Shilling Marketing',
            'Expert Consultation',
        ],
    },
    {
        id: 5,
        title: 'Creative Services',
        category: 'AI-driven solutions',
        description: '',
        format: 'video',
        src: '/images/works/portfolio-video-1.mp4',
        services: [
            'AI Video Editing',
            'AI-Generated Video',
            'Motion Design',
            '3D Animation',
            '3D Design & Modeling',
            'AI-Generated Teasers & Videos',
        ],
    },
];

function PortfolioCard({ work }) {
    const servicesRefs = useRef([]);
    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const cardRef = useRef(null);
    const tl = useRef(null);

    // Function to add elements to refs array
    const addToRefs = (el) => {
        if (el && !servicesRefs.current.includes(el)) {
            servicesRefs.current.push(el);
        }
    };

    useLayoutEffect(() => {
        if (!cardRef.current) return;

        tl.current = gsap.timeline({ paused: true });

        tl.current
            .from(servicesRefs.current, {
                x: -50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
            })
            .from(
                [titleRef.current, categoryRef.current],
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                },
                '-=0.3'
            );
    }, []);

    const handleMouseEnter = () => {
        if (tl.current) {
            console.log('Mouse Enter - Playing Animation');
            tl.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (tl.current) {
            console.log('Mouse Leave - Reversing Animation');
            tl.current.reverse();
        }
    };

    return (
        <article
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='relative overflow-hidden rounded-xl border border-transparent transition-all duration-300 shadow-lg hover:shadow-xl bg-brand-yellow/5 cursor-pointer'
        >
            {/* Media Container */}
            <div className='relative aspect-square  md:aspect-video overflow-hidden'>
                {work.format === 'image' ? (
                    <Image
                        src={work.src}
                        alt={work.title}
                        width={800}
                        height={450}
                        className='object-cover w-full h-full transition-transform duration-500 hover:scale-105'
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

            {/* Text Overlay */}
            <div className='absolute inset-0 pointer-events-none flex justify-between items-end p-1 md:p-6'>
                <div className='flex flex-col space-y-1'>
                    {work.services.map((service, index) => (
                        <p
                            key={index}
                            ref={addToRefs}
                            className='text-sm text-brand-yellow'
                        >
                            {service}
                        </p>
                    ))}
                </div>

                <div className='absolute bottom-6 right-0 md:right-6 space-y-2 text-right'>
                    <h3
                        ref={titleRef}
                        className='md:text-3xl font-semibold text-white'
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

    useGSAP(() => {
        gsap.to(rock1Ref.current, {
            x: -100, // Move left
            y: 50, // Move down
            scrollTrigger: {
                trigger: rock1Ref.current,
                start: 'top bottom',
                scrub: 1,
            },
        });

        gsap.to(rock3Ref.current, {
            x: 80, // Move right
            y: -50, // Move up
            scrollTrigger: {
                trigger: rock3Ref.current,
                start: 'top bottom',
                scrub: 1,
            },
        });

        gsap.to(rock6Ref.current, {
            x: -50, // Move left
            y: -100, // Move up
            scrollTrigger: {
                trigger: rock6Ref.current,
                start: 'top bottom',
                scrub: 1,
            },
        });
    }, []);
    return (
        <section className='w-full flex flex-col space-y-24 lg:space-y-36 px-4 md:px-8 relative overflow-hidden  my-12'>
            <div className='flex flex-col justify-center items-center space-y-8'>
                <CustomBadge className='text-brand-yellow border-brand-yellow/20'>
                    <Layers size={24} />
                    <p>portfolio</p>
                </CustomBadge>
                <div className='max-w-3xl lg:max-w-4xl mx-auto text-center space-y-4 md:space-y-6'>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight md:leading-relaxed'>
                        Featured Portfolio
                    </h1>
                    <p className='text-base md:text-lg lg:text-xl text-muted-foreground leading-snug md:leading-relaxed max-w-2xl mx-auto px-4'>
                        At DappRush, we offer a diverse range of services
                        designed to help you succeed in the decentralized world
                        of Web3. From blockchain development to AI-driven
                        solutions, we provide end-to-end support for your
                        project’s growth and adoption.
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

            <div
                ref={rock3Ref}
                className='absolute -z-10 top-32 right-24 w-[20%] max-w-[150px] sm:max-w-[180px]'
            >
                <Image
                    src='/images/bg/rock3.svg'
                    alt='Decorative rock 3'
                    width={150}
                    height={150}
                    className='object-contain'
                />
            </div>

            {/* Rock 1 */}
            <div
                ref={rock1Ref}
                className='absolute -z-10 top-0 left-24 w-[18%] max-w-[140px] sm:max-w-[160px]'
            >
                <Image
                    src='/images/bg/rock1.svg'
                    alt='Decorative rock 1'
                    width={160}
                    height={160}
                    className='object-contain'
                />
            </div>

            {/* Rock 6 */}
            <div
                ref={rock6Ref}
                className='absolute -z-10 -bottom-6 left-0 w-[18%] max-w-[140px] sm:max-w-[160px]'
            >
                <Image
                    src='/images/bg/rock6.svg'
                    alt='Decorative rock 6'
                    width={160}
                    height={160}
                    className='object-contain'
                />
            </div>
        </section>
    );
}
