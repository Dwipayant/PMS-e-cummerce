import { Button, Col, Form, InputGroup, Navbar, Row } from "react-bootstrap"

const HeaderComponent: React.FC = () => {
    return (
        <>
            <Navbar bg="primary" className="bg-body-tertiary justify-content-between">
                <Form >
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Form>
                <Form >
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar>
        </>
    )
}

export default HeaderComponent