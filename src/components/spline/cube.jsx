import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

export default function Cube({ className }) {
    return (
        <div className={cn('w-full h-full rounded-xl', className)}>
            <Spline scene='https://prod.spline.design/1-u7idBpQVEDDA1Y/scene.splinecode' />
        </div>
    );
}
