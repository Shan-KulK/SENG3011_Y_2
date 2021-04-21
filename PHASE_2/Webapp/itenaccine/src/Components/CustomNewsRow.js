import React, { Component } from 'react'
import CustomNewsCard from './CustomNewsCard';
import { Tag, Divider, Radio } from 'antd';
import { Modal, Button } from 'react-bootstrap';

class CustomNewsRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newsStream: [],
            heading: '',
            isModalVisible: false,
        }
    }

    handleShow = () => {
        this.setState({ isModalVisible: true })
    }
    handleClose = () => {
        this.setState({ isModalVisible: false })
    }

    render() {
        return (
            <>
                {/* <Divider orientation="left">Presets</Divider> */}
                <div style={{ display: 'inline' }}>
                    <h2>Heading</h2>
                    <Button variant="primary" onClick={this.handleShow} style={{ float: 'right', width:  "100px", height: "40px" }}>
                        <i class="far fa-edit"></i>
                    </Button>
                </div>
                <div>
                    <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="geekblue">geekblue</Tag>
                    <Tag color="purple">purple</Tag>
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
                <Modal show={this.state.isModalVisible} onHide={this.handleClose} centered>

                    <Modal.Header closeButton>
                    <Modal.Title>Create/Edit <br /> News Stream</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>Modal content will sit here</Modal.Body>
                    <Modal.Footer>
                    
                        {/* <Button variant="secondary" onClick={this.handleClose()}>Close</Button> */}
                        {/* <Button variant="primary" onClick={this.handleClose()}>Submit</Button> */}

                    </Modal.Footer>

                </Modal>
            </>
        )
    }
}

export default CustomNewsRow