import styles from "./bubble.module.css";
import { BubbleTextTypes } from "../../types/BubbleTextTypes";

const BubbleText = ({msg}: BubbleTextTypes) => {
    return (
        <h2 className="pointer-events-auto text-center text-3xl font-thin text-rm-green">
            {msg.split("").map((child, idx) => (
                <span className={`text-rm-light-blue ${styles.hoverText}`} key={idx}>
                    {child}
                </span>
            ))}
        </h2>
    );
};

export default BubbleText;
