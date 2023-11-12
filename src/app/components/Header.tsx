import Image from 'next/image';
import UserIcon from '../../../public/nav/User.svg';
import Storefront from '../../../public/nav/Storefront.svg';
import MarketLogo from '../../../public/nav/NFT Marketplace.svg';
import burger from '../../../public/nav/burger.svg';
import { Button } from './ui/Button';

export const Header = () => {
  return (
    <header className='w-full bg-transparent px-[30px] py-[15px] md:px-[50px] xl:py-5'>
      <nav className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <Image
            className='h-6 w-6 xl:h-8 xl:w-8'
            src={Storefront}
            alt='stolefront'
          />
          <Image
            className='h-[15px] w-[150px] xl:h-[20px] xl:w-[200px]'
            src={MarketLogo}
            alt='marketlogo'
          />
        </div>
        <div className='hidden items-center gap-2.5 xl:flex'>
          <a
            className='px-5 text-base font-semibold text-white duration-300 hover:scale-95'
            href='/'
          >
            Marketplace
          </a>
          <a
            className='px-5 text-base font-semibold text-white duration-300 hover:scale-95'
            href='/'
          >
            Rankings
          </a>
          <a
            className='px-5 text-base font-semibold text-white duration-300 hover:scale-95'
            href='/'
          >
            Connect a wallet
          </a>

          <Button variant='primary' icon={UserIcon}>
            Sign Up
          </Button>
        </div>
        <Image
          className='xl:hidden'
          src={burger}
          width={24}
          height={24}
          alt='burger menu'
        />
      </nav>
    </header>
  );
};
