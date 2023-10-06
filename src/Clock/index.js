
import { Div } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentDate();

    const formatDate = (date) => date.toLocaleString(undefined, {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long"
    });


    return (
        <Div>
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </Div>
    )
};