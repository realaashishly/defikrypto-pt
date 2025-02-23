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
                <sup className='hidden md:inline-block text-base ml-1'>®</sup>
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
        className={`w-full max-w-sm flex flex-col justify-between py-4 mx-auto sm:mx-0 border ${
            popular ? 'border-brand-yellow' : 'border-zinc-700'
        }`}
    >
        <CardHeader>
            <CardTitle className='text-lg text-zinc-700 dark:text-zinc-300'>
                {title}
            </CardTitle>
            <div className='flex items-center justify-between'>
                <h3 className='text-2xl sm:text-3xl font-bold'>
                    {isYearly && yearlyPrice
                        ? `$${yearlyPrice}`
                        : `$${monthlyPrice}`}
                </h3>
                {isYearly && yearlyPrice && (
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
            title: 'Basic',
            monthlyPrice: 10,
            yearlyPrice: 100,
            description: 'Essential features you need to get started',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            actionLabel: 'Get Started',
        },
        {
            title: 'Pro',
            monthlyPrice: 25,
            yearlyPrice: 250,
            description: 'Perfect for small businesses',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            actionLabel: 'Get Started',
            popular: true,
        },
        {
            title: 'Enterprise',
            monthlyPrice: 50,
            yearlyPrice: 400,
            description: 'Dedicated support & custom solutions',
            features: ['Feature 1', 'Feature 2', 'Exclusive Feature'],
            actionLabel: 'Contact Sales',
            exclusive: true,
        },
    ];

    return (
        <div className='w-full min-h-screen flex flex-col space-y-16 px-4 md:px-8 lg:px-12 py-12'>
            <PricingHeader
                title='Pricing Plans'
                subtitle='Choose the right plan for you'
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
