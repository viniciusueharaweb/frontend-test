import Button from "../components/Button";

export default function Newsletter() {
    return (
        <section className="newsletter__section">
            <div className="newsletter__wrapper">
                <h2 className="section__heading">
                    Join our membership to get special offer
                </h2>
                <form>
                    <input
                        className="main-input"
                        placeholder="Enter your email address"
                    />
                    <Button shadow text="Join" />
                </form>
            </div>
        </section>
    );
}
