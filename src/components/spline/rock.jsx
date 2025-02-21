import React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

export default function Rock({ className }) {
    return (
        <div className={cn(className)}>
            <Spline scene='https://prod.spline.design/BHYdznLvHc1JJuHt/scene.splinecode' />
        </div>
    );
}
