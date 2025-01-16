import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Image from 'next/image';
import Link from 'next/link';
import { socialIcons } from '@/utils/data';
import { footerLinks } from '@/utils/data';

export default function Footer() {
  return (
    <footer className="bg-secondary py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-3 md:order-1 flex flex-col justify-between items-center md:items-start">
            <div className="relative w-32 h-8">
              <Image
                src="/images/logo.svg"
                alt="Manage"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-8 md:mt-0">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href={`#${icon.name}`}
                  className="hover:opacity-75"
                >
                  <Image
                    src={icon.icon}
                    alt={icon.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          <nav className="md:col-span-5 md:order-2 grid grid-cols-2 gap-8 text-white">
            <div className="space-y-3">
              {footerLinks[0].links.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="block hover:text-[#F3603C]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-3">
              {footerLinks[1].links.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="block hover:text-[#F3603C]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="md:col-span-4 md:order-3">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Updates in your inbox..."
                className="rounded-full"
              />
              <Button>Go</Button>
            </form>
            <p className="text-dark-grayish-blue text-xs mt-8 text-center md:text-right">
              &copy; Copyright 2025. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
