import { features } from '@/utils/data';

export default function Features() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-32">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
              What&apos;s different about Manage?
            </h2>
            <p className="text-dark-grayish-blue max-w-md mx-auto lg:mx-0">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <dl className="space-y-10">
              {features.map((feature) => (
                <div key={feature.id} className="relative">
                  <dt>
                    <div className="flex md:items-center">
                      <div className="flex-none">
                        <span className="flex items-center justify-center h-10 w-16 rounded-full bg-[#F3603C] text-white font-bold">
                          {feature.id}
                        </span>
                      </div>
                      <div className="absolute h-10 bg-[#FDF3F0] left-0 right-0 -z-10 md:hidden" />
                      <h3 className="text-base font-bold text-secondary ml-4 pt-2 md:pt-0">
                        {feature.title}
                      </h3>
                    </div>
                  </dt>
                  <dd className="mt-3 text-dark-grayish-blue md:ml-20">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
