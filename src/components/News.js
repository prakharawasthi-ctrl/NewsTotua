import React, { Component } from 'react'
import { Newsitem } from './Newsitem'
// import Spinner from './Spinner';

export class News extends Component {
    // articles = []
    constructor() {
        super();
        console.log("hello I am a constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        console.log("component did Mount");
        let url = `https://newsapi.org/v2/top-headlines?apiKey=1c3ab84abf484826b3424c6ef0a9b80e&country=in&page=2&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({
            articles: parseddata.articles,
            loading: false,
            // totalReasults: parseddata.totalReasults
        })
    }
    handlePreviousClick = async () => {
        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?apiKey=1c3ab84abf484826b3424c6ef0a9b80e&country=in&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseddata = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parseddata.articles,
            loading: false

        })
    }
    handleNextClick = async () => {
        console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?apiKey=1c3ab84abf484826b3424c6ef0a9b80e&country=in&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseddata = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: parseddata.articles,
            loading: false

        })
    }
    function
    render() {
        console.log("render");
        return (
            <div> <div className="container my-3">
                <h1 className="text-center">News Monkey top headlines</h1>

                <div className="row" >
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col -md-3" key={element.url}><Newsitem title={element.title} description={element.desciption ? element.description.slice(0, 88) + "...." : ""} imageUrl={element.urlToImage} newsUrl={element.url} /></div>
                        )

                    })}
                </div>
                <div className="container my-5 d-flex justify-content-between">

                    <button class="btn btn me-md-2 " disabled={this.state.page <= 1} style={{ backgroundColor: "DarkMagenta" }} onClick={this.handlePreviousClick} type="button">&larr; previous</button>
                    <button class="btn btn dark" style={{ backgroundColor: "DarkMagenta" }} onClick={this.handleNextClick} type="button">next &rarr;</button>
                </div>

            </div></div>

        )
    }
}

export default News