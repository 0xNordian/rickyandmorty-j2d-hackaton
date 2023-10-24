import AppLayout from "../layouts/AppLayout";
import Header from "../components/header/Header";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <AppLayout>
                <Header />
                <section className="my-24">
                    <div className="flex flex-col gap-6 flex-wrap items-center justify-center md:flex-row md:gap-12">
                        <Link to="/characters">
                            <Card
                                cardType={"characters"}
                                cardTitle="Characters"
                                cardContent="Discover all the characters"
                            />
                        </Link>
                        <Link to="/locations">
                            <Card
                                cardType={"locations"}
                                cardTitle="Locations"
                                cardContent="Explore the locations"
                            />
                        </Link>
                        <Link to="/episodes">
                            <Card
                                cardType={"episodes"}
                                cardTitle="Episodes"
                                cardContent="Find all the episodes"
                            />
                        </Link>
                    </div>
                </section>
                <img src="/test3.png" alt="" className="w-full" />
            </AppLayout>
        </>
    );
};

export default Home;
