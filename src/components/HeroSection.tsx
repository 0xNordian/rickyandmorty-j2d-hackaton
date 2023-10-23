import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import { HeroSectionTypes } from "../types/HeroSectionTypes";
import { Link } from "react-router-dom";
import BubbleText from "./BubbleText/BubbleText";

export const HeroSection = ({
    heroTitle,
    heroContent,
    heroUrl,
}: HeroSectionTypes) => {
    const [scope, animate] = useAnimate();
    const [size, setSize] = useState({ columns: 0, rows: 0 });

    useEffect(() => {
        generateGridCount();
        window.addEventListener("resize", generateGridCount);

        return () => window.removeEventListener("resize", generateGridCount);
    }, []);

    const generateGridCount = () => {
        const columns = Math.floor(document.body.clientWidth / 75);
        const rows = Math.floor(document.body.clientHeight / 75);

        setSize({
            columns,
            rows,
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const id = `#${e.target.id}`;
        animate(
            id,
            { background: "rgba(147, 231, 116, 0)" },
            { duration: 1.5 }
        );
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        const id = `#${e.target.id}`;
        animate(
            id,
            { background: "rgba(78, 173, 197, 1)" },
            { duration: 0.15 }
        );
    };

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        const targetSection = document.querySelector(target) as HTMLElement;
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-transparent">
            <div
                ref={scope}
                className="grid h-screen w-screen grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
            >
                {[...Array(size.rows * size.columns)].map((_, i) => (
                    <div
                        key={i}
                        id={`square-${i}`}
                        onMouseLeave={handleMouseLeave}
                        onMouseEnter={handleMouseEnter}
                        className="h-full w-full border-[1px] border-neutral-900"
                    />
                ))}
            </div>
            <div className="h-full pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-1/5 p-4 pointer-events-auto">
                    <Link to="/">
                        <img src="/public/rickymorty-header.png" alt="" />
                    </Link>
                </div>
                <h1 className="text-center text-7xl font-black uppercase text-white sm:text-8xl md:text-9xl">
                    {heroTitle}
                </h1>
                <a href={heroUrl || "#"} className="scroll-smooth" onClick={(e) => handleScrollTo(e, heroUrl || "#")}>
                    {/* <p className="pointer-events-auto mb-6 mt-4 max-w-3xl text-center text-lg font-light text-neutral-500 md:text-xl scale-[1] hover:scale-[1.2] transition-scale duration-75 hover:text-rm-light-blue">
                        {heroContent}
                    </p> */}
                    <BubbleText msg={heroContent} />
                </a>
            </div>
        </div>
    );
};
