import Button from "../components/Button";

export default function Services() {
    return (
        <section className="services__section">
            <div className="flex-row">
                <div className="services__wrapper">
                    <h2 className="section__heading">
                        The best services ready To serve you
                    </h2>
                    <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                    </p>
                    <p>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics, a large language ocean.
                    </p>
                    <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                    </p>
                    <Button shadow text="Know More" />
                </div>
            </div>
        </section>
    );
}
