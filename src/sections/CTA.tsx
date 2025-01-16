import { Button } from '@/components/ui/Button';

export default function CallToAction() {
  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-cta-desktop" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-md leading-tight">
            Simplify how your team works today.
          </h2>
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
