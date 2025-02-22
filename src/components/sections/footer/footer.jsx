import { Footer, FooterBottom } from '@/components/ui/footer';
import {
    DiscordLogoIcon,
    InstagramLogoIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

export default function FooterSection() {
    return (
        <footer className='w-full px-1 py-6 sm:py-8 overflow-hidden my-12'>
            <div className='mx-auto max-w-container'>
                <Footer className='pt-0'>
                    <FooterBottom className='mt-0 flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between'>
                        {/* Copyright Text */}
                        <div className='text-center text-sm sm:text-base text-gray-500'>
                            © 2025 DappRush. All rights reserved.
                        </div>

                        {/* Social Media Links */}
                        <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4'>
                            <span className='text-sm sm:text-base text-gray-500'>
                                Follow Us on
                            </span>
                            <div className='flex items-center gap-3 sm:gap-4'>
                                <Link
                                    href='#'
                                    className='text-gray-500 hover:text-primary transition-colors'
                                >
                                    <DiscordLogoIcon className='w-5 h-5 sm:w-6 sm:h-6' />
                                </Link>
                                <Link
                                    href='#'
                                    className='text-gray-500 hover:text-primary transition-colors'
                                >
                                    <InstagramLogoIcon className='w-5 h-5 sm:w-6 sm:h-6' />
                                </Link>
                                <Link
                                    href='#'
                                    className='text-gray-500 hover:text-primary transition-colors'
                                >
                                    <TwitterLogoIcon className='w-5 h-5 sm:w-6 sm:h-6' />
                                </Link>
                            </div>
                        </div>
                    </FooterBottom>
                </Footer>
            </div>
        </footer>
    );
}
