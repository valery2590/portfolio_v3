export type Language = 'es' | 'en' | 'it';

export interface Translations {
	nav: {
		home: string;
		about: string;
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
	footer: {
		copyright: string;
	};
}

export const translations: Record<Language, Translations> = {
	es: {
		nav: {
			home: 'Inicio',
			about: 'Sobre mí',
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
			paragraph1: 'Soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras. Me especializo en desarrollo full stack, creando aplicaciones web modernas y eficientes.',
			paragraph2: 'Mi objetivo es combinar diseño atractivo con funcionalidad robusta, siempre buscando las mejores prácticas y las tecnologías más actuales para ofrecer experiencias excepcionales.',
			projectsCompleted: 'Proyectos Completados',
			yearsExperience: 'Años de Experiencia',
			happyClients: 'Clientes Satisfechos',
		},
		projects: {
			title: 'Proyectos',
			project1: {
				title: 'Proyecto 1',
				description: 'Una aplicación web moderna con funcionalidades avanzadas y diseño responsivo.',
			},
			project2: {
				title: 'Proyecto 2',
				description: 'Plataforma de e-commerce con sistema de pagos integrado y panel de administración.',
			},
			project3: {
				title: 'Proyecto 3',
				description: 'Aplicación móvil para gestión de tareas con sincronización en tiempo real.',
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
		footer: {
			copyright: '© 2026 Valery Figueroa. Todos los derechos reservados.',
		},
	},
	en: {
		nav: {
			home: 'Home',
			about: 'About',
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
			paragraph1: 'I am a developer passionate about technology and creating innovative solutions. I specialize in full stack development, creating modern and efficient web applications.',
			paragraph2: 'My goal is to combine attractive design with robust functionality, always seeking best practices and the latest technologies to deliver exceptional experiences.',
			projectsCompleted: 'Completed Projects',
			yearsExperience: 'Years of Experience',
			happyClients: 'Happy Clients',
		},
		projects: {
			title: 'Projects',
			project1: {
				title: 'Project 1',
				description: 'A modern web application with advanced features and responsive design.',
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
		footer: {
			copyright: '© 2026 Valery Figueroa. All rights reserved.',
		},
	},
	it: {
		nav: {
			home: 'Home',
			about: 'Chi Sono',
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
			paragraph1: 'Sono uno sviluppatore appassionato di tecnologia e creazione di soluzioni innovative. Mi specializzo nello sviluppo full stack, creando applicazioni web moderne ed efficienti.',
			paragraph2: 'Il mio obiettivo è combinare un design accattivante con funzionalità robuste, cercando sempre le migliori pratiche e le tecnologie più attuali per offrire esperienze eccezionali.',
			projectsCompleted: 'Progetti Completati',
			yearsExperience: 'Anni di Esperienza',
			happyClients: 'Clienti Soddisfatti',
		},
		projects: {
			title: 'Progetti',
			project1: {
				title: 'Progetto 1',
				description: 'Un\'applicazione web moderna con funzionalità avanzate e design responsive.',
			},
			project2: {
				title: 'Progetto 2',
				description: 'Piattaforma e-commerce con sistema di pagamento integrato e pannello di amministrazione.',
			},
			project3: {
				title: 'Progetto 3',
				description: 'Applicazione mobile per la gestione delle attività con sincronizzazione in tempo reale.',
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
		footer: {
			copyright: '© 2026 Valery Figueroa. Tutti i diritti riservati.',
		},
	},
};

