const translations = {
    ru: {
        // Навигация
        nav_home: 'Главная',
        nav_lost: 'Я потерял',
        nav_found: 'Я нашёл',
        nav_search: 'Поиск',
        nav_how: 'Как работает',
        nav_stories: 'Истории',
        nav_about: 'О нас',
        nav_contact: 'Контакты',
        
        // Герой секция
        hero_title: 'Потеряли',
        hero_title_highlight: 'что-то важное?',
        hero_description: 'Мы соединяем потерянные и найденные вещи по всему миру. Тысячи людей уже вернули своё благодаря нашей платформе.',
        btn_report_lost: 'Сообщить о потере',
        btn_report_found: 'Сообщить о находке',
        
        // Статистика
        stat_lost: 'Потеряно вещей',
        stat_found: 'Найдено вещей',
        stat_matched: 'Успешных возвратов',
        
        // Карточки на главной
        card_search_title: 'Мгновенный поиск',
        card_search_desc: 'Наша система автоматически ищет совпадения между потерянными и найденными вещами',
        card_search_link: 'Найти',
        card_global_title: 'По всему миру',
        card_global_desc: 'Работает в любой стране, любом городе. Географических ограничений нет',
        card_global_link: 'Узнать',
        card_safety_title: 'Безопасная связь',
        card_safety_desc: 'Ваши контактные данные защищены до момента подтверждения совпадения',
        card_safety_link: 'Подробнее',
        card_stories_title: 'Реальные истории',
        card_stories_desc: 'Читайте истории людей, которые уже нашли свои потерянные вещи',
        card_stories_link: 'Читать',
        
        // Отзывы
        testimonials_title: 'Что говорят наши пользователи',
        testimonial_1: 'Потерял телефон в метро. Через 2 дня нашёлся благодаря этому сервису!',
        testimonial_1_author: 'Алексей, Москва',
        testimonial_2: 'Нашёл чей-то кошелёк, быстро связался с владельцем. Отличный сервис.',
        testimonial_2_author: 'Мария, Санкт-Петербург',
        testimonial_3: 'Вернули чемодан с важными документами. Спасибо огромное!',
        testimonial_3_author: 'Дмитрий, Новосибирск',
        
        // Форма потери
        lost_title: 'Сообщить о потере',
        lost_subtitle: 'Заполните форму. Мы уведомим вас, если кто-то найдёт вашу вещь.',
        lost_item_name: 'Название вещи *',
        lost_item_name_placeholder: 'iPhone 14 Pro, чёрный рюкзак, обручальное кольцо',
        lost_category: 'Категория *',
        lost_category_select: 'Выберите категорию',
        category_electronics: 'Электроника',
        category_bags: 'Сумки и багаж',
        category_documents: 'Документы и удостоверения',
        category_jewelry: 'Украшения и аксессуары',
        category_keys: 'Ключи',
        category_wallet: 'Кошелёк и карты',
        category_clothing: 'Одежда',
        category_other: 'Другое',
        lost_color: 'Цвет',
        lost_color_placeholder: 'чёрный, серебристый, красный',
        lost_brand: 'Бренд / Модель',
        lost_brand_placeholder: 'Apple, Nike, Samsung, Gucci',
        lost_location: 'Место потери *',
        lost_location_placeholder: 'метро, парк Горького, кафе "Уют"',
        lost_city: 'Город *',
        lost_city_placeholder: 'Москва, Санкт-Петербург, Казань',
        lost_country: 'Страна *',
        lost_country_placeholder: 'Россия, Беларусь, Казахстан',
        lost_date: 'Дата потери *',
        lost_description: 'Описание',
        lost_description_placeholder: 'Любые детали, которые помогут опознать вещь (царапины, наклейки, гравировка, серийный номер)',
        lost_contact: 'Email для связи *',
        lost_contact_placeholder: 'your@email.com',
        lost_submit: 'Отправить заявку',
        
        // Форма находки
        found_title: 'Сообщить о находке',
        found_subtitle: 'Помогите человеку вернуть его вещь. Заполните форму ниже.',
        found_item_name: 'Название вещи *',
        found_item_name_placeholder: 'iPhone 14 Pro, чёрный рюкзак',
        found_category: 'Категория *',
        found_color: 'Цвет',
        found_color_placeholder: 'чёрный, серебристый',
        found_brand: 'Бренд / Модель',
        found_brand_placeholder: 'Apple, Nike',
        found_location: 'Место находки *',
        found_location_placeholder: 'библиотека, вокзал, парк',
        found_city: 'Город *',
        found_city_placeholder: 'Москва, Лондон',
        found_country: 'Страна *',
        found_country_placeholder: 'Россия, США',
        found_date: 'Дата находки *',
        found_description: 'Описание',
        found_description_placeholder: 'Где именно нашли, в каком состоянии вещь',
        found_contact: 'Email для связи *',
        found_contact_placeholder: 'your@email.com',
        found_submit: 'Отправить заявку',
        
        // Поиск
        search_title: 'Поиск потерянных вещей',
        search_subtitle: 'Найдите совпадения для вашей потерянной вещи',
        search_item: 'Название вещи',
        search_item_placeholder: 'iPhone, рюкзак, ключи',
        search_city: 'Город',
        search_city_placeholder: 'Введите город',
        search_category: 'Категория',
        search_all: 'Все категории',
        search_button: 'Искать совпадения',
        search_no_results: 'Совпадений не найдено. Попробуйте изменить параметры поиска или добавьте больше деталей.',
        search_loading: 'Поиск совпадений...',
        match_score: 'совпадение',
        
        // Страница "Как работает"
        how_title: 'Как работает сервис',
        how_subtitle: 'Простой процесс в три шага, который поможет вернуть потерянное',
        step1_title: 'Сообщите о потере или находке',
        step1_desc: 'Заполните простую форму: укажите что вы потеряли или нашли, где это произошло, и ваши контактные данные. Это займёт не более 2 минут.',
        step2_title: 'Наша система ищет совпадения',
        step2_desc: 'Автоматический алгоритм анализирует все заявки и находит потенциальные совпадения по категории, местоположению, цвету и другим параметрам.',
        step3_title: 'Свяжитесь и верните вещь',
        step3_desc: 'При нахождении совпадения вы получите уведомление. Свяжитесь с другой стороной через безопасный канал и договоритесь о возврате.',
        
        // Страница историй
        stories_title: 'Истории успеха',
        stories_subtitle: 'Реальные люди, которые нашли свои потерянные вещи',
        
        // Страница о нас
        about_title: 'О проекте',
        about_subtitle: 'Наша миссия — помогать людям возвращать потерянные вещи по всему миру',
        about_mission_title: 'Наша миссия',
        about_mission_desc: 'Каждый день тысячи людей теряют важные вещи: телефоны, документы, ключи, кошельки. Мы создали LostFound Global, чтобы сделать процесс поиска потерянного простым, быстрым и эффективным.',
        
        // Страница безопасности
        safety_title: 'Безопасность',
        safety_subtitle: 'Как мы защищаем ваши данные и обеспечиваем безопасность',
        safety_data_title: 'Защита персональных данных',
        safety_data_desc: 'Ваши контактные данные не видны публично. Они раскрываются только при взаимном согласии сторон, когда система находит совпадение.',
        safety_verify_title: 'Верификация пользователей',
        safety_verify_desc: 'Мы проверяем заявки и отслеживаем подозрительную активность, чтобы защитить вас от мошенников.',
        safety_contact_title: 'Безопасная связь',
        safety_contact_desc: 'Мы предоставляем защищённый канал для общения между потерявшим и нашедшим.',
        safety_tips_title: 'Советы по безопасности',
        safety_tips_desc: 'Следуйте простым правилам при возврате вещей.',
        
        // Страница контактов
        contact_title: 'Свяжитесь с нами',
        contact_subtitle: 'Мы всегда рады помочь и ответить на ваши вопросы',
        contact_info_title: 'Контактная информация',
        contact_info_desc: 'Вы можете связаться с нами любым удобным способом. Мы отвечаем в течение 24 часов.',
        contact_form_title: 'Напишите нам',
        contact_name: 'Ваше имя',
        contact_email: 'Email',
        contact_subject: 'Тема',
        contact_message: 'Сообщение',
        contact_send: 'Отправить',
        
        // Футер
        footer_about: 'Возвращаем потерянное с 2024 года',
        footer_links: 'Ссылки',
        footer_info: 'Информация',
        footer_about_project: 'О проекте',
        footer_contact: 'Контакты',
        footer_safety: 'Безопасность',
        footer_copyright: 'Все права защищены',
        
        // Кнопки
        back_home: 'На главную'
    },
    
    en: {
        // Navigation
        nav_home: 'Home',
        nav_lost: 'I lost',
        nav_found: 'I found',
        nav_search: 'Search',
        nav_how: 'How it works',
        nav_stories: 'Stories',
        nav_about: 'About',
        nav_contact: 'Contact',
        
        // Hero section
        hero_title: 'Lost',
        hero_title_highlight: 'something important?',
        hero_description: 'We connect lost and found items worldwide. Thousands of people have already recovered their belongings through our platform.',
        btn_report_lost: 'Report Lost Item',
        btn_report_found: 'Report Found Item',
        
        // Statistics
        stat_lost: 'Items Lost',
        stat_found: 'Items Found',
        stat_matched: 'Successful Returns',
        
        // Home cards
        card_search_title: 'Instant Search',
        card_search_desc: 'Our system automatically finds matches between lost and found items',
        card_search_link: 'Search',
        card_global_title: 'Worldwide',
        card_global_desc: 'Works in any country, any city. No geographical limitations',
        card_global_link: 'Learn more',
        card_safety_title: 'Secure Connection',
        card_safety_desc: 'Your contact information is protected until a match is confirmed',
        card_safety_link: 'Details',
        card_stories_title: 'Real Stories',
        card_stories_desc: 'Read stories of people who have found their lost items',
        card_stories_link: 'Read more',
        
        // Testimonials
        testimonials_title: 'What our users say',
        testimonial_1: 'Lost my phone in the subway. Found it 2 days later thanks to this service!',
        testimonial_1_author: 'Alex, Moscow',
        testimonial_2: 'Found someone\'s wallet, quickly connected with the owner. Great service.',
        testimonial_2_author: 'Maria, London',
        testimonial_3: 'Got back my suitcase with important documents. Thank you so much!',
        testimonial_3_author: 'Dmitry, Berlin',
        
        // Lost form
        lost_title: 'Report a Lost Item',
        lost_subtitle: 'Fill out the form below. We\'ll notify you if someone finds your item.',
        lost_item_name: 'Item Name *',
        lost_item_name_placeholder: 'iPhone 14 Pro, Black Backpack, Wedding Ring',
        lost_category: 'Category *',
        lost_category_select: 'Select category',
        category_electronics: 'Electronics',
        category_bags: 'Bags & Luggage',
        category_documents: 'Documents & IDs',
        category_jewelry: 'Jewelry & Accessories',
        category_keys: 'Keys',
        category_wallet: 'Wallet & Cards',
        category_clothing: 'Clothing',
        category_other: 'Other',
        lost_color: 'Color',
        lost_color_placeholder: 'Black, Silver, Red',
        lost_brand: 'Brand / Model',
        lost_brand_placeholder: 'Apple, Nike, Samsung, Gucci',
        lost_location: 'Location Lost *',
        lost_location_placeholder: 'Subway, Central Park, Starbucks',
        lost_city: 'City *',
        lost_city_placeholder: 'New York, London, Tokyo',
        lost_country: 'Country *',
        lost_country_placeholder: 'USA, UK, Japan',
        lost_date: 'Date Lost *',
        lost_description: 'Description',
        lost_description_placeholder: 'Any details that could help identify the item (scratches, stickers, engraving, serial number)',
        lost_contact: 'Contact Email *',
        lost_contact_placeholder: 'your@email.com',
        lost_submit: 'Submit Report',
        
        // Found form
        found_title: 'Report a Found Item',
        found_subtitle: 'Help someone get their belongings back. Fill out the form below.',
        found_item_name: 'Item Name *',
        found_item_name_placeholder: 'iPhone 14 Pro, Black Backpack',
        found_category: 'Category *',
        found_color: 'Color',
        found_color_placeholder: 'Black, Silver',
        found_brand: 'Brand / Model',
        found_brand_placeholder: 'Apple, Nike',
        found_location: 'Location Found *',
        found_location_placeholder: 'Library, Station, Park',
        found_city: 'City *',
        found_city_placeholder: 'New York, London',
        found_country: 'Country *',
        found_country_placeholder: 'USA, UK',
        found_date: 'Date Found *',
        found_description: 'Description',
        found_description_placeholder: 'Where exactly you found it, condition of the item',
        found_contact: 'Contact Email *',
        found_contact_placeholder: 'your@email.com',
        found_submit: 'Submit Report',
        
        // Search
        search_title: 'Search Lost Items',
        search_subtitle: 'Find matches for your lost item',
        search_item: 'Item Name',
        search_item_placeholder: 'iPhone, Backpack, Keys',
        search_city: 'City',
        search_city_placeholder: 'Enter city',
        search_category: 'Category',
        search_all: 'All categories',
        search_button: 'Search Matches',
        search_no_results: 'No matches found. Try changing your search criteria or add more details.',
        search_loading: 'Searching for matches...',
        match_score: 'Match',
        
        // How it works page
        how_title: 'How it works',
        how_subtitle: 'Simple three-step process to help you find your lost items',
        step1_title: 'Report lost or found',
        step1_desc: 'Fill out a simple form: describe what you lost or found, where it happened, and your contact details. Takes less than 2 minutes.',
        step2_title: 'Our system finds matches',
        step2_desc: 'Automatic algorithm analyzes all reports and finds potential matches by category, location, color and other parameters.',
        step3_title: 'Connect and return',
        step3_desc: 'When a match is found, you will receive a notification. Contact the other party through a secure channel and arrange the return.',
        
        // Stories page
        stories_title: 'Success Stories',
        stories_subtitle: 'Real people who found their lost items',
        
        // About page
        about_title: 'About Us',
        about_subtitle: 'Our mission is to help people return lost items worldwide',
        about_mission_title: 'Our Mission',
        about_mission_desc: 'Every day thousands of people lose important items: phones, documents, keys, wallets. We created LostFound Global to make finding lost items simple, fast and effective.',
        
        // Safety page
        safety_title: 'Safety',
        safety_subtitle: 'How we protect your data and ensure safety',
        safety_data_title: 'Personal Data Protection',
        safety_data_desc: 'Your contact information is not publicly visible. It is only disclosed when both parties agree after a match is found.',
        safety_verify_title: 'User Verification',
        safety_verify_desc: 'We review reports and monitor suspicious activity to protect you from scammers.',
        safety_contact_title: 'Secure Communication',
        safety_contact_desc: 'We provide a secure channel for communication between the person who lost and the person who found the item.',
        safety_tips_title: 'Safety Tips',
        safety_tips_desc: 'Follow simple rules when returning items.',
        
        // Contact page
        contact_title: 'Contact Us',
        contact_subtitle: 'We are always happy to help and answer your questions',
        contact_info_title: 'Contact Information',
        contact_info_desc: 'You can contact us in any convenient way. We respond within 24 hours.',
        contact_form_title: 'Send us a message',
        contact_name: 'Your name',
        contact_email: 'Email',
        contact_subject: 'Subject',
        contact_message: 'Message',
        contact_send: 'Send',
        
        // Footer
        footer_about: 'Returning lost items since 2024',
        footer_links: 'Links',
        footer_info: 'Information',
        footer_about_project: 'About',
        footer_contact: 'Contact',
        footer_safety: 'Safety',
        footer_copyright: 'All rights reserved',
        
        // Buttons
        back_home: 'Back to home'
    }
};

let currentLang = 'ru';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'TEXTAREA' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'BUTTON') {
                element.textContent = translations[lang][key];
            } else if (element.tagName === 'SELECT') {
                // Для select нужно обновлять options отдельно
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Обновляем атрибуты для элементов с data-translate-placeholder
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Обновляем опции select
    document.querySelectorAll('select option').forEach(option => {
        const key = option.getAttribute('data-translate');
        if (key && translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });
    
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
    const langLink = document.querySelector('.lang-switch .lang-link');
    if (langLink) {
        langLink.textContent = lang === 'ru' ? 'English' : 'Русский';
    }
}

function toggleLanguage() {
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    setLanguage(newLang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
        setLanguage(savedLang);
    } else {
        setLanguage('ru');
    }
});
