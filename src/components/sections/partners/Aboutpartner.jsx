import ScrollVelocity from '@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity';
import Wrapper from '@/components/wrapper';
import React from 'react';

export default function AboutPartner({ texts, velocity, className }) {
    return (
        <Wrapper>
            <ScrollVelocity
                texts={texts}
                velocity={velocity}
                className={className}
            />
        </Wrapper>
    );
}
