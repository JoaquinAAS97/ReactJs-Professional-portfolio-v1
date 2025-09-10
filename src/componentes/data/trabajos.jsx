import './data.css'

const trabajos = [
	{
		id: 1,
		categoria: 'desarrollo-web',
		nombreProyecto: 'proyecto IA-Interview',
		thumb: {
			url: './assets/trabajos/desarrollo-1.png',
			alt: 'Trabajo 2',
		},
		info: {
			nombre: 'BlueLatam',
			categoria: 'Desarrollo Web',
			contenido: (
				<>
					<p>
						<strong>PROYECTO - APP WEB PARA EMPRESA DE RECLUTAMIENTO MASIVO</strong>
						<br />
						Esta aplicación fue desarrollada con el objetivo de apoyar el proceso de reclutamiento masivo de personal en una empresa del rubro head hunting.
						El sistema permite reconocer tanto la identidad como las emociones de cada candidato durante las entrevistas, con el fin de monitorear su comportamiento
						a lo largo del proceso de selección.
					</p>
					<img loading="lazy" src="./assets/trabajos/face-api.jpg" alt="" />
					<p>
						<strong>TECNOLOGÍAS USADAS:</strong>
						<br />
						La aplicación web se desarrolló con angular, Css3, html5 y la API- face-api.js.
					</p>
				</>
			),
		},
	},
	{
		id: 2,
		categoria: 'aplicaciones-moviles',
		nombreProyecto: 'Blueber APP',
		thumb: {
			url: './assets/trabajos/apps-1.png',
			alt: 'Trabajo 3',
		},
		info: {
			nombre: 'BlueLatam',
			categoria: 'Aplicaciones Moviles',
			contenido: (
				<>
					<p>
						<strong>PROYECTO - BLUEBER</strong>
						<br />
						Trabajé en el proyecto Blueber como desarrollador de aplicaciones móviles. Este sistema fue creado para el uso interno de la empresa Bluelatam,
						con el objetivo de administrar y gestionar las asignaciones de tareas de los profesionales del área de TI.
					</p>

					<img loading="lazy" src="./assets/trabajos/2.png" alt="" />

					<p>
						<strong>TECNOLOGÍAS USADAS:</strong>
						<br />
						La aplicación móvil hibrida fue desarrollada en angular-ionic, con el framework capacitor para la conversión de web a nativo movil-android.
					</p>
				</>
			),
		},
	},
	{
		id: 3,
		categoria: 'desarrollo-web',
		nombreProyecto: 'Proyecto Smart Rheem 4.0',
		thumb: {
			url: './assets/trabajos/sofware-dev-1.png',
			alt: 'Trabajo 4',
		},
		info: {
			nombre: 'BlueLatam',
			categoria: 'desarrollo Web',
			contenido: (
				<>
					<p>
						<strong>PROYECTO - SMART RHEEM 4.0</strong>
						<br />
						Este proyecto consistió en el desarrollo de un software web de intranet para la empresa Rheem S.A.
						El objetivo fue automatizar la línea productiva de ensamblaje, control de calidad, empaquetado y postventa de calentadores de agua.
						El sistema está orientado a implementar las siguientes mejoras en el proceso de producción:
					</p>
					<ul>
						<li>Trazabilidad en el proceso de manufactura de calefont</li>
						<li>Monitoreo de productividad a través de un dashboard de KPI productivos</li>
						<li>Automatización de test QA calefont a través de integraciones PLC - API-REST - Sistema web</li>
					</ul>
					<p>
						<strong>Sobre mi labor profesional en el proyecto.</strong>
						<br />
						Trabajé como Líder Técnico de TI en el proyecto SMART RHEEM. Mis responsabilidades incluyeron la dirección del equipo, la gestión de recursos,
						costos y riesgos del proyecto, además presté apoyo en el desarrollo del software.
					</p>
					<img loading="lazy" src="./assets/trabajos/rheem.jpg" alt="" />
					<p>
						<strong>Equipo y stack tecnológico implementado.</strong>
						<br />
						Nuestro equipo se componía de 1 Lider técnico - PM, 1 backend y un frontend. En cuanto a las tecnologías utilizadas se encuentran las siguientes:
					</p>
					<ul>
						<li><strong>Fontend:</strong>React js, JavaScript - Node js - Axios</li>
						<li><strong>Backend:</strong> Nest js, prisma ORM, jwt y Base de datos MySQL</li>
						<li><strong>servidor:</strong>Cloud y suite azure.</li>
					</ul>
				</>
			),
		},
	},
	{
		id: 4,
		categoria: 'Desarrollo BOTs',
		nombreProyecto: 'Desarrollo del Bot-ARMM',
		thumb: {
			url: './assets/trabajos/bot.png',
			alt: 'Trabajo 5',
		},
		info: {
			nombre: 'Ministerio de Educación',
			categoria: 'Desarrollo BOTs',
			contenido: (
				<>
					<p>
						Mi labor en esta institución fue automatizar e informatizar procesos del Departamento de Control y Gestión, de la división de DIPLAP - Ministerio
						de Educación.
					</p>

					<img loading="lazy" src="./assets/trabajos/bot-armm.png" alt="" />

					<p>
						Desarrollo de Bots para la creación de reportes de indicadores CDC, PMG, Formularios H y Gestión de riesgos para KPIs
						del servicios de nivel central de la Subsecretaría de Educación.
					</p>

					<p>
						<strong>Stack tecnológico implementado.</strong>
						<br />
					</p>
					<ul>
						<li><strong>Extracción de información:</strong> BeautifulSoup4</li>
						<li><strong>Automatización y descarga de fuente de datos:</strong> Selenium for Python</li>
						<li><strong>Exploración, limpieza y manipulación de datos:</strong> Python - pandas</li>
						<li><strong>Creación de informe final:</strong> OpenPyXL, XLwings, FPDF</li>
						<li><strong>Creación App Desk:</strong> Tkinter - CustomTkinter, python puro v3.10, Pathlib, threads y mulriprocess</li>
					</ul>
				</>
			),
		},
	},
	{
		id: 7,
		categoria: 'aplicaciones-moviles',
		nombreProyecto: 'Docente Adviser Android-nativo',
		thumb: {
			url: './assets/trabajos/apps-3.png',
			alt: 'Trabajo 7',
		},
		info: {
			nombre: 'Adalid - Aspacia',
			categoria: 'Aplicaciones Moviles',
			contenido: (
				<>
					<p>
						<strong>Docente Adviser - Talento Digital para Chile/Fundación Adalid.</strong>
						<br />
						En esta institución me desempeñé como docente adviser en el programa de Talento digital para Chile ejecutado por la Fundación Adalid-Chile.
						Este programa consiste en capacitar a los alumnos y enseñar programación desde un nivel básico hasta el desarrollo de aplicaciones móviles avanzadas
						en los lenguajes java y kotlin Nativas en Android.

					</p>

					<img loading="lazy" src="./assets/trabajos/2.png" alt="" />

					<p>
						<strong>Sobre mis labores</strong>
						<br />
						Aquí presté servicios de docencia informática, enseñé programación de algoritmo, programación Procedimental, orientada a objetos, funcional y
						Declarativa(SQL), programación de aplicaciones móviles en java y kotlin.
					</p>
				</>
			),
		},
	},
];
export default trabajos;
