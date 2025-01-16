'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { navLinks } from '@/utils/data';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="relative z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-10">
          <Link href="/" className="relative w-[147px] h-[24px]">
            <Image
              src="/images/logo.svg"
              alt="Manage"
              fill
              className="object-contain"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="text-secondary font-medium text-sm transition  hover:text-primary"
              >
                {title}
              </Link>
            ))}
          </div>

          <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-very-light-gray rounded-full px-8 shadow-[0_15px_15px_-10px_rgba(243,96,60,0.25)]">
            Get Started
          </Button>

          {/* Mobile navigation */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Image
              src={
                isOpen ? '/images/icon-close.svg' : '/images/icon-hamburger.svg'
              }
              alt=""
              width={25}
              height={18}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-b from-very-light-gray/70 to-very-dark-blue/70 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute top-24 left-6 right-6 bg-very-light-gray py-10 px-6 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center space-y-6 text-secondary font-medium text-lg">
              {navLinks.map(({ title, href }) => (
                <Link key={title} href={href} onClick={() => setIsOpen(false)}>
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
