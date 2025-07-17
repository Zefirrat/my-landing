import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { Image as ImageIcon } from 'lucide-react';
import ParticlesBg from 'particles-bg';
import CertificatesSection from './components/CertificatesSection';


const timeline = [
    { year: '2024-сейчас', text: 'Ведущий разработчик .Net. IBS.' },
    { year: '2021-2024', text: 'Миддл/Сеньор/Тимлид/Техлид .Net|GoLang|TypeScript. New Vision Tecnologies.' },
    { year: '2020', text: 'Миддл .Net разработчик. Ланит.' },
    { year: '2020', text: 'ИП. Фриланс.' },
    { year: '2019-2020', text: 'Инженер-программист (джун). ГК Аплана. ООО АйТи.' },
    { year: '2017-2019', text: 'Инженер-программист (джун). ФГБУ ФКП "Росреестр".' },
    { year: '2017', text: 'Окончил УКРТБ. С красным дипломом.' },
    { year: '2015-2017', text: 'Эникей. МБОУ Гимназия №3.' },
];

const certificatesWork = [
    { title: 'StackOverflow: 879 репутации, 10 серебряных, 14 бронзовых наград', src: '/certs/stackoverflow.png' },
    { title: 'NuGet: 25 000+ загрузок собственных библиотек', src: '/certs/nuget.png' },
    { title: 'HackerRank. C# (Basic). 2022', src: '/certs/hackerrank_csharp_basic.png' },
    { title: 'Грамота. За дедуктивные способности. NvTech. 2022', src: '/certs/Image-117_16_58_5.jpg' },

];

const certificatesUniversity = [
    { title: 'Диплом. За разработку сервиса Thesis Template. 2025', src: '/certs/Image-217_16_58_5.jpg' },
    { title: 'Благодарственное письмо. За организацию и проведение всероссийской олимпиады мастерства. 2014', src: '/certs/Image-717_16_18_23.jpg' },
    { title: 'Свидетельство. О получении рабочей профессии "Оператор ЭВМ". 2014', src: '/certs/Image-817_16_18_23.jpg' },
    { title: 'Диплом. 1 место в 1 туре республиканской олимпиады по Математике среди ССУЗ. 2013', src: '/certs/Image-117_16_18_23.jpg' },
    { title: 'Диплом. 4 место в республиканской олимпиаде по Математике. 2013', src: '/certs/Image-317_16_18_23.jpg' },
    { title: 'Диплом. Победитель в номинации "Высокий уровень Матиматической кульуры" в республиканской олимпиаде по Математике. 2013', src: '/certs/Image-417_16_18_23.jpg' },
    { title: 'Сертификат. Курс "Углубленное изучение английского языка". 2013', src: '/certs/Image-217_16_18_23.jpg' },
    { title: 'Статья. За отличную учебу. 2012', src: '/certs/Image-017_16_58_5.jpg' },
];
const certificatesSchool = [
    { title: 'Кенгуру. Результаты тестирования. Хорошо. 2011', src: '/certs/Image-917_16_18_23.jpg' },
    { title: 'Благодарственное письмо. За воспитание.', src: '/certs/Image-017_16_18_23.jpg' },
    { title: 'Грамота. За хорошую учебу.', src: '/certs/Image-517_16_18_23.jpg' },
    { title: 'Грамота. За участие в жизни класса.', src: '/certs/Image-617_16_18_23.jpg' },
];


const stacks = [
    {
        category: 'Сервисы .Net',
        technologies: [
            '.NetCore',
            'Entity Framework',
            'MSSQL',
            'Keycloak',
            'Telegram bot',
            'Hangfire',
            'Distributed monolith',
        ],
    },
    {
        category: 'Веб и Desktop',
        technologies: [
            'Blazor',
            '.NetCore',
            'EntityFramework',
            'PostgreSQL',
            'NSwag',
            'TDD',
            'Grafana',
            'Prometheus',
            'Wix',
        ],
    },
    {
        category: 'Golang',
        technologies: [
            'Gorm',
            'PostgreSQL',
            'Prometheus',
            'AutoCAD',
            'WinForms',
        ],
    },
    {
        category: 'TypeScript',
        technologies: [
            'NestJS',
            'Prisma',
            'PostgreSQL',
            'PgAdmin',
            'Lerna',
            'TDD',
            'Microservices',
            'E2E',
            'Nginx',
        ],
    },
    {
        category: 'DevOps',
        technologies: [
            'Azure DevOps',
            'Azure agents',
            'Build pipelines',
            'Release pipelines',
            'Bash',
            'PowerShell',
            'Batch',
            'IIS',
            'Dockerfile',
            'Docker registry',
            'Docker swarm',
        ],
    },
    {
        category: 'CI/CD',
        technologies: [
            'GitLab',
            'Gitlab runner',
            'Dockerfile',
            'Docker-compose',
            'Docker registry',
            'Docker swarm',
        ],
    },
];

const achievements = [
    'Внедрил интеграционные и e2e тесты, разработал базовые принципы для команды',
    'Два проекта с покрытием тестами 80%+, критические модули — 90–100%',
    'Все проекты — самодостаточные приложения, внедряемые в другие организации',
    'Разработал приложение контроля времени сотрудников, используемое компанией и планируемое к продаже',
    'Оптимизировал сборку JS артефактов в CI/CD Azure (ускорение до 47 раз)',
    'Создал движок исполнения структурированных команд на .Net с системой плагинов',
    'Участвовал в создании оркестратора распределённых агентов',
    'Создал CI/CD для полного дистрибутива с обфускацией и подписью файлов',
    'Публикация NuGet-библиотек (25 000+ загрузок), автоматизация деплоя из GitHub',
    'Пишу статьи, выступаю на внутренних митапах, веду Telegram-канал',
];

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5 } }),
};

export default function App() {
    console.info('Лабу дабу даб даб! Леонид Павлов, 2025.');
    const [activeImage, setActiveImage] = useState(null);

    // Вычисление стажа
    const start = new Date(2015, 8, 1); // сентябрь — месяц 8 (0-индексация)
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }
    const experienceString = `${years} лет${years === 1 ? '' : years >= 2 && years <= 4 ? 'а' : ''}${months > 0 ? ` ${months} мес.` : ''}`;


    return (
        <>
            {/* Background particles */}
            <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
                <ParticlesBg type="cobweb" bg={false} num={256} color="#00AEEF" />
            </div>

            {/* Main content overlay */}
            <div className="relative min-h-screen text-white">
                <div className="relative z-10 max-w-3xl mx-auto p-8 space-y-16 bg-gradient-to-br from-blue-900 via-blue-600 to-green-500 bg-opacity-80 backdrop-blur-lg">
                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl font-extrabold tracking-tight">Леонид Павлов</h1>
                        <p className="mt-4 text-xl text-blue-100">
                            Backend .NET/Go/TypeScript Developer | Архитектор | Тимлид
                        </p>
                    </motion.header>

                    {/* About Section */}
                    <motion.section custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
                        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-300 inline-block">О себе</h2>
                        <p className="leading-relaxed text-blue-100">
                            Эксперт в проектировании и разработке интеграционных систем, автоматизации процессов и CI/CD. Веду проекты от архитектуры до внедрения, менторю команду, активно делюсь опытом.
                        </p>
                    </motion.section>

                    {/* Stack Section */}
                    <motion.section custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
                        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-300 inline-block">Технологический стек</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-blue-100">
                            {stacks.map((stack, idx) => (
                                <li key={idx}>
                                    <span className="font-bold">{stack.category}:</span>
                                    <ul className="list-disc ml-6 mt-1 space-y-1">
                                        {stack.technologies.map((tech, tIdx) => (
                                            <motion.li
                                                key={tIdx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true, amount: 0.6 }}
                                                transition={{ duration: 0.4, delay: 0 }}
                                            >
                                                {tech}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </motion.section>

                    {/* Timeline Section */}
                    <motion.section custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
                        <h2 className="text-3xl font-semibold mb-2 border-b-2 border-blue-300 inline-block">Путь</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-normal text-blue-200 mt-2">
                                Стаж в IT: <span className="font-semibold">{experienceString}</span>🎉
                            </h3>
                        </div>
                        <ol className="relative border-l-4 border-blue-400 ml-4 space-y-8">
                            {timeline.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative pl-6"
                                >
                                    <span className="absolute -left-6 top-0 w-4 h-4 bg-blue-400 rounded-full" />
                                    <time className="text-blue-200 font-bold block mb-1">{item.year}</time>
                                    <p className="text-blue-100 leading-snug">{item.text}</p>
                                </motion.li>
                            ))}
                        </ol>
                    </motion.section>

                    {/* Achievements Section */}
                    <motion.section custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
                        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-300 inline-block">Достижения</h2>
                        <ul className="list-disc ml-6 text-blue-100 space-y-1">
                            {achievements.map((ach, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                >
                                    {ach}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.section>

                    <h2 className="text-3xl font-semibold mb-6 border-b-2 border-blue-300 inline-block">Сертификаты, дипломы и награды</h2>
                    {/* Certificates Section */}
                    <CertificatesSection
                        title="Профессиональная деятельность"
                        certificates={certificatesWork}
                        setActiveImage={setActiveImage}
                        sectionVariants={sectionVariants}
                        custom={4}
                    />

                    <CertificatesSection
                        title="Студенчество"
                        certificates={certificatesUniversity}
                        setActiveImage={setActiveImage}
                        sectionVariants={sectionVariants}
                        custom={5}
                    />

                    <CertificatesSection
                        title="Школа"
                        certificates={certificatesSchool}
                        setActiveImage={setActiveImage}
                        sectionVariants={sectionVariants}
                        custom={6}
                    />

                    {/* Contacts Section */}
                    <motion.section custom={5} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="text-center">
                        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-300 inline-block">Контакты</h2>
                        <div className="flex flex-col items-center space-y-2 text-blue-100">
                            <a href="mailto:leonid.pavlov@example.com" className="hover:text-blue-200">mail@lpavlov.ru</a>
                            <a href="https://github.com/Zefirrat" target="_blank" className="hover:text-blue-200">github.com/Zefirrat</a>
                            <a href="https://stackoverflow.com/users/4905704/leonid-pavlov" target="_blank" className="hover:text-blue-200">StackOverflow</a>
                            <a href="https://t.me/itSpecTricks" target="_blank" className="hover:text-blue-200">Telegram-канал</a>
                            <a href="https://t.me/Zefirrat" target="_blank" className="hover:text-blue-200">@Zefirrat</a>
                        </div>
                    </motion.section>
                </div>

                {/* Image Modal */}
                <AnimatePresence>
                    {activeImage && (
                        <Dialog static open onClose={() => setActiveImage(null)} className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
                            <Dialog.Panel as={motion.div} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
                                <img src={activeImage.src} alt={activeImage.title} className="max-w-lg max-h-[80vh] rounded-lg shadow-2xl" />
                            </Dialog.Panel>
                        </Dialog>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}