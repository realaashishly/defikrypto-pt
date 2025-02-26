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
import { cn } from '@/lib/utils';
import { CheckCircle2, CircleDollarSign } from 'lucide-react';
import { useState } from 'react';

const PricingHeader = ({ title, subtitle }) => (
    <div className='flex flex-col justify-center items-center space-y-6 px-4 text-center'>
        <CustomBadge className='text-brand-yellow border-brand-yellow/20 w-fit'>
            <CircleDollarSign size={16} />
            <p>Pricing Plans</p>
        </CustomBadge>
        <div className='max-w-3xl lg:max-w-4xl mx-auto space-y-4 md:space-y-6'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                {title}
                <sup className='hidden md:inline-block text-base ml-1'></sup>
            </h1>
            <p className='text-sm md:text-base lg:text-lg text-muted-foreground leading-snug max-w-2xl mx-auto'>
                {subtitle}
            </p>
        </div>
    </div>
);

const PricingSwitch = ({ onSwitch }) => (
    <Tabs
        defaultValue='0'
        className='w-40 mx-auto'
        onValueChange={onSwitch}
    >
        <TabsList className='py-4 px-2'>
            <TabsTrigger
                value='0'
                className='text-sm sm:text-base'
            >
                Monthly
            </TabsTrigger>
            <TabsTrigger
                value='1'
                className='text-sm sm:text-base'
            >
                Yearly
            </TabsTrigger>
        </TabsList>
    </Tabs>
);

const CheckItem = ({ text }) => (
    <div className='flex gap-2'>
        <CheckCircle2
            size={18}
            className='my-auto text-green-400'
        />
        <p className='text-sm text-zinc-700 dark:text-zinc-300'>{text}</p>
    </div>
);

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
            `w-72 flex flex-col justify-between py-1 ${
                popular ? 'border-brand-yellow' : 'border-zinc-700'
            } mx-auto sm:mx-0`,
            {
                'animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors':
                    exclusive,
            }
        )}
    >
        <CardHeader>
            <CardTitle className='text-lg text-zinc-700 dark:text-zinc-300'>
                {title}
            </CardTitle>
            <div className='flex items-center justify-between'>
                <h3 className='text-2xl sm:text-3xl font-bold'>
                    {isYearly && yearlyPrice
                        ? exclusive
                            ? yearlyPrice
                            : `$${yearlyPrice}`
                        : exclusive
                        ? monthlyPrice
                        : `$${monthlyPrice}`}
                </h3>
                {!exclusive && isYearly && yearlyPrice && (
                    <div className='px-2.5 rounded-xl text-sm py-1 bg-zinc-200 dark:bg-zinc-800'>
                        Save ${monthlyPrice * 12 - yearlyPrice}
                    </div>
                )}
            </div>
            <CardDescription className='text-sm'>{description}</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-2'>
            {features.map((feature) => (
                <CheckItem
                    key={feature}
                    text={feature}
                />
            ))}
        </CardContent>
        <CardFooter>
            <Button className='w-full'>{actionLabel}</Button>
        </CardFooter>
    </Card>
);

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);
    const togglePricingPeriod = (value) => setIsYearly(parseInt(value) === 1);

    const plans = [
        {
            title: 'Starter',
            monthlyPrice: 1000,
            yearlyPrice: 10200,
            description: 'Essential features you need to get started',
            features: [
                'Basic Web3 consultation',
                'social media management',
                'UI/UX audit',
                'NFT/tokenomics strategy',
            ],
            actionLabel: 'Get Started',
        },
        {
            title: 'Growth',
            monthlyPrice: 2000,
            yearlyPrice: 20400,
            description: 'Perfect for small businesses',
            features: [
                'Smart contract deployment',
                'dApp marketing',
                'influencer partnerships',
                'SEO',
                'paid ad campaigns',
            ],
            actionLabel: 'Get Started',
            popular: true,
        },
        {
            title: 'Enterprise',
            monthlyPrice: 'Custom',
            yearlyPrice: 'Custom',
            description: 'Dedicated support & custom solutions',
            features: [
                'Full Web3 strategy',
                ' tokenomics modeling',
                'AI-powered analytics',
                'DAO setup',
                '24/7 priority support',
            ],
            actionLabel: 'Contact Sales',
            exclusive: true,
        },
    ];

    return (
        <div className='w-full min-h-screen flex flex-col space-y-16 px-4 md:px-8 lg:px-12 py-12'>
            <PricingHeader
                title='Subscription-Based Model'
                subtitle='Offer monthly and yearly subscriptions that provide clients with continuous access to your expertise in blockchain development, marketing, AI solutions, and NFT strategies.'
            />
            <PricingSwitch onSwitch={togglePricingPeriod} />
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {plans.map((plan) => (
                    <PricingCard
                        key={plan.title}
                        {...plan}
                        isYearly={isYearly}
                    />
                ))}
            </section>
        </div>
    );
}
