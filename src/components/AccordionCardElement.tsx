// import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";
import { CardElementTypes } from "../types/CardElementTypes";

const AccordionCardElements = ({
    cardTitle,
    cardContent,
    cardImg,
}: CardElementTypes) => {
    return (
        <div className="h-full group w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
            <div className="min-h-[450px] relative z-10 flex flex-col items-center justify-start overflow-hidden rounded-[7px] bg-slate-900 p-0 transition-colors duration-500 group-hover:bg-slate-800">
                <div className="h-[350px] mb-0 w-full">
                    <img src={cardImg} className="h-full w-full object-cover" />
                </div>
                <div className="w-full h-full p-4">
                    <h4 className="relative z-10 w-full text-xl font-bold text-slate-50">
                        {cardTitle}
                    </h4>
                    <p className="relative z-10 text-slate-400 text-left w-full">
                        {cardContent}
                    </p>
                </div>
            </div>

            <motion.div
                initial={{ rotate: "0deg" }}
                animate={{ rotate: "360deg" }}
                style={{ scale: 1.75 }}
                transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                }}
                // className="absolute inset-0 z-0 bg-gradient-to-br from-rm-light-blue via-indigo-200/0 to-rm-green opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
        </div>
    );
};

export default AccordionCardElements;
