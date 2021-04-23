import React, { Component } from 'react'
import CustomNewsCard from './CustomNewsCard';
import { Tag, Divider, Radio } from 'antd';
import { Modal, Button } from 'react-bootstrap';
import NewsRowModal from './NewsStreamModal';

class CustomNewsRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,
            title: '',
            countries: [],
        };
    }

    componentWillMount() {
        this.setState({title: this.props.title, countries: this.props.countries })
    }
  

    handleClose = () => {
        this.setState({
            showEditModal: false
        });
    };
    handleShow = () => {
        this.setState({
            showEditModal : true
        })
    }
    handleSubmit = (title, countries) => {
        this.setState({
            title,
            countries
        })
    }

    render() {
        const { title, countries,showEditModal } = this.state
        return (
            <>
                {/* <Divider orientation="left">Presets</Divider> */}
                <div style={{ display: 'inline' }}>
                    <h2>{title}</h2>
                    <Button variant="primary" onClick={this.handleShow} style={{ float: 'right' }}>
                        Edit
                    </Button>
                </div>

                <div>
                    {countries && countries.map((value, i) => {
                        return (
                            <Tag color="cyan">{value}</Tag>
                        )
                    })}
                    {/* <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="geekblue">geekblue</Tag>
                    <Tag color="purple">purple</Tag> */}
                    {/* <div style={{ float: 'right' }}>
                        <Radio.Group>
                            <Radio value={1}>A</Radio>
                            <Radio value={2}>B</Radio>
                            <Radio value={3}>C</Radio>
                            <Radio value={4}>D</Radio>
                        </Radio.Group>
                    </div> */}
                </div>
                <br />
                {/* <Divider orientation="left">Custom</Divider>
                <div>
                    <Tag color="#f50">#f50</Tag>
                    <Tag color="#2db7f5">#2db7f5</Tag>
                    <Tag color="#87d068">#87d068</Tag>
                    <Tag color="#108ee9">#108ee9</Tag>
                </div> */}
                <div className="row clearfix">
                    <CustomNewsCard />
                    <CustomNewsCard />
                    <CustomNewsCard />
                    <CustomNewsCard />
                </div>
                <NewsRowModal
                    show={showEditModal}
                    title={title}
                    countries={countries}
                    onClick={this.handleSubmit}
                    onHide={this.handleClose} />
            </>
        )
    }
}


export default CustomNewsRow;
