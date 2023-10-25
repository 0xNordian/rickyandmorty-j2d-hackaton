import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";

type Props = {
    readonly handleSearch: (str: string) => void;
};

export default function Search({ handleSearch }: Props) {
    return (
        <div className="my-6 w-full md:w-[55%] xl:w-[30%] h-auto px-0 rounded-2xl flex justify-center items-center bg-white text-white shadow-lg">
            <Input
                // label="Search by character name"
                onChange={(e) => handleSearch(e.target.value)}
                isClearable
                radius="lg"
                classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-slate-800 dark:placeholder:text-white/60 text-sm md:text-lg",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                        "shadow-xl",
                        "h-[50px]",
                        "bg-default-200/40",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focused=true]:bg-default-200/50",
                        "dark:group-data-[focused=true]:bg-default/60",
                        "!cursor-text",
                    ],
                }}
                placeholder="Search by character name"
                startContent={
                    <SearchIcon className="text-slate-800 dark:text-white/90 pointer-events-none flex-shrink-0" />
                }
            />
        </div>
    );
}