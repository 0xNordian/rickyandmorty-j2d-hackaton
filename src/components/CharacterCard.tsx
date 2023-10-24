import AccordionCardElements from "./AccordionCardElement";

type CharacterCardProps = {
    characterData: {
        name: string;
        species: string;
        image: string;
    };
};

const CharacterCard: React.FC<CharacterCardProps> = ({ characterData }) => {
    const { name, species, image } = characterData;

    return (
        <div className="">
            <AccordionCardElements
                cardTitle={name}
                cardContent={`Species: ${species}`}
                cardImg={image}
            />
        </div>
    );
};

export default CharacterCard;
