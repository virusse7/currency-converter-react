import "./style.css";

const Label = ({ body }) => (
    <label>
        <p>Wybierz walutę, którą chcesz przewalutować:</p>
        {body}
    </label>
);

export default Label;