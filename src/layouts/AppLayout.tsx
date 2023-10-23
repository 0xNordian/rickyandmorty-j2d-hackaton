import { AppLayoutProps } from "../types/AppLayoutTypes";

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="bg-slate-800 w-[100vw]">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
            <main className="content-rm z-10 w-full h-[1015px] flex flex-col items-center justify-start">
                {children}
            </main>
        </div>
    );
};

export default AppLayout;
