'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { testimonials } from '@/utils/data';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-secondary mb-24">
          What they&apos;ve said
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1080: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="overflow-y-visible"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="mt-10">
              <div className="bg-very-light-gray pt-16 pb-10 px-4 text-center relative h-64 flex flex-col ">
                <div className="absolute -top-10 inset-x-0 flex justify-center">
                  <Image
                    src={testimonial.image}
                    alt=""
                    width={72}
                    height={72}
                    className="rounded-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-base text-secondary mb-4">
                  {testimonial.name}
                </h3>

                <p className="text-dark-grayish-blue text-sm leading-relaxed flex-1">
                  "{testimonial.quote}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-10">
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
}
