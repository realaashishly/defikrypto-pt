import { cn } from '@/lib/utils';

export default function Wrapper({ children, className }) {
    return (
        <div
            className={cn(
                'relative w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl  mx-auto px-4 sm:px-6 font-inter',
                className
            )}
        >
            <div className='relative z-10 w-full'>{children}</div>
        </div>
    );
}
