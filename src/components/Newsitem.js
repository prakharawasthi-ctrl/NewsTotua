import React, { Component } from 'react';
export class Newsitem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div>
                <div className="card" style={{ width: " 18rem" }}>
                    <img className="card-img-top" src={!imageUrl ? "https://static.toiimg.com/photo/msid-88579058/88579058.jpg?pl=37494" : imageUrl} alt="Card image cap" defaultValue={"https://play-lh.googleusercontent.com/8LYEbSl48gJoUVGDUyqO5A0xKlcbm2b39S32xvm_h-8BueclJnZlspfkZmrXNFX2XQ"} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='blank' className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>


        );
    }

}
export default Newsitem