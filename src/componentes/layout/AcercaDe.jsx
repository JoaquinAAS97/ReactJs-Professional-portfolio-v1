import './Acerca-de.css';

const AcercaDe = () => {
	return (
		<>
			<section className="acerca-de" id="acerca-de">
				<div className="grid">
					<div className="col-1">
						<div className="fotos">
							<img src="assets/acerca-de-3.png" className="foto" alt="" />
							<img src="assets/acerca-de-2.png" className="foto" alt="" />
						</div>
					</div>
					<div className="col-2">
						<h4 className="pre-titulo">Acerca de Mí</h4>
						<h3 className="titulo">La razón por la que deberías contratarme</h3>
						<p className="resumen">
							Hola! Soy Joaquín Astorga, tengo 28 años, soy Ingeniero de software y ciencias de datos. Me considero apasionado por el desarrollo de la IA,
							desarrollo de apps web y móviles.
						</p>
						<p className="resumen">
							Mi misión es contribuir al desarrollo de nuevas tecnologías para la resolución de problemas tanto en el rubro público como en el privado.
						</p>
						<p className="resumen">
							Mi visión es crear un impacto positivo y fructífero en la sociedad, a través de la creacion e implementación de nuevas tecnologías.
						</p>
						<a href="#contacto" className="boton">Mandame un mensaje
							<span className="icono">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
									<path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
								</svg>
							</span>
						</a>
					</div>
				</div>
			</section>
		</>
	)
}

export default AcercaDe;