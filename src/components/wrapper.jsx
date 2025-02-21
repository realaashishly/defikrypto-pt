import { cn } from '@/lib/utils';

export default function Wrapper({ children, className }) {
    return (
        <div
            className={cn(
                'relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-inter',
                className
            )}
        >
            {/* Main Content – higher z-index */}
            <div className='relative z-10'>{children}</div>
        </div>
    );
}
