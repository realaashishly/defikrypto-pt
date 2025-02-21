import ScrollVelocity from '@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity';

export default function AboutPartner({ texts, velocity, className }) {
    return (
        <ScrollVelocity
            texts={texts}
            velocity={velocity}
            className={className}
        />
    );
}
