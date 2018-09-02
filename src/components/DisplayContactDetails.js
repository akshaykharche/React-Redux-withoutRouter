import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css';

const DisplayRecords = ({ display }) => {
    return (
        <div className="display-container">
            {display && display.map(person => {
                return (
                    <Row key={person.general.firstName}>
                        <Col md={3}>
                            <img src={person.general.avatar} alt="contact person" className="contact-details-image" />
                        </Col>
                        <Col md={9}>
                            <h4>
                                <span>{person.general.firstName} </span>
                                <span> {person.general.lastName} </span>
                            </h4>
                            <div>{`${person.job.title} - ${person.job.company}`} </div><br />
                            <div>{`Email: ${person.contact.email}`} </div>
                            <div>{`Phone: ${person.contact.phone}`} </div>
                            <div>{`Address: ${person.address.zipCode},${person.address.street},${person.address.city},${person.address.country}`} </div>
                        </Col>
                    </Row>
                )
            })}
        </div>
    );
};


export default DisplayRecords;