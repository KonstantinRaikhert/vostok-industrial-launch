import { Card, CardContent } from "@/components/ui/card";
import qualityIcon from "@/assets/quality-icon.jpg";
import innovationIcon from "@/assets/innovation-icon.jpg";
import reliabilityIcon from "@/assets/reliability-icon.jpg";

const values = [
  {
    icon: qualityIcon,
    title: "Высокое качество",
    description: "Строгий контроль качества на всех этапах производства обеспечивает надежность нашего оборудования"
  },
  {
    icon: innovationIcon,
    title: "Инновационность",
    description: "Постоянные исследования и разработки позволяют нам создавать передовые технологические решения"
  },
  {
    icon: reliabilityIcon,
    title: "Надежность",
    description: "Наше оборудование работает в самых сложных промышленных условиях без сбоев"
  }
];

const ValuesSection = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Наши ценности
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы создаем оборудование, которое помогает предприятиям достигать новых высот
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;