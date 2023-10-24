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

    const handleScrollTo = (
        e: React.MouseEvent<HTMLAnchorElement>,
        target: string
    ) => {
        e.preventDefault();
        const targetSection = document.querySelector(target) as HTMLElement;
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="bg-transparent">
            <div
                ref={scope}
                className="grid landscape h-screen w-screen grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
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
            <div className="h-screen md:h-4/5 xl:h-screen pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="p-4 pointer-events-auto w-10/12 md:w-7/12 lg:w-6/12 xl:w-3/12 2xl:w-3/12">
                    <Link to="/">
                        <img src="/rickymorty-header.png" alt="" className="" />
                    </Link>
                </div>
                <h1 className="text-center text-[2.3rem] font-black uppercase text-white md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[8rem]">
                    {heroTitle}
                </h1>
                <a
                    href={heroUrl || "#"}
                    className="scroll-smooth"
                    onClick={(e) => handleScrollTo(e, heroUrl || "#")}
                >
                    <BubbleText msg={heroContent} />
                </a>
            </div>
        </div>
    );
};
