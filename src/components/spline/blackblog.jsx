import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

export default function Blackblog({ className }) {
    return (
        <div className={cn('w-full h-full rounded-xl', className)}>
            <Spline scene='https://prod.spline.design/3frowtu83NLMFizC/scene.splinecode' />
        </div>
    );
}
