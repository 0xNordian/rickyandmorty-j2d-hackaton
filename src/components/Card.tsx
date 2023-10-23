// import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";
import { CardTypes } from "../types/CardTypes";
// import { image } from "@nextui-org/react";

const Card = ({ cardTitle, cardType, cardContent }: CardTypes) => {
    return (
        <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
            <div className="min-h-full relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
                <div className="h-[360px] mb-4">
                    {cardType === "characters" ? (
                        <img
                            src="/rickandmorty-twist.png"
                            className="h-full w-full object-cover"
                        />
                    ) : cardType === "locations" ? (
                        <img
                            src="/locations.png"
                            className="h-full w-full object-cover"
                            style={{ objectPosition: "-100px 0px" }}
                        />
                    ) : (
                        <img
                            src="/episodes.png"
                            className="h-full w-full object-cover"
                            style={{ objectPosition: "-170px 0px" }}
                        />
                    )}
                </div>

                <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
                    {cardTitle}
                </h4>
                <p className="relative z-10 text-slate-400 text-left w-full">
                    {cardContent}
                </p>
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
                className="absolute inset-0 z-0 bg-gradient-to-br from-rm-light-blue via-indigo-200/0 to-rm-green opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
        </div>
    );
};

export default Card;
