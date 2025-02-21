import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Coins() {
    return (
        <>
            <Spline
                scene='https://prod.spline.design/Tq4nAM0x1iaR7TS3/scene.splinecode'
                className='w-full h-full rounded-xl'
            />
        </>
    );
}
