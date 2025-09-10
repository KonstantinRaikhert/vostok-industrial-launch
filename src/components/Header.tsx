import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/d90a2f86-ccfc-4734-aa54-e7926b4d7cc5.png" 
            alt="ВОСТОК - Логотип компании"
            className="h-10 w-auto transition-all duration-300 hover:scale-105 filter brightness-110"
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