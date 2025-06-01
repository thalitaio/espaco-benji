const Features = () => {
    const features = [
        {
            title: "Casamentos",
            description: "Realize o casamento dos seus sonhos em um ambiente sofisticado e acolhedor."
        },
        {
            title: "Eventos Corporativos",
            description: "Espaço ideal para conferências, workshops e eventos empresariais."
        },
        {
            title: "Debutantes",
            description: "Comemore seus 15 anos em grande estilo com uma festa inesquecível."
        },
        {
            title: "Aniversários",
            description: "Celebre momentos especiais com família e amigos em um ambiente exclusivo."
        }
    ];

    return (
        <section className="features">
            <div className="features-container">
                <h2 className="features-title">
                    Nossos Serviços
                </h2>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                        >
                            <h3 className="text-xl font-semibold text-dark-brown mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-medium-brown">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features; 