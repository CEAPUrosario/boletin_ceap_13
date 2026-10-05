// ============================================================
// 1. CONFIGURACIÓN Y BASE DE DATOS
// ============================================================

const INSCRIPCION_LINK = "https://appsweb01.urosario.edu.co/cursos_profesorales/";

const nombreMeses = {
    jan: "Enero", feb: "Febrero", mar: "Marzo",  apr: "Abril",
    may: "Mayo",  jun: "Junio",   jul: "Julio",   aug: "Agosto",
    sep: "Septiembre", oct: "Octubre", nov: "Noviembre", dec: "Diciembre"
};

// ============================================================
// CURSOS
// ============================================================
const cursosDb = {
    oct1: {
        nombre: "Explorar el conocimiento: IA para Mapeo y Brechas de Investigación",
        modalidad: "Acceso Remoto",
        fechas: "13 al 20 de octubre de 2026",
        start: "20261013T080000",
        end:   "20261020T080000",
        reseña: "Fortalecer las competencias para la búsqueda, análisis y mapeo de información científica y tecnológica mediante herramientas de inteligencia artificial, webscraping y bases de datos, orientadas a la identificación de brechas de conocimiento y oportunidades de investigación."
    },
    oct2: {
        nombre: "Enseñar con Pasión = Aprender con Motivación",
        modalidad: "Presencial",
        fechas: "14 de octubre de 2026",
        start: "20261014T080000",
        end:   "20261014T080000",
        reseña: "En este curso el profesor podrá comprender los mecanismos a través de los cuales funciona la motivación y cómo puede utilizarlos para incentivarse a sí mismo y de esta manera promover un clima estimulante en el aula que favorezca un aprendizaje entusiasta."
    },
    oct3: {
        nombre: "MOOC IA Generativa Para la Innovación Docente",
        modalidad: "Virtual",
        fechas: "15 de octubre al 11 de noviembre de 2026",
        start: "20261015T080000",
        end:   "20261111T080000",
        reseña: "Curso tipo MOOC 100 por ciento virtual nivel Innovador, a desarrollarse en la plataforma edX de URosarioX. Escenario que potencia las competencias del profesorado universitario para apropiar la IA Gen en sus prácticas educativas de manera pedagógica, crítica y segura. Mediante un enfoque aplicado, se explica como utilizar la IA como apoyo al diseño instruccional, establecer un método de evaluaciones a partir de evidencias de proceso y trazabilidad del aprendizaje con criterios."
    },
    oct4: {
        nombre: "Creatividad y Bienestar en el Aula",
        modalidad: "Acceso Remoto",
        fechas: "15 al 25 de octubre de 2026",
        start: "20261015T080000",
        end:   "20261025T080000",
        reseña: "Este curso propone la creatividad como una vía para el bienestar en el aula. Parte de la idea de que enseñar y aprender son experiencias atravesadas por lo emocional, y que el aula puede convertirse en un espacio de cuidado, expresión y regulación cuando se habilitan lenguajes distintos como los artísticos. A través de experiencias creativas sencillas y transferibles, el taller invita a los docentes a explorar estrategias que favorecen la conexión consigo mismos y con sus estudiantes."
    },
    oct5: {
        nombre: "Atención de la Emoción",
        modalidad: "Presencial",
        fechas: "21 al 28 de octubre de 2026",
        start: "20261021T080000",
        end:   "20261028T080000",
        reseña: "Este es un espacio dirigido a los docentes para aprender sobre el abordaje de la conducta suicida como posible primer respondiente ante situaciones de alteración emocional e ideas de muerte, identificar factores de riesgo y hacer una referencia a entidades internas y externas pertinentes. Implementar un curso de desarrollo profesoral que profundice acerca de las estrategias requeridas para el abordaje inicial de la conducta suicida."
    },
    oct6: {
        nombre: "Reconocimiento de la Inclusión Como Valor Educativo: Estrategias Educativas Transformadoras",
        modalidad: "Virtual",
        fechas: "23 de octubre al 27 de noviembre de 2026",
        start: "20261023T080000",
        end:   "20261127T080000",
        reseña: "Este curso ofrece espacios formativos, sensibles y de concientización que permiten ampliar la comprensión de la discapacidad, la educación inclusiva y su abordaje en el entorno académico. El propósito es formar docentes rosaristas que propicien la participación socio-ocupacional a estudiantes con discapacidad y neurodivergencias, eliminando barreras y promoviendo condiciones equitativas de aprendizaje."
    },
    nov1: {
        nombre: "Nooc: Competencias Para la Gestión de Herramientas en Aulas Virtuales",
        modalidad: "Virtual",
        fechas: "04 al 25 de noviembre de 2026",
        start: "20261104T080000",
        end:   "20261125T080000",
        reseña: "Como parte del Modelo de Formación de Competencias Digitales para la Docencia, en este curso usted aprenderá a usar con enfoque pedagógico diversos servicios y herramientas de Moodle en nivel intermedio, para orientarlos hacia la creación de experiencias de aprendizaje significativas a través del aula virtual. La ruta de aprendizaje es de autoselección e incluye un acompañamiento tecnopedagógico como apoyo para potenciar los conocimientos de los participantes que gestionan entornos educativos."
    },
    nov2: {
        nombre: "Ética Transversal: La Ética en el Aula y la Ética en la Docencia",
        modalidad: "Blended",
        fechas: "06 de noviembre al 08 de diciembre de 2026",
        start: "20261106T080000",
        end:   "20261208T080000",
        reseña: "El Curso de desarrollo profesoral en ética transversal, abordará temas de ética básica, ética profesional, estrategias y pedagogías de enseñanza, así como criterios y mecanismos de evaluación ética. A lo largo del curso se espera que los participantes logren formular, en aplicación de lo estudiado, una estrategia de formación ética para desarrollar al interior de las asignaturas que orientan."
    },
    nov3: {
        nombre: "Mooc E-Moderación Para Tutores Virtuales",
        modalidad: "Virtual",
        fechas: "10 al 30 de noviembre de 2026",
        start: "20261110T080000",
        end:   "20261130T080000",
        reseña: "Este curso es virtual y de autoformación, con una duración de 12 horas, diseñado para fortalecer las competencias clave en la facilitación de entornos de aprendizaje en línea, iniciando con una exploración profunda del concepto de e-moderación, sus fundamentos teóricos, y el papel transformador del tutor virtual, a través de estrategias centradas en el cómo, el participante aprenderá a diseñar, facilitar y dinamizar actividades virtuales, optimizando el uso de herramientas comunicativas."
    },
    nov4: {
        nombre: "Mooc Storytelling: Comunica tus Ideas con Impacto",
        modalidad: "Virtual",
        fechas: "10 al 30 de noviembre de 2026",
        start: "20261110T080000",
        end:   "20261130T080000",
        reseña: "Este curso es virtual y de autoformación, con una duración de 24 horas, propone el storytelling como una herramienta pedagógica y estratégica que potencia la enseñanza, la innovación educativa y las competencias comunicativas en entornos digitales para el aprendizaje. A través del arte de narrar, el participante aprenderá a estructurar mensajes con propósito, generar conexión emocional con su audiencia y comunicar con claridad."
    },
    dec1: {
        nombre: "Diversidad Sexual y de Género en el Aula",
        modalidad: "Acceso Remoto",
        fechas: "09 al 11 de diciembre de 2026",
        start: "20261209T080000",
        end:   "20261211T080000",
        reseña: "La creciente visibilidad de disidencias sexo-genéricas y personas LGBTIQ+ en espacios educativos ha significado, con frecuencia, desafíos a la labor docente que demandan la adquisición de lenguajes y herramientas que permitan abordar prácticas discriminatorias en razón de la orientación sexual y la identidad de género. Por ello, este curso brinda elementos conceptuales y prácticos, orientados a la construcción de aulas más inclusivas y respetuosas de la diversidad sexual y de géneros."
    },
};

// ============================================================
// EDICIONES ANTERIORES
// ============================================================
const edicionesDb = {
    "2024": [
        { num: 1,  mes: "Mayo",       url: "https://view.genially.com/65d609fc02fc23001485c6d3" },
        { num: 2,  mes: "Julio",      url: "https://view.genially.com/66576e1b83017e001439b92a" },
        { num: 3,  mes: "Septiembre", url: "https://view.genially.com/66576e24e13ee80015910065" },
        { num: 4,  mes: "Noviembre",  url: "https://view.genially.com/66ec71c33a7e60b9c0f1dc85" }
    ],
    "2025": [
        { num: 5,  mes: "Marzo",      url: "https://view.genially.com/66ec71ba3b8ea7c3778e3ba1" },
        { num: 6,  mes: "Mayo",       url: "https://view.genially.com/66ec71bd3a7e60b9c0f1d731" },
        { num: 7,  mes: "Julio",      url: "https://view.genially.com/687a7017a53aa8a1fa884de2" },
        { num: 8,  mes: "Septiembre", url: "https://view.genially.com/687a7628a53aa8a1fa8c605f" },
        { num: 9,  mes: "Diciembre",  url: "https://view.genially.com/687a7639e1934311030cd849" }
    ],
    "2026": [
        { num: 10, mes: "Febrero", url: "https://view.genially.com/687a76de92b3a499009ea61e" },
        { num: 11, mes: "Abril",   url: "https://ceapurosario.github.io/boletin_ceap/" },
        { num: 12, mes: "Julio",   url: "https://ceapurosario.github.io/boletin_ceap_13/" }
    ]
};

// ============================================================
// 2. ELEMENTOS DEL DOM
// ============================================================

const navButtons        = document.querySelectorAll('.nav-btn');
const sections          = document.querySelectorAll('.section');
const featureCards      = document.querySelectorAll('.feature-card');
const helpModal         = document.getElementById('helpModal');
const closeModal        = document.getElementById('closeModal');
const modalTitle        = document.getElementById('modalTitle');
const modalBody         = document.getElementById('modalBodyText');
const navIndicator      = document.querySelector('.nav-indicator');
const hamburgerBtn      = document.getElementById('hamburgerBtn');
const navContainer      = document.querySelector('.nav-container');
const darkModeToggle    = document.getElementById('darkModeToggle');
const searchToggle      = document.getElementById('searchToggle');
const searchBarContainer = document.getElementById('searchBarContainer');
const searchInput       = document.getElementById('searchInput');
const closeSearch       = document.getElementById('closeSearch');
const body              = document.body;

// ============================================================
// 3. FUNCIONES DE CALENDARIO
// ============================================================

function getGoogleLink(c) {
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("UR: " + c.nombre)}&dates=${c.start}/${c.end}&details=${encodeURIComponent(c.reseña + "\n\nInscripciones: " + INSCRIPCION_LINK)}&location=${encodeURIComponent(c.modalidad)}`;
}

function getOutlookLink(c) {
    return `https://outlook.office.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent("UR: " + c.nombre)}&startdt=${c.start}&enddt=${c.end}&body=${encodeURIComponent(c.reseña + "\n\nInscripciones: " + INSCRIPCION_LINK)}&location=${encodeURIComponent(c.modalidad)}`;
}

function getICalLink(c) {
    const iCalContent = [
        "BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT",
        `DTSTART:${c.start}`, `DTEND:${c.end}`,
        `SUMMARY:UR: ${c.nombre}`,
        `DESCRIPTION:${c.reseña}\\n\\nInscripciones: ${INSCRIPCION_LINK}`,
        `LOCATION:${c.modalidad}`, "END:VEVENT", "END:VCALENDAR"
    ].join("\n");
    const blob = new Blob([iCalContent], { type: 'text/calendar;charset=utf-8' });
    return URL.createObjectURL(blob);
}

// ============================================================
// 4. FUNCIONES DE UI GENERAL
// ============================================================

function moveIndicator(btn) {
    if (!navIndicator) return;
    const rect    = btn.getBoundingClientRect();
    const navRect = btn.parentElement.getBoundingClientRect();
    navIndicator.style.width = `${rect.width}px`;
    navIndicator.style.left  = `${rect.left - navRect.left}px`;
}

function updateProgressBar() {
    const scrollProgress = document.getElementById('scrollProgress');
    if (!scrollProgress) return;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollProgress.style.width = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 + "%" : "0%";
}

const revealElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// ============================================================
// 5. NAVEGACIÓN
// ============================================================

function setActiveSection(id) {
    const targetSection = document.getElementById(id);
    if (!targetSection) return;
    sections.forEach(s => s.classList.remove('active', 'fade-in-up'));
    targetSection.classList.add('active', 'fade-in-up');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === id) {
            btn.classList.add('active');
            moveIndicator(btn);
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(revealElements, 100);
}

function inyectarFlechasNavegacion() {
    const idsSecciones = Array.from(document.querySelectorAll('main .section'))
                              .map(s => s.id)
                              .filter(id => id !== 'inicio');

    idsSecciones.forEach((id, index) => {
        const section = document.getElementById(id);
        if (!section) return;

        const existing = section.querySelector('.nav-arrows-container');
        if (existing) existing.remove();

        const container = document.createElement('div');
        container.className = 'nav-arrows-container reveal';

        const prevId     = index === 0 ? 'inicio' : idsSecciones[index - 1];
        const navBtnPrev = document.querySelector(`.nav-btn[data-section="${prevId}"]`);
        const btnPrev    = document.createElement('button');
        btnPrev.className = 'arrow-btn prev';
        btnPrev.innerHTML = `← ${navBtnPrev ? navBtnPrev.innerText : 'Atrás'}`;
        btnPrev.onclick   = () => setActiveSection(prevId);
        container.appendChild(btnPrev);

        if (index < idsSecciones.length - 1) {
            const nextId     = idsSecciones[index + 1];
            const navBtnNext = document.querySelector(`.nav-btn[data-section="${nextId}"]`);
            const btnNext    = document.createElement('button');
            btnNext.className = 'arrow-btn next';
            btnNext.innerHTML = `${navBtnNext ? navBtnNext.innerText : 'Siguiente'} →`;
            btnNext.onclick   = () => setActiveSection(nextId);
            container.appendChild(btnNext);
        }

        const layout = section.querySelector('.magazine-layout') || section;
        layout.appendChild(container);
    });
}

// ============================================================
// 6. BÚSQUEDA
// ============================================================

function filtrarContenido(termino) {
    featureCards.forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(termino) ? '' : 'none';
    });
    document.querySelectorAll('.course-row-sidebar').forEach(fila => {
        fila.style.display = fila.innerText.toLowerCase().includes(termino) ? '' : 'none';
    });
}

if (searchToggle) {
    searchToggle.addEventListener('click', () => {
        searchBarContainer.classList.toggle('search-bar-hidden');
        if (!searchBarContainer.classList.contains('search-bar-hidden')) searchInput.focus();
    });
}

if (closeSearch) {
    closeSearch.addEventListener('click', () => {
        searchBarContainer.classList.add('search-bar-hidden');
        searchInput.value = '';
        filtrarContenido('');
        searchToggle.focus();
    });
}

if (searchInput) {
    searchInput.addEventListener('input', e => filtrarContenido(e.target.value.toLowerCase()));
}

// ============================================================
// 7. MODO OSCURO Y ACCESIBILIDAD
// ============================================================

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
}

const htmlElement = document.documentElement;
const btnIncrease = document.getElementById('increaseText');
const btnDecrease = document.getElementById('decreaseText');
const btnContrast = document.getElementById('highContrastToggle');
let fontLevel = 1;

function updateFontSize() {
    htmlElement.classList.remove('font-sm', 'font-md', 'font-lg', 'font-xl');
    htmlElement.classList.add(['font-sm', 'font-md', 'font-lg', 'font-xl'][fontLevel]);
}

if (btnIncrease) btnIncrease.addEventListener('click', () => { if (fontLevel < 3) { fontLevel++; updateFontSize(); } });
if (btnDecrease) btnDecrease.addEventListener('click', () => { if (fontLevel > 0) { fontLevel--; updateFontSize(); } });

if (btnContrast) {
    btnContrast.addEventListener('click', () => {
        body.classList.toggle('high-contrast');
        if (body.classList.contains('high-contrast')) body.classList.remove('dark-mode');
    });
}

// ============================================================
// 8. TARJETAS (efecto 3D + navegación al hacer clic)
// ============================================================

featureCards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const inner = card.querySelector('.card-inner-content');
        const rect  = inner.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
        const y = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
        inner.style.transform = `rotateX(${y * -15}deg) rotateY(${x * 15}deg) scale(1.05)`;
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.card-inner-content').style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
    card.addEventListener('click', e => {
        const id = card.getAttribute('data-section');
        if (id) { e.preventDefault(); setActiveSection(id); }
    });
});

navButtons.forEach(btn => btn.addEventListener('click', () => setActiveSection(btn.getAttribute('data-section'))));

// ============================================================
// 9. MODALES Y POPUPS
// ============================================================

function openHelpModal(titulo, html) {
    modalTitle.innerText  = titulo;
    modalBody.innerHTML   = html;
    helpModal.classList.add("open");
}

window.openEventPopup = function(titulo, reseña) {

    if (titulo === 'Ediciones Anteriores') {
        let html = '<div class="archive-master-container" style="padding: 10px;">';
        for (const ano in edicionesDb) {
            html += `
                <div class="archive-year-section" style="margin-bottom: 40px;">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <span style="font-size: 1.8rem; font-weight: 900; color: var(--primary-color); opacity: 0.3;">${ano}</span>
                        <div style="flex: 1; height: 2px; background: linear-gradient(to right, #eee, transparent);"></div>
                    </div>
                    <div class="archive-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px;">` +
                edicionesDb[ano].map(ed => `
                    <a href="${ed.url}" target="_blank" style="text-decoration: none;">
                        <div class="archive-item-card" style="background: #ffffff; border-radius: 20px; padding: 25px; border: 1px solid #f0f0f0; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 4px 15px rgba(0,0,0,0.03); display: flex; flex-direction: column; align-items: center; position: relative; overflow: hidden;">
                            <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--vibrant-accent);"></div>
                            <div style="width: 60px; height: 60px; background: rgba(4, 57, 89, 0.05); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                                <span style="font-size: 1.5rem;">📄</span>
                            </div>
                            <span style="color: var(--primary-color); font-weight: 800; font-size: 1.1rem; margin-bottom: 5px;">Edición #${ed.num}</span>
                            <span style="color: #888; font-size: 0.85rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">${ed.mes}</span>
                            <div style="margin-top: 15px; padding: 6px 15px; background: #f8f9fa; border-radius: 10px; font-size: 0.75rem; font-weight: 700; color: var(--primary-color);">Ver Boletín</div>
                        </div>
                    </a>`).join('') +
                '</div></div>';
        }
        openHelpModal("Visite las ediciones anteriores de nuestro boletín", html + '</div>');

    } else if (titulo === 'Contáctenos') {
        openHelpModal("Contáctenos", `
            <div style="text-align:center; padding:30px;">
                <div style="font-size: 4rem; margin-bottom: 20px; animation: calendarBounce 2s infinite ease-in-out;">📩</div>
                <p style="font-size: 1rem; color: #555; margin-bottom: 25px; line-height: 1.5;">En el CEAP valoramos cada mensaje de nuestros profesores. Comparta con nosotros sus dudas, sugerencias, quejas o felicitaciones a través del siguiente botón.</p>
                <p style="font-size: 1rem; color: #555; margin-bottom: 25px; line-height: 1.5;">Y si tiene un tema o reflexión pedagógica que quiera publicar en el boletín, ¡lo invitamos a escribirnos!</p>
                <a href="mailto:ensenanzayaprendizaje@urosario.edu.co" style="background: var(--primary-color); color: white; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-weight: bold; display: inline-block; box-shadow: 0 5px 15px rgba(4, 57, 89, 0.3); transition: 0.3s;">Enviar correo al CEAP</a>
                <p style="margin-top: 25px; font-size: 0.8rem; color: #999;">Horario de atención: Lunes a viernes de 7:00 a.m. a 4:00 p.m.</p>
            </div>
        `);

    } else {
        openHelpModal(titulo, `<div style="line-height:1.7;">${reseña}</div>`);
    }
};

// ============================================================
// 10. PANEL LATERAL DE CURSOS
// ============================================================

window.abrirDetalleLateral = function(idCurso) {
    const data     = cursosDb[idCurso];
    const content  = document.getElementById('sidePanelContent');
    const sidePanel = document.getElementById('sideDetailPanel');
    if (!data || !content || !sidePanel) return;

    content.innerHTML = `
        <h4 style="color:var(--primary-color); margin-bottom:15px; font-size:1.4rem;">${data.nombre}</h4>
        <p><strong>📍 Modalidad:</strong> ${data.modalidad || 'No especificada'}</p>
        <p><strong>📅 Fechas:</strong> ${data.fechas}</p>
        <hr style="margin:20px 0; border:0; border-top:1px solid #eee;">
        <p style="font-size:0.95rem; line-height:1.6;">${data.reseña}</p>
        <button class="btn-enroll" onclick="window.open('${INSCRIPCION_LINK}', '_blank')" style="margin-top:20px; width:100%;">Inscribirse ahora</button>
        <div style="display:flex; gap:15px; justify-content:center; align-items:center; margin-top:20px;">
            <a href="${getGoogleLink(data)}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" style="width:30px;" alt="Google Calendar"></a>
            <a href="${getOutlookLink(data)}" target="_blank"><img src="https://res.cdn.office.net/assets/mail/pwa/v1/pngs/apple-touch-icon.png" style="width:30px;" alt="Outlook"></a>
            <a href="${getICalLink(data)}" download="${data.nombre}.ics"><img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Apple_Calendar_icon.svg" style="width:30px;" alt="iCal"></a>
        </div>
    `;
    sidePanel.classList.add('active');
    body.style.overflow = 'hidden';
};

window.toggleSidePanel = function(show) {
    const sidePanel = document.getElementById('sideDetailPanel');
    if (!sidePanel) return;
    if (!show) {
        sidePanel.classList.remove('active');
        body.style.overflow = '';
    }
};

// ============================================================
// 11. ACORDEÓN DE CURSOS (se llena desde cursosDb)
// ============================================================

function llenarAcordeonSidebar() {
    const contenedor = document.getElementById('listaCursosAcordeon');
    if (!contenedor) return;

    const claves = Object.keys(cursosDb);
    if (claves.length === 0) {
        contenedor.innerHTML = `<p style="font-size:0.8rem; padding:10px; color:#888;">Próximamente se publicarán los cursos de este período.</p>`;
        return;
    }

    const grupos = {};
    claves.forEach(id => {
        const prefijo       = id.substring(0, 3).toLowerCase();
        const nombreRealMes = nombreMeses[prefijo] || "Otros";
        if (!grupos[nombreRealMes]) grupos[nombreRealMes] = [];
        grupos[nombreRealMes].push({ id, ...cursosDb[id] });
    });

    let html = '';
    for (const mes in grupos) {
        html += `
            <div style="margin: 15px 10px;">
                <div style="background: var(--primary-color); color: white; padding: 8px; border-radius: 8px; font-size: 0.75rem; font-weight: 900; text-align: center; margin-bottom: 10px;">${mes.toUpperCase()}</div>
                <div style="border-left: 2px solid #eee; padding-left: 15px;">`;
        grupos[mes].forEach(curso => {
            html += `
                <div class="course-row-sidebar" style="margin-bottom:12px;">
                    <p style="font-size:0.85rem; font-weight:700; color: var(--primary-color); margin:0;">${curso.nombre}</p>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
                        <span style="font-size:0.75rem; color:#666;">📅 ${curso.fechas}</span>
                        <button class="btn-detail" onclick="abrirDetalleLateral('${curso.id}')">Info ℹ️</button>
                    </div>
                </div>`;
        });
        html += `</div></div>`;
    }
    contenedor.innerHTML = html;
}

// ============================================================
// 12. ACORDEÓN GENERAL
// ============================================================

window.toggleAcordeon = function(btn) {
    btn.classList.toggle('active');
    btn.nextElementSibling.classList.toggle('open');
};

// ============================================================
// 13. MENÚ HAMBURGUESA (MÓVIL)
// ============================================================

function toggleMenu() {
    hamburgerBtn.classList.toggle('open');
    navContainer.classList.toggle('open');
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMenu);
}

navButtons.forEach(btn => btn.addEventListener('click', () => {
    if (navContainer.classList.contains('open')) toggleMenu();
}));

// ============================================================
// 14. REUBICACIÓN DEL PODCAST (MÓVIL VS ESCRITORIO)
// ============================================================

function reubicarElementosMovil() {
    const podcast = document.querySelector('.podcast-side-tab');
    const sidebar = document.querySelector('.events-sidebar-right');
    if (!podcast) return;

    if (window.innerWidth <= 768) {
        if (sidebar && !sidebar.contains(podcast)) {
            sidebar.appendChild(podcast);
            Object.assign(podcast.style, { display: "block", position: "relative", left: "0", top: "0", transform: "none", width: "100%", marginTop: "30px" });
        }
    } else {
        if (!document.body.contains(podcast) || podcast.closest('.events-sidebar-right')) {
            document.body.appendChild(podcast);
            Object.assign(podcast.style, { display: "flex", flexDirection: "row", position: "fixed", left: "", top: "50%", transform: "translateY(-50%)", width: "530px", marginTop: "0" });
        }
    }
}

// ============================================================
// 15. POPUP PARA VIDEOS O IMÁGENES ADICIONALES
// ============================================================

window.abrirPopUpActividad = function(titulo, descripcion, tipoMedia, urlMedia) {
    let contenidoHTML = `<p style="line-height:1.6; margin-bottom:15px;">${descripcion}</p>`;
    if (tipoMedia === 'video') {
        contenidoHTML += `<div class="video-wrapper"><iframe src="${urlMedia}" width="100%" height="350" frameborder="0" allow="autoplay"></iframe></div>`;
    } else if (tipoMedia === 'imagen') {
        contenidoHTML += `<img src="${urlMedia}" style="width:100%; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">`;
    }
    openHelpModal(titulo, contenidoHTML);
};

// ============================================================
// 16. ARRANQUE MAESTRO
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    llenarAcordeonSidebar();
    setTimeout(() => {
        const activeBtn = document.querySelector('.nav-btn.active');
        if (activeBtn) moveIndicator(activeBtn);
    }, 50);
    inyectarFlechasNavegacion();
    revealElements();
    updateProgressBar();
    reubicarElementosMovil();
    setActiveSection('inicio');
});

window.addEventListener('scroll', updateProgressBar);

window.addEventListener('resize', () => {
    const activeBtn = document.querySelector('.nav-btn.active');
    if (activeBtn) moveIndicator(activeBtn);
    reubicarElementosMovil();
});

if (closeModal) {
    closeModal.addEventListener('click', () => helpModal.classList.remove('open'));
}

document.getElementById('helpFab').addEventListener('click', () => openEventPopup('Contáctenos', ''));
