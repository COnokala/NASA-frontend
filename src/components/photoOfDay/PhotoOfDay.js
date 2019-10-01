import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"
import './photoOfDay.css'


const PhotoContainer = styled.section`
    border-top: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    padding: 10px;
    margin-top:0;
`
const Photo = styled.img`

    border: 1px white solid;
    height:300px;
    width: 300px;
    margin: 12px;

    &:hover{
        transform:scale(1.1);
        z-index:1;
        box-shadow: 7px 7px 5px rgba(208, 66, 255, 0.4);
    }
`


class PhotoOfDay extends Component{
    constructor(props){
        super(props)
        this.state = ({
            photos: []
        })
    }

    componentDidMount() {
        fetch("https://great-beyond-photos.herokuapp.com/apod").then(res=>res.json())
        .then(res => {
            console.log(res)
            this.setState({photos:res})
    })}


    render(){
        const photosView = this.state.photos.map((photo, i) => (
            <Link to={'/'} key={i}>
                <Photo
                    src={photo.hdurl}
                    alt={photo.title}
                />
            </Link>
        ))
        return( 
        <div class="all">
            <PhotoContainer>
                {photosView}
            </PhotoContainer>
        </div>)
    }
}

export default PhotoOfDay