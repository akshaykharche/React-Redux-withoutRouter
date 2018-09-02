import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import { ShowDetailsAction } from '../actions/LoadUserAction';
import { connect } from 'react-redux';
import '../App.css';
export class ContactList extends Component {
    render() {
        return (
            <Grid>
                {this.props && this.props.records.map(person => {
                    return (
                        <Row key={person.general.firstName}
                            onClick={() => this.props.actions({ id: `${person.general.firstName}` })}
                            className="row-style"
                        >
                            <Col md={3}>
                                <img src={person.general.avatar} alt="contact person" className="image-resolution" />
                            </Col>
                            <Col md={9}>
                                <h4>
                                    <span>{person.general.firstName} </span>
                                    <span> {person.general.lastName} </span>
                                </h4>
                                <span>{person.job.title} </span>
                            </Col>
                        </Row>
                    )
                })}
            </Grid>
        );
    }
}

export default connect(null, {
    actions: ShowDetailsAction
})(ContactList);
