import React, { Component, useMemo } from "react";
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { Input, Divider } from 'antd';


class NewsRowComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            country: '',
            title: '',
        }
    }
    changeHandler = value => {
        this.setState({ country: value })
    }

    handleTitleChange = e => {
        this.setState({title: e.target.value})
    }

    handleAddingCountry = () => {
        const { countries, country } = this.state
        countries.push(country.label)
        this.setState({ countries , country:''})

    }
    handleSubmit = () => {
        const {title, countries} = this.state
        console.log(title,countries)
        this.props.onClick(title, countries)
        this.props.onHide()
        this.setState({
            title : '',
            countries: []
        })
    }
    
    render() {
        const options = countryList().getData()
        const { countries, title } = this.state
        return (
            <div>
                <Modal show={this.props.show} centered onHide={() => this.props.onHide({ msg: 'Cross Icon Clicked!' })}>

                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add News Stream
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Input placeholder="Title" value={title} onChange={this.handleTitleChange} />
                        <Divider>Countries</Divider>
                      
                        {countries.map((value, i) => {
                            return (
                                <><Input key={i} readOnly defaultValue={value} /><br /></>
                            )
                        })}
                        <br />
                        <Select styles={styles} options={options} value={this.state.country} onChange={this.changeHandler} />
                        <Button variant="primary" style={{ float: 'right' }} onClick={this.handleAddingCountry} >
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </Button>
                        {/* <button
                            onClick={() => props.add()}
                            type="button"
                            className="btn btn-primary text-center"
                            id="add-button"
                        >
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button> */}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide} >Close</Button>
                        <Button variant="primary" onClick={this.handleSubmit}  >Submit</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    };
}

export default NewsRowComponent;

const styles = {
    container: base => ({
      ...base,
      flex: 1
    })
};