import React, { Component } from 'react';
import CustomNewsRow from '../Components/CustomNewsRow';
import NewNewsStreamModal from '../Components/NewNewsStreamModal';
import { getNewsStream } from '../Services/Services.NewsStream';
import { getNewsStreamQuery } from '../Services/Queries';
import { graphql, compose} from 'react-apollo';


class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newsStream: [],
            showAddModal: false,
        }
    }
    componentDidMount() {
        getNewsStreamQuery()
    }
    handleClose = () => {
        this.setState({
            showAddModal: false
        });
    };
    handleShow = () => {
        this.setState({
            showAddModal: true
        })
    }
    handleSubmit = (title, countries) => {
        const { newsStream } = this.state
        const row = (<CustomNewsRow title={title} countries={countries} />)
        newsStream.push(row)
        this.setState({ newsStream })
    }
    render() {
        const { showAddModal, newsStream } = this.state
        return (
            <>
                <section className="banner-section" style={{ backgroundImage: "url(assets/images/background/News.jpg)" }}>
                    <div className="pattern-layer"></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h2>Welcome To News</h2>
                            <p>Name your news stream</p><br />
                            <p>Add Tags to filter you news section</p><br />
                            <p>Choose Your news source</p>
                            <div className="form-inner">

                                {newsStream.map((value, i) => {
                                    return (
                                        value
                                    )
                                })}
                                <br />
                                <button type="button" className="news-row-btn" style={{ marginLeft: "5%", marginRight: "5%", width: "90%", backgroundColor: 'black' }} onClick={this.handleShow} >
                                    <i className="fas fa-plus" />
                                </button>

                                <NewNewsStreamModal
                                    show={showAddModal}
                                    title='Add Stream'
                                    onClick={this.handleSubmit}
                                    onHide={this.handleClose} />

                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}


export default News;
