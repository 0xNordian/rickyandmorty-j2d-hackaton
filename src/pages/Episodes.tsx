import AppLayout from "../layouts/AppLayout";
import { HeroSection } from "../components/HeroSection";

const Episodes = () => {
    return (
        <>
            <AppLayout>
                <HeroSection
                    heroTitle="Episodes"
                    heroContent="Click here to find all the episodes"
                />
            </AppLayout>
        </>
    );
};

export default Episodes;
