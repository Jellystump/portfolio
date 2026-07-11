import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";

i18n.use(initReactI18next).init({
    resources:{
        en: {
            translation:{
                navbar: { about: "About me", projects: "Projects", contact: "Contact"},
                about:{ 
                    aboutPitch1: "I am a",
                    aboutPitch2: "Computer Science Engineer",
                    aboutPitch3: "focused on software efficiency, backend optimization, and cross-platform mobile architectures.",
                    technicalCore: "Technical Core",
                    technicalCoreDescription: "Engineered around structured data pipelines, state management, and real-time execution trees.",
                    availabilityInfo: "Availability & Info",
                    availabilityInfoEnglish: "Language: English (Fluent, C1)",
                    availabilityInfoSpanish: "Spanish (Native)",
                    availabilityInfoTimezone: "Timezone: GMT-4 (LATAM / US East Align)",
                    availabilityInfoAvaibility: "Availability: Remote / B2B Contractor",
                    remoteInfrastructureSLA: "Remote Infrastructure SLA",
                    remoteInfrastructureSLADesc1: "Operating with a fully redundant setup to ensure uninterrupted deployment and communication. Powered by a high-speed",
                    remoteInfrastructureSLADescSpeed: "400 Mbps fiber optics link",
                    remoteInfrastructureSLADesc2: "and dedicated, independent auxiliary power backups providing",
                    remoteInfrastructureSLADesc3: "100% remote uptime",
                    remoteInfrastructureSLADesc4: "during core operational hours.",
                },
                projects:{
                    signmazeDesc: "AI-powered web solution designed for sign language translation and interactive learning. Built with React and Node.js, leveraging TensorFlow to achieve visual recognition.",
                    floraIDDesc: "Mobile app for real-time botanical identification and health diagnosis utilizing React Native, Python, and OpenCV. Features automated image processing pipelines powered by TensorFlow to deliver instant plant disease analysis.",
                },
                contact:{
                    name: "Name",
                    email: "Email",
                    message: "Message",
                    submit: "Submit"
                }
            },
        },
        es: {
            translation:{
                navbar: { about: "Acerca de mí", projects: "Proyectos", contact: "Contacto"},
                about:{ 
                    aboutPitch1: "Soy",
                    aboutPitch2: "Ingeniero en Informática ",
                    aboutPitch3: "y me especializo en la eficiencia del software, la optimización del backend y las arquitecturas móviles multiplataforma.",
                    technicalCore: "Núcleo técnico",
                    technicalCoreDescription: "Diseñado en torno a flujos de datos estructurados, gestión de estados y árboles de ejecución en tiempo real.",
                    availabilityInfo: "Disponibilidad e información",
                    availabilityInfoEnglish: "Idioma: inglés (nivel avanzado, C1)",
                    availabilityInfoSpanish: "Español (Nativo)",
                    availabilityInfoTimezone: "Zona horaria: GMT-4 (América Latina / Costa Este de EE. UU.)",
                    availabilityInfoAvaibility: "Disponibilidad: Remoto / Colaborador B2B",
                    remoteInfrastructureSLA: "Acuerdo de nivel de servicio de infraestructura remota",
                    remoteInfrastructureSLADesc1: "Funciona con una configuración totalmente redundante para garantizar un despliegue y una comunicación ininterrumpidos. Con una conexión de alta velocidad de ",
                    remoteInfrastructureSLADescSpeed: "fibra óptica de 400 Mbps ",
                    remoteInfrastructureSLADesc2: "y sistemas de alimentación de emergencia independientes y específicos que garantizan un tiempo de ",
                    remoteInfrastructureSLADesc3: "actividad remoto del 100 %",
                    remoteInfrastructureSLADesc4: "durante las horas operativas principales.",
                },
                projects:{
                    signmazeDesc: "Solución web basada en inteligencia artificial diseñada para la traducción de la lengua de signos y el aprendizaje interactivo. Desarrollada con React y Node.js, y que utiliza TensorFlow para llevar a cabo el reconocimiento visual.",
                    floraIDDesc: "Aplicación móvil para la identificación botánica y el diagnóstico fitosanitario en tiempo real, desarrollada con React Native, Python y OpenCV. Incorpora flujos de procesamiento de imágenes automatizados basados en TensorFlow para ofrecer un análisis instantáneo de las enfermedades de las plantas.",
                },
                contact:{
                    name: "Nombre",
                    email: "Correo Electrónico",
                    message: "Mensaje",
                    submit: "Enviar"
                }
            },
        },
        jp: {
            translation:{
                navbar: { about: "プロフィール", projects: "プロジェクト", contact: "お問い合わせ"},
                about:{ 
                    aboutPitch1: "I am a",
                    aboutPitch2: "Computer Science Engineer",
                    aboutPitch3: "focused on software efficiency, backend optimization, and cross-platform mobile architectures.",
                    technicalCore: "Technical Core",
                    technicalCoreDescription: "Engineered around structured data pipelines, state management, and real-time execution trees.",
                    availabilityInfo: "Availability & Info",
                    availabilityInfoEnglish: "Language: English (Fluent, C1)",
                    availabilityInfoSpanish: "Spanish (Native)",
                    availabilityInfoTimezone: "Timezone: GMT-4 (LATAM / US East Align)",
                    availabilityInfoAvaibility: "Availability: Remote / B2B Contractor",
                    remoteInfrastructureSLA: "Remote Infrastructure SLA",
                    remoteInfrastructureSLADesc1: "Operating with a fully redundant setup to ensure uninterrupted deployment and communication. Powered by a high-speed",
                    remoteInfrastructureSLADescSpeed: "400 Mbps fiber optics link",
                    remoteInfrastructureSLADesc2: "and dedicated, independent auxiliary power backups providing",
                    remoteInfrastructureSLADesc3: "100% remote uptime",
                    remoteInfrastructureSLADesc4: "during core operational hours.",
                },
                projects:{
                    signmazeDesc: "AI-powered web solution designed for sign language translation and interactive learning. Built with React and Node.js, leveraging TensorFlow to achieve visual recognition.",
                    floraIDDesc: "Mobile app for real-time botanical identification and health diagnosis utilizing React Native, Python, and OpenCV. Features automated image processing pipelines powered by TensorFlow to deliver instant plant disease analysis.",
                },
                contact:{
                    name: "Name",
                    email: "Email",
                    message: "Message",
                    submit: "Submit"
                }
            },
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false},
});

export default i18n;