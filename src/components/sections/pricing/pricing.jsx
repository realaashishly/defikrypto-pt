'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import CustomBadge from '@/components/ui/customBadge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Wrapper from '@/components/wrapper';
import { cn } from '@/lib/utils';
import { CheckCircle2, CircleDollarSign } from 'lucide-react';
import { useState } from 'react';
// PricingHeader Component
const PricingHeader = ({ title, subtitle }) => (
    <div className='flex flex-col justify-center items-center space-y-8'>
        <CustomBadge className='text-brand-yellow border-brand-yellow/20 w-fit'>
            <CircleDollarSign size={16} />
            <p>Pricing Plans</p>
        </CustomBadge>

        <div className='max-w-3xl lg:max-w-4xl mx-auto text-center space-y-4 md:space-y-6'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight md:leading-relaxed'>
                {title}
                <span className='sr-only'>®</span>
                <sup className='hidden md:inline-block text-base ml-1'>®</sup>
            </h1>
            <p className='text-base md:text-lg lg:text-xl text-muted-foreground leading-snug md:leading-relaxed max-w-2xl mx-auto px-4'>
                {subtitle}
            </p>
        </div>
    </div>
);

// PricingSwitch Component
const PricingSwitch = ({ onSwitch }) => (
    <Tabs
        defaultValue='0'
        className='w-40 mx-auto'
        onValueChange={onSwitch}
    >
        <TabsList className='py-6 px-2'>
            <TabsTrigger
                value='0'
                className='text-base'
            >
                Monthly
            </TabsTrigger>
            <TabsTrigger
                value='1'
                className='text-base'
            >
                Yearly
            </TabsTrigger>
        </TabsList>
    </Tabs>
);

// CheckItem Component
const CheckItem = ({ text }) => (
    <div className='flex gap-2'>
        <CheckCircle2
            size={18}
            className='my-auto text-green-400'
        />
        <p className='pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm'>
            {text}
        </p>
    </div>
);

// PricingCard Component
const PricingCard = ({
    isYearly,
    title,
    monthlyPrice,
    yearlyPrice,
    description,
    features,
    actionLabel,
    popular,
    exclusive,
}) => (
    <Card
        className={cn(
            'w-80 flex flex-col justify-between py-1 mx-auto sm:mx-0',
            {
                'border-brand-yellow': popular,
                'border-zinc-700': !popular,
                'animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors':
                    exclusive,
            }
        )}
    >
        <div>
            <CardHeader className='pb-8 pt-4'>
                {isYearly && yearlyPrice && monthlyPrice ? (
                    <div className='flex justify-between'>
                        <CardTitle className='text-zinc-700 dark:text-zinc-300 text-lg'>
                            {title}
                        </CardTitle>
                        <div
                            className={cn(
                                'px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white',
                                {
                                    'bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black':
                                        popular,
                                }
                            )}
                        >
                            Save ${monthlyPrice * 12 - yearlyPrice}
                        </div>
                    </div>
                ) : (
                    <CardTitle className='text-zinc-700 dark:text-zinc-300 text-lg'>
                        {title}
                    </CardTitle>
                )}
                <div className='flex gap-0.5'>
                    <h3 className='text-3xl font-bold'>
                        {yearlyPrice && isYearly
                            ? '$' + yearlyPrice
                            : monthlyPrice
                            ? '$' + monthlyPrice
                            : 'Custom'}
                    </h3>
                    <span className='flex flex-col justify-end text-sm mb-1'>
                        {yearlyPrice && isYearly
                            ? '/year'
                            : monthlyPrice
                            ? '/month'
                            : null}
                    </span>
                </div>
                <CardDescription className='pt-1.5 h-12'>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
                {features.map((feature) => (
                    <div
                        key={feature}
                        className='flex gap-2'
                    >
                        <CheckCircle2
                            size={18}
                            className='my-auto text-green-400'
                        />
                        <p className='pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm'>
                            {feature}
                        </p>
                    </div>
                ))}
            </CardContent>
        </div>
        <CardFooter className='mt-2'>
            <Button className='relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                <div className='absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur' />
                {actionLabel}
            </Button>
        </CardFooter>
    </Card>
);

// Main Pricing Page Component
export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);
    const togglePricingPeriod = (value) => setIsYearly(parseInt(value) === 1);

    const plans = [
        {
            title: 'Basic',
            monthlyPrice: 10,
            yearlyPrice: 100,
            description: 'Essential features you need to get started',
            features: [
                'Example Feature Number 1',
                'Example Feature Number 2',
                'Example Feature Number 3',
            ],
            actionLabel: 'Get Started',
        },
        {
            title: 'Pro',
            monthlyPrice: 25,
            yearlyPrice: 250,
            description: 'Perfect for owners of small & medium businesses',
            features: [
                'Example Feature Number 1',
                'Example Feature Number 2',
                'Example Feature Number 3',
            ],
            actionLabel: 'Get Started',
            popular: true,
        },
        {
            title: 'Enterprise',
            description:
                'Dedicated support and infrastructure to fit your needs',
            features: [
                'Example Feature Number 1',
                'Example Feature Number 2',
                'Example Feature Number 3',
                'Super Exclusive Feature',
            ],
            actionLabel: 'Contact Sales',
            exclusive: true,
        },
    ];

    return (
        <Wrapper>
            <div className='w-full min-h-screen flex flex-col space-y-24 px-4 md:px-8 my-36'>
                <div className='flex flex-col justify-center items-center space-y-8'>
                    <PricingHeader
                        title='Pricing Plans'
                        subtitle="Choose the plan that's right for you"
                    />
                    <PricingSwitch onSwitch={togglePricingPeriod} />
                </div>
                <section className='flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8'>
                    {plans.map((plan) => (
                        <PricingCard
                            key={plan.title}
                            {...plan}
                            isYearly={isYearly}
                        />
                    ))}
                </section>
            </div>
        </Wrapper>
    );
}
