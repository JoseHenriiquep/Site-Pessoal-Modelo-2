import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export default (props) => {
    return (
        <Card className="projetos" style={props.style}>
            <img src={props.src} alt={props.alt} style={{width: "100%", height: "180px", padding: "10px"
            }}/>
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