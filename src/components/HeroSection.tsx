import { Button } from "@/components/ui/button";
import heroEquipment from "@/assets/hero-equipment.jpg";

const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Инновации для промышленности
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-primary-foreground/80 leading-relaxed">
              Передовое оборудование и технологические решения для повышения 
              эффективности вашего производства
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                Связаться с нами
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Каталог продукции
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 mb-6 lg:mb-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-48 sm:h-64 md:h-80 lg:h-auto rounded-lg shadow-2xl object-cover"
              poster={heroEquipment}
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              <img
                src={heroEquipment}
                alt="Промышленное оборудование ВОСТОК"
                className="w-full h-full rounded-lg object-cover"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;