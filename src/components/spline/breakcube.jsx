import React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

export default function Breakcube({ className }) {
    return (
        <div className={cn('w-[60vw] h-[60vw] ', className)}>
            <Spline scene='https://prod.spline.design/Q0eFbQ5xjvgoDXPI/scene.splinecode' />
        </div>
    );
}
