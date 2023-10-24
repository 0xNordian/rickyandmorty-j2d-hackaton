import AppLayout from "../layouts/AppLayout";
import { HeroSection } from "../components/HeroSection";
import AccordionComponent from "../components/Accordion";
import { FetchLocations } from "../utils/FetchLocations";
import { useEffect, useState } from "react";
import { LocationTypes } from "../types/FetchLocationTypes";

const Locations = () => {
    const [locations, setLocations] = useState<LocationTypes[]>([]);
    useEffect(() => {
        const FetchData = async () => {
            const res = await FetchLocations();
            setLocations(res);
        };
        FetchData();
    }, []);

    return (
        <>
            <AppLayout>
                <HeroSection
                    heroTitle="Locations"
                    heroContent="Click here to explore the locations"
                    heroUrl="#locGallery"
                />
                <main id="locGallery" className="w-[90%]">
                    {locations.map((location) => (
                        <AccordionComponent
                            key={location.id}
                            title={location.name}
                            subtitle={location.type}
                            location={location}
                        />
                    ))}
                </main>
            </AppLayout>
        </>
    );
};

export default Locations;
