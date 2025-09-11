import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/7a733e84-b2b2-44bb-96c3-9c4fcfcf305e.png" 
            alt="ВОСТОК - Логотип компании"
            className="h-12 w-auto transition-all duration-300 hover:scale-105"
          />
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