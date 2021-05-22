import React from 'react';
import { Container, Form } from 'react-bootstrap';

const ContinentFilter = ({ chosenContinent }) => {

    const handleChange = (e) => {
        e.preventDefault();
        chosenContinent(e.target.value)
    }

    return (
        <Container>
            <Form className="continent_form" onChange={handleChange}>
                <Form.Group>
                    <Form.Control as="select" custom>
                        <option>Please Choose Your Continent</option>
                        <option>Asia</option>
                        <option>North America</option>
                        <option>South America</option>
                        <option>Europe</option>
                        <option>Africa</option>
                        <option>Australia-Oceania</option>
                    </Form.Control>
                </Form.Group>
            </Form>

        </Container>
    )
};
export default ContinentFilter;
