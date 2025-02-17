import { Footer, FooterBottom } from '@/components/ui/footer';
import {
    DiscordLogoIcon,
    InstagramLogoIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

export default function FooterSection() {
    return (
        <footer className='w-full bg-background px-4'>
            <div className='mx-auto max-w-container'>
                <Footer className='pt-0'>
                    <FooterBottom className='mt-0 flex flex-col items-center gap-4 sm:flex-col md:flex-row'>
                        <div>© 2025 DefiKrypto. All rights reserved</div>
                        <div className='flex items-center gap-4'>
                            <span>Follow Us on</span>
                            <Link href='#'>
                                <DiscordLogoIcon />
                            </Link>
                            <Link href='#'>
                                <InstagramLogoIcon />
                            </Link>
                            <Link href='#'>
                                <TwitterLogoIcon />
                            </Link>
                        </div>
                    </FooterBottom>
                </Footer>
            </div>
        </footer>
    );
}
