import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export default (props) => {
    return (
        <Card className="services" style={props.style}>
            <CardBody>
                {props.icon}
                <CardTitle tag="h5">
                    {props.title}
                </CardTitle>
                <CardText>
                    {props.text}
                </CardText>
            </CardBody>
        </Card>
    );
}