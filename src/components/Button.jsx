import { Button } from "reactstrap";

export default (props) => {
    return (
        <Button style={props.style} className="contato">
            {props.icon}
        </Button>
    );
}