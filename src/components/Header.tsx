import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">В</span>
          </div>
          <span className="text-xl font-bold text-foreground">ВОСТОК</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-foreground hover:text-accent transition-colors">Продукция</a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">Решения</a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">О компании</a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">Контакты</a>
        </nav>
        
        <Button variant="outline" size="sm">
          Связаться
        </Button>
      </div>
    </header>
  );
};

export default Header;