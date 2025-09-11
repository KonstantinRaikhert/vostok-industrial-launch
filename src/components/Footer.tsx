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
              <span className="text-xl font-bold">ООО ВОСТОК</span>
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
              <p>Тел./факс: +7 (916) 188-76-64</p>
              <p>Email: info@vostk.su</p>
              <p className="mt-4 font-semibold">Общая информация</p>
              <p>Полное наименование: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ &quot;ВОСТОК&quot;</p>
              <p>Сокращенное наименование: ООО &quot;ВОСТОК&quot;</p>
              <p>ОГРН: 1243800014688</p>
              <p>ИНН: 3812162762</p>
              <p>КПП: 381201001</p>
              <p>ID ЭДО: 2BE8fadb313e10e4f49acbf94b2cada255b</p>
              <p>Генеральный директор: Пыжьянов Василий Сергеевич</p>
              <p>Юридический адрес: 664002, ИРКУТСКАЯ ОБЛАСТЬ, Г.О. ГОРОД ИРКУТСК, Г ИРКУТСК, УЛ МИРА, Д. 16</p>
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