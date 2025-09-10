const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center">
                <span className="text-primary font-bold text-sm">В</span>
              </div>
              <span className="text-xl font-bold">ВОСТОК</span>
            </div>
            <p className="text-primary-foreground/80">
              Инновационное оборудование для промышленности
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Продукция</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Станки с ЧПУ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Роботизированные линии</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Автоматизация</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Консультации</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Техподдержка</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Обучение</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>+7 (495) 123-45-67</p>
              <p>info@vostok-industrial.ru</p>
              <p>г. Москва, ул. Промышленная, д. 15</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 ВОСТОК. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;