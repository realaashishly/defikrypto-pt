import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function Particles({ className }) {
  return (
    <div className={cn('w-full h-full rounded-xl', className)}>
      <Spline scene="https://prod.spline.design/9iiSRI96smKWJb3c/scene.splinecode" />
    </div>
  );
}
