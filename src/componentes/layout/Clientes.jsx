import './Clientes.css';

const Clientes = () => {
    return (
        <>
            <section className="clientes">
                <div className="encabezado">
                    <h3 className="titulo">Empresas y entidades</h3>
                    <p className="subtitulo">Estas instituciones han confiado en mis servicios como Ingeniero de software</p>
                </div>
                <div className="logos">
                    <img  className="logo" src="./assets/logos/BlueLatam.png" alt="Logo de Recharge" />
                    <img  className="logo" src="./assets/logos/adalid.jpg" alt="Logo de Volume" />
                    <img  className="logo" src="./assets/logos/ministerio-educacion.png" alt="Logo de Umbrella" />
                </div>
            </section>
        </>
    );
};
export default Clientes;