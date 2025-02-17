'use client';
import { OrbitingCircles } from '@/components/magicui/orbiting-circles';
import { useRef } from 'react';

export default function Rotation() {
    const orbitRefs = useRef([]);

    return (
        <div className='w-full min-h-screen p-12'>
            <div className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden'>
                <OrbitingCircles
                    ref={(el) => orbitRefs.current.push(el)}
                    iconSize={80}
                >
                    <Icons.coin1 />
                    <Icons.coin2 />
                </OrbitingCircles>
                <OrbitingCircles
                    ref={(el) => orbitRefs.current.push(el)}
                    iconSize={80}
                    radius={300}
                    reverse
                    speed={2}
                >
                    <Icons.coin3 />
                    <Icons.coin4 />
                </OrbitingCircles>
                <OrbitingCircles
                    ref={(el) => orbitRefs.current.push(el)}
                    iconSize={80}
                    radius={200}
                    reverse
                    speed={3}
                >
                    <Icons.coin5 />
                    <Icons.coin6 />
                </OrbitingCircles>
                <OrbitingCircles
                    ref={(el) => orbitRefs.current.push(el)}
                    iconSize={80}
                    radius={100}
                    reverse
                    speed={4}
                >
                    <Icons.coin7 />
                    <Icons.coin8 />
                </OrbitingCircles>
                <OrbitingCircles
                    ref={(el) => orbitRefs.current.push(el)}
                    iconSize={80}
                    radius={50}
                    reverse
                    speed={5}
                >
                    <Icons.coin9 />
                    <Icons.coin10 />
                </OrbitingCircles>
            </div>
        </div>
    );
}

const Icons = {
    coin1: () => (
        <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.2'
                d='M25.61 16.145C23.8737 23.1094 16.8196 27.3474 9.85441 25.6111C2.8925 23.8747 -1.34591 16.8206 0.390812 9.85668C2.12631 2.89152 9.18003 -1.34729 16.1432 0.389023C23.1079 2.12534 27.3459 9.18027 25.6096 16.145H25.61Z'
                fill='#F7931A'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.9153 11.4897C17.0905 10.3162 16.1971 9.68539 14.9754 9.26456L15.3717 7.67493L14.4038 7.43379L14.0179 8.98152C13.7638 8.91814 13.5026 8.85833 13.243 8.79908L13.6316 7.24114L12.6645 7L12.2679 8.58908C12.0574 8.54112 11.8507 8.49372 11.65 8.44384L11.6511 8.43888L10.3167 8.10568L10.0593 9.13916C10.0593 9.13916 10.7772 9.30369 10.7621 9.31389C11.154 9.41172 11.2251 9.67106 11.2129 9.87665L10.7615 11.6876C10.7885 11.6945 10.8235 11.7044 10.8621 11.7198L10.7601 11.6945L10.1271 14.2313C10.0792 14.3504 9.95762 14.529 9.68368 14.4612C9.69332 14.4752 8.98036 14.2856 8.98036 14.2856L8.5 15.3935L9.75947 15.7074C9.90165 15.743 10.0421 15.7797 10.181 15.8159C10.271 15.8394 10.3603 15.8627 10.449 15.8854L10.0486 17.4935L11.0151 17.7347L11.4119 16.1439C11.6757 16.2156 11.932 16.2817 12.1828 16.344L11.7876 17.9273L12.7552 18.1685L13.1556 16.5637C14.8056 16.8759 16.0466 16.75 16.5683 15.2579C16.9891 14.0563 16.5476 13.3632 15.6795 12.9109C16.3117 12.7646 16.7879 12.3487 16.915 11.4897H16.9153ZM14.7042 14.5899C14.4295 15.6927 12.7029 15.2364 11.9136 15.0278C11.8429 15.0091 11.7798 14.9924 11.7258 14.979L12.2572 12.8489C12.3231 12.8654 12.4036 12.8835 12.4948 12.9039L12.4949 12.9039C13.3114 13.0872 14.9848 13.4627 14.7045 14.5899H14.7042ZM12.659 11.9155C13.3176 12.0912 14.7531 12.4742 15.0032 11.4723C15.2589 10.4474 13.8629 10.1385 13.1812 9.98765C13.1046 9.97069 13.0369 9.95573 12.9817 9.94197L12.5 11.8739C12.5456 11.8852 12.5991 11.8995 12.659 11.9155Z'
                fill='#F7931A'
            />
        </svg>
    ),
    coin2: () => (
        <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.2'
                d='M25.9295 13.0002C25.9295 20.1422 20.1399 25.9318 12.9981 25.9318C5.8562 25.9318 0.0666046 20.1422 0.0666046 13.0002C0.0666046 5.85841 5.8562 0.0688171 12.9981 0.0688171C20.1399 0.0688171 25.9295 5.85841 25.9295 13.0002Z'
                fill='#F6D43D'
            />
            <path
                d='M16.6321 18.4035L16.3337 17.0485C16.3168 16.9688 16.2742 16.9091 16.2059 16.8695C16.132 16.8297 16.0582 16.8241 15.9844 16.8526L15.9417 16.8695L15.8393 16.895C15.7938 16.9063 15.7412 16.9192 15.6816 16.9333C15.6219 16.9476 15.5524 16.9616 15.4728 16.9759C15.3935 16.9901 15.3093 17.003 15.2215 17.0144C15.1334 17.0255 15.0384 17.0356 14.9361 17.0442C14.8337 17.0526 14.7315 17.0569 14.6292 17.0569C13.9076 17.0569 13.2584 16.8623 12.6817 16.4731C12.105 16.0838 11.6803 15.5568 11.4076 14.8922H14.7057C14.7683 14.8922 14.8251 14.871 14.8761 14.8282C14.9274 14.7857 14.9587 14.7332 14.9698 14.6705L15.1743 13.716C15.1915 13.631 15.1743 13.5542 15.1233 13.4859C15.0665 13.4177 14.9953 13.3836 14.9102 13.3836H10.9986C10.9816 12.9972 10.9816 12.699 10.9986 12.4887H15.1576C15.3111 12.4887 15.4019 12.4149 15.4303 12.2672L15.6348 11.2956C15.6518 11.2161 15.6322 11.1423 15.5752 11.074C15.5242 11.0059 15.4532 10.9716 15.3623 10.9716H11.3736C11.6577 10.3353 12.0838 9.83531 12.652 9.47167C13.2202 9.10794 13.8622 8.92618 14.5781 8.92618C14.6009 8.91484 14.6847 8.9177 14.8294 8.93472C14.9743 8.95167 15.0568 8.95884 15.0766 8.95597C15.0962 8.95316 15.1704 8.96173 15.2981 8.98149C15.426 9.00137 15.49 9.01134 15.49 9.01134L15.6391 9.04113C15.6818 9.04973 15.7145 9.05672 15.7372 9.06248L15.7713 9.07096C15.8451 9.09379 15.9131 9.08663 15.9758 9.04973C16.0384 9.01269 16.0782 8.95737 16.0953 8.88352L16.4618 7.52845C16.4787 7.45457 16.4701 7.38639 16.4362 7.32391C16.385 7.25561 16.3282 7.21301 16.2656 7.19603C15.743 7.06537 15.1916 7 14.6122 7C13.3394 7 12.2018 7.36373 11.1989 8.0909C10.1961 8.81812 9.50427 9.77842 9.12358 10.9715H8.28845C8.20887 10.9715 8.14358 10.997 8.09242 11.0482C8.0414 11.0993 8.01576 11.1646 8.01576 11.2442V12.2158C8.01576 12.2953 8.04131 12.3607 8.09242 12.4117C8.14361 12.4629 8.20899 12.4884 8.28845 12.4884H8.85949C8.84233 12.7612 8.83961 13.0593 8.8509 13.3833H8.28845C8.2146 13.3833 8.15069 13.4103 8.09672 13.4642C8.04278 13.5182 8.01576 13.5821 8.01576 13.6559V14.619C8.01576 14.693 8.04278 14.7567 8.09672 14.8108C8.15072 14.8648 8.2146 14.8916 8.28845 14.8916H9.09812C9.45606 16.1472 10.1322 17.1459 11.1265 17.8873C12.1209 18.629 13.2828 18.9996 14.6122 18.9996C14.7203 18.9996 14.8296 18.9969 14.9404 18.991C15.0515 18.9853 15.155 18.9767 15.2516 18.9655C15.3482 18.9542 15.4434 18.9416 15.5371 18.9273C15.6308 18.913 15.7161 18.899 15.7927 18.8845C15.8694 18.8704 15.9419 18.8563 16.01 18.8421C16.0782 18.8278 16.1393 18.8123 16.1934 18.7952C16.2473 18.7783 16.2926 18.7654 16.3296 18.7571C16.3666 18.7485 16.3964 18.7384 16.419 18.7273L16.4617 18.7187C16.5243 18.696 16.5726 18.6547 16.6066 18.595C16.6407 18.5356 16.6491 18.4716 16.6321 18.4035Z'
                fill='#FBE41A'
            />
        </svg>
    ),
    coin3: () => (
        <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.2'
                d='M25.9295 13.0002C25.9295 20.1422 20.1399 25.9318 12.9981 25.9318C5.8562 25.9318 0.0666103 20.1422 0.0666103 13.0002C0.0666103 5.85841 5.8562 0.0688171 12.9981 0.0688171C20.1399 0.0688171 25.9295 5.85841 25.9295 13.0002Z'
                fill='#505050'
            />
            <g opacity='0.8'>
                <path
                    d='M12.9568 7L12.8769 7.27148V15.1493L12.9568 15.229L16.6135 13.0675L12.9568 7Z'
                    fill='white'
                />
                <path
                    d='M12.9568 7L9.3 13.0675L12.9568 15.229V11.4054V7Z'
                    fill='white'
                />
                <path
                    d='M12.9568 16.4188L12.9118 16.4736V19.2799L12.9568 19.4113L16.6157 14.2583L12.9568 16.4188Z'
                    fill='white'
                />
                <path
                    d='M12.9568 19.4114V16.4188L9.3 14.2583L12.9568 19.4114Z'
                    fill='white'
                />
                <path
                    d='M12.9568 15.229L16.6135 13.0675L12.9568 11.4054V15.229Z'
                    fill='white'
                />
                <path
                    d='M9.3 13.0675L12.9567 15.229V11.4054L9.3 13.0675Z'
                    fill='white'
                />
            </g>
        </svg>
    ),
    coin4: () => (
        <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.2'
                d='M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z'
                fill='#F70000'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.19408 19.4213L13.1554 11.0836L21.1941 19.5L13.1911 6.5L5.19408 19.4213ZM14.3106 14.3957H14.3005L13.1015 12.997L11.8215 14.3957H14.3005L14.3106 14.4074V14.3957ZM9.51112 16.6901H16.6805L15.2276 15.2128L10.9221 15.2312L9.51088 16.6722L9.51112 16.6901Z'
                fill='#F70000'
            />
        </svg>
    ),
    coin5: () => (
        <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.2'
                d='M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z'
                fill='#2C5F93'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.4997 12.2116L7 15.7705V17.7265L13.4997 14.1676L19.9993 17.7265V15.7705L13.4997 12.2116Z'
                fill='#1269AB'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.89894 10.053L13.4997 7.57602L18.1003 10.053L19.8179 9.40175L13.4997 6L7.18143 9.40175L8.89894 10.053Z'
                fill='#3FBCED'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.1003 10.4671V15.9446L17.417 16.3125L18.8683 17.1071L19.9993 16.4981V9.74715L18.1003 10.4671ZM9.58234 16.3125L8.89339 15.9416V10.465L7 9.7471V16.4981L8.13105 17.1071L9.58234 16.3125Z'
                fill='#1269AB'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.0119 16.5306L13.4997 18.4216L9.98743 16.5306L8.53615 17.3252L13.4997 19.9976L18.4632 17.3252L17.0119 16.5306Z'
                fill='#3FBCED'
            />
        </svg>
    ),
    coin6: () => (
        <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.2'
                d='M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z'
                fill='#0D65AE'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15.7854 5.07538C17.5292 7.52767 19.2251 10.0163 20.9287 12.4972C20.8989 12.4816 20.8393 12.4504 20.8096 12.4348C18.7483 11.3588 16.6327 10.388 14.5365 9.38345C14.933 7.94223 15.389 6.5166 15.7854 5.07538Z'
                fill='#0D65AE'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.58688 13.5213C7.71806 14.4856 9.81296 15.5317 11.9143 16.561C11.5062 17.9996 11.0735 19.4317 10.6641 20.8703C8.96567 18.4232 7.28405 15.9671 5.58688 13.5213Z'
                fill='#0D65AE'
            />
            <path
                opacity='0.71'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.68146 12.4231C8.6353 11.4147 11.5879 10.4075 14.5365 9.38345C16.6327 10.388 18.7483 11.3588 20.8096 12.4348C16.1663 12.4764 11.5231 12.4374 6.87984 12.453C6.48081 12.4543 6.08049 12.4569 5.68146 12.4231Z'
                fill='#4382B6'
            />
            <path
                opacity='0.71'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.48195 13.4771C10.6084 13.5005 15.7349 13.5057 20.8614 13.4836C19.7148 13.8007 18.6162 14.2595 17.4787 14.6077C15.6326 15.2835 13.7488 15.8527 11.9143 16.561C9.81296 15.5317 7.71806 14.4856 5.58689 13.5213L5.48195 13.4771Z'
                fill='#4382B6'
            />
        </svg>
    ),
    coin7: () => (
        <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.2'
                d='M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z'
                fill='#224DDA'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 6L19.0622 9.5V16.5L13 20L6.93782 16.5V9.5L13 6Z'
                stroke='#224DDA'
                strokeWidth='3'
            />
        </svg>
    ),
    coin8: () => (
        <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.2'
                d='M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z'
                fill='#BB1B21'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.8983 4.58409C12.2695 4.41759 12.5913 4.13679 12.9781 4.01349C13.0814 4.60569 13.0155 5.20869 13.0329 5.80539C13.0256 6.69729 13.0594 7.59009 13.011 8.48019C12.3646 8.81679 11.7456 9.20379 11.1138 9.56649C10.4309 9.95079 9.73051 10.3072 9.07954 10.7437C9.14537 10.7995 9.21394 10.8535 9.28434 10.9039C9.23497 10.9174 9.13531 10.9444 9.08594 10.9579C8.98263 11.2351 9.06217 11.5474 9.0384 11.8372C9.00823 12.9721 9.07314 14.1097 9 15.2437C8.08206 15.6964 7.2144 16.2436 6.31749 16.7368C5.89691 17.0005 5.44251 17.2102 5.03109 17.4892L5.03017 17.4901C5.04023 14.4886 5.01554 11.4808 5.04389 8.48289C7.32594 7.17969 9.61714 5.88999 11.8983 4.58409Z'
                fill='#D11D23'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.8519 10.6942C16.9159 10.7815 16.8729 10.9165 16.8903 11.02C16.883 12.4231 16.8738 13.8271 16.9022 15.2311C15.9449 15.8863 14.8917 16.3921 13.8923 16.9825C13.5751 17.1499 13.2871 17.3776 12.947 17.4982C12.9067 17.4829 12.8263 17.4514 12.7861 17.4352C12.9022 17.4118 12.9534 17.3443 12.9406 17.2309C12.9662 15.8224 12.9543 14.413 12.957 13.0036C13.4526 12.703 13.9655 12.4321 14.472 12.1513C15.1623 11.7481 15.8434 11.3314 16.5502 10.9579C16.6718 10.8967 16.7659 10.7968 16.8519 10.6942Z'
                fill='#D11D23'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.9781 4.01349C13.3666 4.15749 13.6848 4.44369 14.0697 4.59759C16.3399 5.91159 18.6293 7.19229 20.9049 8.49009C20.9433 8.89959 20.9205 9.31809 20.9177 9.72939C20.8693 9.88419 20.8592 10.0471 20.8629 10.2082C20.8592 12.5221 20.8757 14.836 20.872 17.149C20.8629 17.2192 20.8446 17.3596 20.8354 17.4289C19.5106 16.7224 18.2315 15.9304 16.9022 15.2311C16.8738 13.8271 16.883 12.4231 16.8903 11.02C16.8729 10.9165 16.9159 10.7815 16.8519 10.6942C16.2073 10.381 15.6158 9.97419 14.9749 9.65469C14.333 9.24249 13.6309 8.92569 13.011 8.48019C13.0594 7.59009 13.0256 6.69729 13.0329 5.80539C13.0155 5.20869 13.0814 4.60569 12.9781 4.01349Z'
                fill='#BB1B21'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.08594 10.9579C9.13531 10.9444 9.23497 10.9174 9.28434 10.9039C10.0706 11.3332 10.8368 11.7958 11.6121 12.2422C12.0811 12.46 12.509 12.7498 12.957 13.0036C12.9543 14.413 12.9662 15.8224 12.9406 17.2309C12.9534 17.3443 12.9022 17.4118 12.7861 17.4352C11.5381 16.681 10.2416 16.0078 9 15.2437C9.07314 14.1097 9.00823 12.9721 9.0384 11.8372C9.06217 11.5474 8.98263 11.2351 9.08594 10.9579Z'
                fill='#BB1B21'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.1138 9.56649C11.7456 9.20379 12.3646 8.81679 13.011 8.48019C13.6309 8.92569 14.333 9.24249 14.9749 9.65469C15.6158 9.97419 16.2073 10.381 16.8519 10.6942C16.7659 10.7968 16.6718 10.8967 16.5502 10.9579C15.8434 11.3314 15.1623 11.7481 14.472 12.1513C13.9655 12.4321 13.4526 12.703 12.957 13.0036C12.509 12.7498 12.0811 12.46 11.6121 12.2422C10.8368 11.7958 10.0706 11.3332 9.28434 10.9039C9.21394 10.8535 9.14537 10.7995 9.07954 10.7437C9.73052 10.3072 10.4309 9.95079 11.1138 9.56649Z'
                fill='#ED4340'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M20.8629 10.2082C20.8592 10.0471 20.8693 9.8842 20.9177 9.7294C20.9195 12.2917 20.9232 14.8549 20.9223 17.419C20.8793 17.5279 20.7696 17.563 20.6782 17.6206C18.1447 19.084 15.5902 20.5051 13.0549 21.9676C12.6261 21.9415 12.3042 21.55 11.8974 21.415C9.62171 20.0866 7.30126 18.8212 5.03109 17.4892C5.44251 17.2102 5.89691 17.0005 6.31749 16.7368C7.2144 16.2436 8.08206 15.6964 9 15.2437C10.2416 16.0078 11.5381 16.681 12.7861 17.4352C12.8263 17.4514 12.9067 17.4829 12.947 17.4982C13.2871 17.3776 13.5751 17.1499 13.8923 16.9825C14.8917 16.3921 15.9449 15.8863 16.9022 15.2311C18.2315 15.9304 19.5106 16.7224 20.8354 17.4289C20.8446 17.3596 20.8629 17.2192 20.872 17.149C20.8757 14.836 20.8592 12.5221 20.8629 10.2082Z'
                fill='#ED4340'
            />
        </svg>
    ),
    coin9: () => (
        <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.2'
                d='M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z'
                fill='#EDAB20'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.6674 7.27487C16.78 7.21983 14.8887 7.23263 13.0013 7.26591C12.9755 8.10252 12.9842 8.93913 12.9929 9.77574C12.9945 9.92985 12.9961 10.084 12.9974 10.2381C13.252 10.2394 13.5065 10.2394 13.7624 10.2394C13.6516 11.2906 13.5226 12.34 13.3936 13.3894C13.2543 14.5224 13.115 15.6554 12.9987 16.7904C12.986 18.0883 12.9758 19.3875 13.0051 20.6854C14.5311 20.2784 16.0596 19.8701 17.5716 19.4118C17.6517 18.9383 17.689 18.4596 17.7262 17.9813C17.7481 17.6995 17.77 17.4178 17.8007 17.1373C17.8899 16.1262 17.9805 15.1153 18.071 14.1045C18.275 11.8281 18.4788 9.55208 18.6674 7.27487ZM14.2167 12.185C14.2244 11.7818 14.2244 11.3786 14.2218 10.9766C14.7618 11.3618 15.3153 11.727 15.8688 12.092C16.3029 12.3784 16.7369 12.6647 17.1644 12.9606C17.1618 13.328 17.1631 13.6954 17.1669 14.0627C16.6881 14.3877 16.2063 14.7078 15.7244 15.0279C15.2212 15.3622 14.7179 15.6965 14.218 16.0365C14.2218 15.6371 14.2244 15.2378 14.2218 14.8384C14.8824 14.3891 15.5505 13.9526 16.2225 13.5226C15.9545 13.3411 15.6836 13.1641 15.4127 12.987C15.0108 12.7243 14.609 12.4617 14.2167 12.185Z'
                fill='#EDAB20'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.6674 7.27487C16.78 7.21983 14.8887 7.23263 13.0013 7.26591C12.9755 8.10252 12.9842 8.93913 12.9929 9.77574C12.9945 9.92985 12.9961 10.084 12.9974 10.2381C13.252 10.2394 13.5065 10.2394 13.7624 10.2394C13.6516 11.2906 13.5226 12.34 13.3936 13.3894C13.2543 14.5224 13.115 15.6554 12.9987 16.7904C12.986 18.0883 12.9758 19.3875 13.0051 20.6854C14.5311 20.2784 16.0596 19.8701 17.5716 19.4118C17.6517 18.9383 17.689 18.4596 17.7262 17.9813C17.7481 17.6995 17.77 17.4178 17.8007 17.1373C17.8899 16.1262 17.9805 15.1153 18.071 14.1045C18.275 11.8281 18.4788 9.55208 18.6674 7.27487ZM14.2167 12.185C14.2244 11.7818 14.2244 11.3786 14.2218 10.9766C14.7618 11.3618 15.3153 11.727 15.8688 12.092C16.3029 12.3784 16.7369 12.6647 17.1644 12.9606C17.1618 13.328 17.1631 13.6954 17.1669 14.0627C16.6881 14.3877 16.2063 14.7078 15.7244 15.0279C15.2212 15.3622 14.7179 15.6965 14.218 16.0365C14.2218 15.6371 14.2244 15.2378 14.2218 14.8384C14.8824 14.3891 15.5505 13.9526 16.2225 13.5226C15.9545 13.3411 15.6836 13.1641 15.4127 12.987C15.0108 12.7243 14.609 12.4617 14.2167 12.185Z'
                fill='#F4C215'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.9975 10.2381C13.252 10.2393 13.5065 10.2393 13.7624 10.2393C13.532 12.4256 13.2227 14.6041 12.9987 16.7904C12.734 16.7955 12.4693 16.7968 12.2033 16.7993C12.4731 14.6131 12.7213 12.423 12.9975 10.2381Z'
                fill='#F7F7F6'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.94509 12.9632C9.91491 12.295 10.9089 11.6653 11.8736 10.992C11.8355 11.3952 11.936 11.8265 11.8278 12.2144C11.1927 12.6701 10.5271 13.0822 9.87291 13.511C10.5322 13.9616 11.2105 14.3827 11.8698 14.8333C11.8685 15.2301 11.8711 15.6269 11.8736 16.0224C10.9025 15.3632 9.91491 14.7245 8.94382 14.0627C8.95273 13.6966 8.95273 13.3293 8.94509 12.9632Z'
                fill='#F7F7F6'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.2218 10.9766C15.1853 11.664 16.192 12.2873 17.1644 12.9606C17.1618 13.328 17.1631 13.6953 17.1669 14.0627C16.1882 14.727 15.1967 15.3709 14.218 16.0365C14.2218 15.6371 14.2244 15.2377 14.2218 14.8384C14.8824 14.3891 15.5505 13.9526 16.2225 13.5225C15.5569 13.072 14.8735 12.6483 14.2167 12.1849C14.2244 11.7817 14.2244 11.3785 14.2218 10.9766Z'
                fill='#F7F7F6'
            />
        </svg>
    ),
    coin10: () => (
        <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.2'
                d='M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z'
                fill='#FFC53B'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.9257 5.26208C12.8157 4.7984 14.8543 4.9928 16.6314 5.79056C18.4229 6.59552 19.9371 8.0096 20.8629 9.752C21.8729 11.624 22.17 13.8661 21.7129 15.944C21.27 18.0306 20.0414 19.9285 18.3471 21.2029C16.7871 22.3952 14.8214 23.0374 12.8629 22.9885C10.4143 22.9813 8.00571 21.8667 6.37857 20.0278C4.95286 18.4482 4.11714 16.3414 4.08571 14.2059C4.03286 12.2389 4.64714 10.2618 5.81286 8.68208C7.04714 6.98432 8.88857 5.74016 10.9257 5.26208ZM8.21571 8.25008C6.62 9.57344 5.66428 11.5851 5.53143 13.6544C6.16143 12.4506 7.14 11.4138 8.38428 10.8536C10.1071 10.0486 12.2043 10.1768 13.8357 11.1517C14.3886 10.7946 14.8357 10.1523 14.7057 9.46544C14.6014 8.92976 13.7886 8.5352 13.4886 9.1328L13.5377 9.15597C13.776 9.26763 14.1054 9.422 14.02 9.74336C13.9129 10.2762 13.1957 10.1523 12.9229 9.82688C12.4314 9.33152 12.6814 8.46032 13.2357 8.12624C14.0314 7.64384 15.1314 8.14928 15.4629 8.98016C15.7143 9.50864 15.5814 10.1005 15.43 10.6362C16.2453 10.0734 17.0674 9.52075 17.8892 8.96829L17.8894 8.96819L18.2057 8.75552C17.5914 9.70016 16.9743 10.6434 16.3314 11.5693C16.8514 11.4094 17.4343 11.2842 17.9557 11.5117C18.7386 11.8141 19.2443 12.7861 18.9271 13.5925C18.6829 14.2419 17.7786 14.6034 17.2129 14.144C16.8786 13.8978 16.6757 13.2037 17.1529 13.0078C17.5214 12.8264 17.7257 13.2584 17.85 13.5277C18.37 13.2152 18.09 12.4592 17.5771 12.3123C16.8743 12.1323 16.1886 12.5874 15.8371 13.1778C16.5671 14.4378 16.8443 15.9656 16.5357 17.397C16.1914 19.1811 14.9571 20.7392 13.3343 21.5211C16.3029 21.4088 19.0714 19.3424 20.0343 16.5099C20.7471 14.5155 20.56 12.2216 19.53 10.3741C18.4586 8.40848 16.4771 6.97424 14.2814 6.60128C12.1486 6.21104 9.86571 6.83744 8.21571 8.25008ZM6.99428 14.0706C7.64 12.8768 8.86286 12.0258 10.1986 11.8414C12.4243 11.4627 14.7329 13.1115 15.1129 15.3536C15.5686 17.4445 14.2629 19.7182 12.2429 20.3706C10.32 21.0805 8.00857 20.1862 7.02143 18.3862C6.27286 17.0816 6.26143 15.3853 6.99428 14.0706Z'
                fill='#1E1E1E'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.4786 15.427C11.0043 15.152 11.6871 15.6445 11.6343 16.2277C11.64 16.8944 10.74 17.2947 10.2657 16.8181C9.80571 16.4509 9.93 15.633 10.4786 15.427Z'
                fill='#1E1E1E'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.21571 8.25007C9.86571 6.83743 12.1486 6.21103 14.2814 6.60127C16.4771 6.97423 18.4586 8.40847 19.53 10.3741C20.56 12.2216 20.7471 14.5155 20.0343 16.5099C19.0714 19.3424 16.3029 21.4088 13.3343 21.5211C14.9571 20.7392 16.1914 19.1811 16.5357 17.397C16.8443 15.9656 16.5671 14.4378 15.8371 13.1778C16.1886 12.5874 16.8743 12.1323 17.5771 12.3123C18.09 12.4592 18.37 13.2152 17.85 13.5277C17.7257 13.2584 17.5214 12.8264 17.1529 13.0078C16.6757 13.2037 16.8786 13.8978 17.2129 14.144C17.7786 14.6034 18.6829 14.2419 18.9271 13.5925C19.2443 12.7861 18.7386 11.8141 17.9557 11.5117C17.4343 11.2842 16.8514 11.4094 16.3314 11.5693C16.9743 10.6434 17.5914 9.70015 18.2057 8.75551C17.2786 9.37903 16.35 10.0011 15.43 10.6362C15.5814 10.1005 15.7143 9.50863 15.4629 8.98015C15.1314 8.14927 14.0314 7.64383 13.2357 8.12623C12.6814 8.46031 12.4314 9.33151 12.9229 9.82687C13.1957 10.1523 13.9129 10.2762 14.02 9.74335C14.1114 9.39919 13.7271 9.24655 13.4886 9.13279C13.7886 8.53519 14.6014 8.92975 14.7057 9.46543C14.8357 10.1523 14.3886 10.7946 13.8357 11.1517C12.2043 10.1768 10.1071 10.0486 8.38428 10.8536C7.14 11.4138 6.16143 12.4506 5.53143 13.6544C5.66428 11.5851 6.62 9.57343 8.21571 8.25007Z'
                fill='#FFC53B'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15.1129 15.3536C14.7329 13.1115 12.4243 11.4627 10.1986 11.8414C8.86285 12.0258 7.64 12.8768 6.99428 14.0706C6.26143 15.3853 6.27285 17.0816 7.02143 18.3862C8.00857 20.1862 10.32 21.0805 12.2429 20.3706C14.2629 19.7182 15.5686 17.4445 15.1129 15.3536ZM10.2657 16.8181C9.80571 16.4509 9.93 15.633 10.4786 15.427C11.0043 15.152 11.6871 15.6445 11.6343 16.2277C11.64 16.8944 10.74 17.2947 10.2657 16.8181Z'
                fill='#FFC53B'
            />
        </svg>
    ),
};
