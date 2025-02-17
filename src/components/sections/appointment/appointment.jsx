"use client";
import SpotlightCard from '@/blocks/Components/SpotlightCard/SpotlightCard';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import Link from 'next/link';

export default function AppointmentBooking() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-12'>
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
        </div>
    );
}
