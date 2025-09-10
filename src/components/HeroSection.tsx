import { Button } from "@/components/ui/button";
import heroEquipment from "@/assets/hero-equipment.jpg";

const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Инновации для промышленности
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Передовое оборудование и технологические решения для повышения 
              эффективности вашего производства
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Связаться с нами
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Каталог продукции
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={heroEquipment}
              alt="Промышленное оборудование ВОСТОК"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;