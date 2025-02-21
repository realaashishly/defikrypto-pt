import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

export default function Smallrock({ className }) {
    return (
        <div className={cn(className)}>
            <Spline scene='https://prod.spline.design/wIMtro6hfIMQCSKq/scene.splinecode' />
        </div>
    );
}
