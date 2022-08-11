import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Alert, Card, Form } from "react-bootstrap";
var ethiopianDate = require('ethiopian-date');

export default function Teste() {

    const [data, setData] = useState('');
    const [juliana, setJuliana] = useState('');


    function dataEthiopian(){
        let date: Date = new Date(data);
        let arrayDate = ethiopianDate.toEthiopian(date.getFullYear(), date.getMonth(), date.getDay());
        return arrayDate[0] + "/" + arrayDate[1] + "/" + arrayDate[2];
    }

    function dataSelina() {
        let date: Date = new Date(data);
        const day = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
        let teste = (date.getFullYear() - 1900) + '' + day.toString().padStart(3, '0');
        let number: number = + teste;
        return number + 1;
    }

    function julianDateSixToGregorianDate() {
        var number: number = + juliana;
        let julianYear = number.toString().slice(0, 3);
        let julianDay = number.toString().slice(3, 6);
        let date = new Date(1900 + parseInt(julianYear), 0, 0, 0, 0, 0)
        date.setDate(date.getDate() + parseInt(julianDay));
        let day = date.getDate().toString().padStart(2, '0'),
            mouth = (date.getMonth() + 1).toString().padStart(2, '0'),
            year = date.getFullYear();

        if (day && mouth && year) {
            return day + "/" + mouth + "/" + year;
        }
        return "";
    }


    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={6}>
                    <Card>
                        <Card.Header>
                            <h1>Converter Datas</h1>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Por favor escolha uma Data para Juliana</Form.Label>
                                        <Form.Control type="date" onChange={e => setData(e.target.value)} />
                                    </Form.Group>
                                </Form>
                            </Row>
                            <br />
                            {data ? (
                                <Row>
                                    <Col>
                                        <Alert variant="success">Valor em data Juliana é : {dataSelina()}</Alert>
                                    </Col>
                                    <Col>
                                        <Alert variant="success">Valor em data Entíope é : {dataEthiopian()}</Alert>
                                    </Col>
                                </Row>
                            ) : (<></>)}

                            <hr />
                            <br />

                            <Row>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Por favor informe a data Juliana para converter</Form.Label>
                                        <Form.Control type="number" onChange={e => setJuliana(e.target.value)} />
                                    </Form.Group>
                                    <br/>
                                    {juliana ? (
                                        <Row>
                                            <Col>
                                                <Alert variant="primary">Valor em data é : {julianDateSixToGregorianDate()}</Alert>
                                            </Col>
                                        </Row>
                                    ) : (<></>)}
                                </Form>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
