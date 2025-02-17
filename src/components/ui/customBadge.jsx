import { cn } from '@/lib/utils';
import React from 'react';

export default function CustomBadge({ children, className }) {
    return (
        <>
            <div
                className={cn(
                    'flex items-center justify-center gap-2 text-xs w-32 h-6 p-4 border uppercase rounded-full',
                    className
                )}
            >
                {children}
            </div>
        </>
    );
}
