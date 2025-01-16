import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight mb-6">
              Bring everyone together to build better products.
            </h1>
            <p className="text-dark-grayish-blue mb-8 max-w-lg mx-auto lg:mx-0">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/images/illustration-intro.svg"
              alt="Illustrations"
              width={580}
              height={525}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
