export type Language = 'es' | 'en' | 'it';

export interface Translations {
	nav: {
		home: string;
		about: string;
		integrations: string;
		projects: string;
		skills: string;
		contact: string;
	};
	hero: {
		greeting: string;
		name: string;
		title: string;
		description: string;
		viewProjects: string;
		contact: string;
	};
	about: {
		title: string;
		paragraph1: string;
		paragraph2: string;
		projectsCompleted: string;
		yearsExperience: string;
		happyClients: string;
	};
	projects: {
		title: string;
		project1: {
			title: string;
			description: string;
		};
		project2: {
			title: string;
			description: string;
		};
		project3: {
			title: string;
			description: string;
		};
		project4: {
			title: string;
			description: string;
		};
	};
	skills: {
		title: string;
		frontend: string;
		backend: string;
		tools: string;
	};
	contact: {
		title: string;
		subtitle: string;
		description: string;
		name: string;
		email: string;
		message: string;
		sendMessage: string;
		successMessage: string;
	};
	integrations: {
		title: string;
		subtitle: string;
		api: string;
		apiDesc: string;
		whatsapp: string;
		whatsappDesc: string;
		crm: string;
		crmDesc: string;
		ecommerce: string;
		ecommerceDesc: string;
		listTitle: string;
	};
	footer: {
		copyright: string;
	};
}

export const translations: Record<Language, Translations> = {
	es: {
		nav: {
			home: 'Inicio',
			about: 'Sobre mí',
			integrations: 'Integraciones',
			projects: 'Proyectos',
			skills: 'Habilidades',
			contact: 'Contacto',
		},
		hero: {
			greeting: 'Hola, soy',
			name: 'Valery',
			title: 'Desarrollador Full Stack',
			description: 'Apasionado por crear soluciones digitales innovadoras y experiencias de usuario excepcionales.',
			viewProjects: 'Ver Proyectos',
			contact: 'Contactar',
		},
		about: {
			title: 'Sobre Mí',
			paragraph1: 'LLevo ya varios años siendo Desarrollador de Software. Amo lo que hago. Me encanta encontrar soluciones a cualquier situación que lo requiera.',
			paragraph2: 'Uno de mis puntos fuertes son las integraciones entre muchas aplicaciones. He logrado realizar muchas de ellas, tanto en el frontend como en el backend.',
			projectsCompleted: 'Proyectos Completados',
			yearsExperience: 'Años de Experiencia',
			happyClients: 'Clientes Satisfechos',
		},
		projects: {
			title: 'Proyectos',
			project1: {
				title: 'Portfolio con Next JS',
				description: 'Portfolio personal creado con Next JS y Tailwind CSS y desplegado en github pages',
			},
			project2: {
				title: 'knoU',
				description: 'Aplicación de citas creada con React y Express y desplegada en Netlify',
			},
			project3: {
				title: 'Image seeker',
				description: 'Aplicación para buscar imagenes gratuitas con API de pixabay',
			},
			project4: {
				title: 'Proyecto 4',
				description: 'Dashboard analítico con visualizaciones interactivas y reportes personalizados.',
			},
		},
		skills: {
			title: 'Habilidades',
			frontend: 'Frontend',
			backend: 'Backend',
			tools: 'Herramientas',
		},
		contact: {
			title: 'Contacto',
			subtitle: '¿Tienes un proyecto en mente?',
			description: 'Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.',
			name: 'Nombre',
			email: 'Email',
			message: 'Mensaje',
			sendMessage: 'Enviar Mensaje',
			successMessage: '¡Gracias por tu mensaje! Te contactaré pronto.',
		},
		integrations: {
			title: 'Integraciones',
			subtitle: 'Integraciones entre CRM, E-commerce, WhatsApp y más',
			api: 'APIs REST & GraphQL',
			apiDesc: 'Integración de múltiples APIs para sincronización de datos en tiempo real',
			whatsapp: 'WhatsApp Business API',
			whatsappDesc: 'Automatización de mensajería y atención al cliente',
			crm: 'Sistemas CRM',
			crmDesc: 'Integración con Salesforce, HubSpot y otras plataformas CRM',
			ecommerce: 'E-commerce',
			ecommerceDesc: 'Conexión con Shopify, WooCommerce y plataformas de pago',
			listTitle: 'Listado de integraciones que he realizado',
		},
		footer: {
			copyright: '© 2026 Valery Figueroa. Todos los derechos reservados.',
		},
	},
	en: {
		nav: {
			home: 'Home',
			about: 'About',
			integrations: 'Integrations',
			projects: 'Projects',
			skills: 'Skills',
			contact: 'Contact',
		},
		hero: {
			greeting: 'Hi, I am',
			name: 'Valery',
			title: 'Full Stack Developer',
			description: 'Passionate about creating innovative digital solutions and exceptional user experiences.',
			viewProjects: 'View Projects',
			contact: 'Contact',
		},
		about: {
			title: 'About Me',
			paragraph1: 'I have been a software developer for several years. I love what I do. I love finding solutions to any situation that requires it.',
			paragraph2: 'One of my strengths is the integrations between many applications. I have achieved many of them, both in the frontend and the backend.',
			projectsCompleted: 'Completed Projects',
			yearsExperience: 'Years of Experience',
			happyClients: 'Happy Clients',
		},
		projects: {
			title: 'Projects',
			project1: {
				title: 'Portfolio with Next JS',
				description: 'Personal portfolio created with Next JS and Tailwind CSS and deployed on github pages',
			},
			project2: {
				title: 'Project 2',
				description: 'E-commerce platform with integrated payment system and admin panel.',
			},
			project3: {
				title: 'Project 3',
				description: 'Mobile application for task management with real-time synchronization.',
			},
			project4: {
				title: 'Project 4',
				description: 'Analytical dashboard with interactive visualizations and custom reports.',
			},
		},
		skills: {
			title: 'Skills',
			frontend: 'Frontend',
			backend: 'Backend',
			tools: 'Tools',
		},
		contact: {
			title: 'Contact',
			subtitle: 'Have a project in mind?',
			description: 'I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
			name: 'Name',
			email: 'Email',
			message: 'Message',
			sendMessage: 'Send Message',
			successMessage: 'Thank you for your message! I will contact you soon.',
		},
		integrations: {
			title: 'Integrations',
			subtitle: 'Integrations between CRM, E-commerce, WhatsApp and more',
			api: 'REST & GraphQL APIs',
			apiDesc: 'Integration of multiple APIs for real-time data synchronization',
			whatsapp: 'WhatsApp Business API',
			whatsappDesc: 'Messaging automation and customer service',
			crm: 'CRM Systems',
			crmDesc: 'Integration with Salesforce, HubSpot and other CRM platforms',
			ecommerce: 'E-commerce',
			ecommerceDesc: 'Connection with Shopify, WooCommerce and payment platforms',
			listTitle: 'List of integrations I have worked on',
		},
		footer: {
			copyright: '© 2026 Valery Figueroa. All rights reserved.',
		},
	},
	it: {
		nav: {
			home: 'Home',
			about: 'Chi Sono',
			integrations: 'Integrazioni',
			projects: 'Progetti',
			skills: 'Competenze',
			contact: 'Contatto',
		},
		hero: {
			greeting: 'Ciao, sono',
			name: 'Valery',
			title: 'Sviluppatore Full Stack',
			description: 'Appassionato di creare soluzioni digitali innovative ed esperienze utente eccezionali.',
			viewProjects: 'Vedi Progetti',
			contact: 'Contatta',
		},
		about: {
			title: 'Chi Sono',
			paragraph1: 'Ho lavorato come sviluppatore software per diversi anni. Amo ciò che faccio. Amo trovare soluzioni per qualsiasi situazione che lo richiede.',
			paragraph2: 'Uno dei miei punti forti è l\'integrazione tra molte applicazioni. Ho realizzato molte di esse, sia nel frontend che nel backend.',
			projectsCompleted: 'Progetti Completati',
			yearsExperience: 'Anni di Esperienza',
			happyClients: 'Clienti Soddisfatti',
		},
		projects: {
			title: 'Progetti',
			project1: {
				title: 'Portfolio con Next JS',
				description: 'Portfolio personale creato con Next JS e Tailwind CSS e deployato su github pages',
			},
			project2: {
				title: 'knoU',
				description: 'Applicazione di date matching creata con React e Express e deployata su Netlify',
			},
			project3: {
				title: 'Image seeker',
				description: 'Applicazione per la ricerca di immagini gratuite con API di pixabay',
			},
			project4: {
				title: 'Progetto 4',
				description: 'Dashboard analitico con visualizzazioni interattive e report personalizzati.',
			},
		},
		skills: {
			title: 'Competenze',
			frontend: 'Frontend',
			backend: 'Backend',
			tools: 'Strumenti',
		},
		contact: {
			title: 'Contatto',
			subtitle: 'Hai un progetto in mente?',
			description: 'Sono sempre aperto a discutere nuovi progetti, idee creative o opportunità per far parte delle tue visioni.',
			name: 'Nome',
			email: 'Email',
			message: 'Messaggio',
			sendMessage: 'Invia Messaggio',
			successMessage: 'Grazie per il tuo messaggio! Ti contatterò presto.',
		},
		integrations: {
			title: 'Integrazioni',
			subtitle: 'Integrazioni tra CRM, E-commerce, WhatsApp e altro',
			api: 'API REST & GraphQL',
			apiDesc: 'Integrazione di multiple API per sincronizzazione dati in tempo reale',
			whatsapp: 'WhatsApp Business API',
			whatsappDesc: 'Automazione messaggistica e assistenza clienti',
			crm: 'Sistemi CRM',
			crmDesc: 'Integrazione con Salesforce, HubSpot e altre piattaforme CRM',
			ecommerce: 'E-commerce',
			ecommerceDesc: 'Connessione con Shopify, WooCommerce e piattaforme di pagamento',
			listTitle: 'Lista di integrazioni che ho lavorato',
		},
		footer: {
			copyright: '© 2026 Valery Figueroa. Tutti i diritti riservati.',
		},
	},
};

