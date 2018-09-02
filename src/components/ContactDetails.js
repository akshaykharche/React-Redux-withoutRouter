import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import ContactList from './ContactList';
import SearchDetails from './SearchContactDetails';
import DisplayRecords from './DisplayContactDetails';
import * as loadRecords from '../actions/LoadUserAction';
import { getUsers, getRecordsToDisplay } from '../selectors/DisplayContactsSelector';
import '../App.css';


export class ContactDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedRecords: []
        }
        this.searchDetails = this.searchDetails.bind(this);
    }

    searchDetails(event) {
        let records = this.props && this.props.records;
        let searchValue = event.target.value;
        let updatedRecords = records.filter(value => {
            return (value.general.firstName.toLowerCase() === searchValue.toLowerCase() ||
                value.general.lastName.toLowerCase() === searchValue.toLowerCase() ||
                value.job.title.toLowerCase() === searchValue.toLowerCase()
            )
        })
        this.setState({ updatedRecords })
    }
    componentDidMount() {
        this.props.actions();
    }
    render() {
        let { updatedRecords } = this.state;
        let { records, displayRecords } = this.props;
        return (
            <Grid className="outer-container">
                <Row>
                    <Col md={5}>
                        <div><SearchDetails onChange={this.searchDetails} /></div>
                        {updatedRecords && updatedRecords.length > 0 ?
                            <ContactList records={updatedRecords} /> : records ?
                                <ContactList records={records} /> : null}
                    </Col>
                    <Col md={7}>
                        <DisplayRecords display={displayRecords} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        records: getUsers(state),
        displayRecords: getRecordsToDisplay(state)

    }
}

export default connect(mapStateToProps, {
    actions: loadRecords.LoadUserAction
})(ContactDetails);
