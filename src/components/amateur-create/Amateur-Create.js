import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"

const backendURL = "https://great-beyond-photos.herokuapp.com/amateur"


const StyledEditArticle = styled.article`
    border: 7px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 48px auto;
    max-width: 700px;
    padding: 40px;
`
const StyledHeader = styled.header`
color: white;
align-content: center;
display: flex;
font-size: 30px;
justify-content:space-between;
`
 

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    `

const StyledInput = styled.input`
width: 50%;
border: 2px solid black;
margin: 10px;
`

const StyledSubmitClick = styled.div`
    background: rgb(161,161,161);
    background: linear-gradient(180deg, 
                rgba(161,161,161,1) 0%, 
                rgba(225,21,43,1) 0%, 
                rgba(149,22,33,1) 53%);
    border: 4px solid #262952;
    color: white;
    font-weight: bolder;
    margin: 10px;
    padding: 3px;
    width: 100px;
    text-align: center;
    text-shadow: 1px 1px 1px purple;
    `

class AmateurCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            title: '',
            author: '',
            description: ''
        }
        this.handleValueChange = this.handleValueChange.bind(this)
        this.submitImage = this.submitImage.bind(this)
    }

    handleValueChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    submitImage() {
        fetch(backendURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Controll": "no-cache",
                "Aceept": "*/*",
                "Host": "https://great-beyond-photos.herokuapp.com/amateur"
            },
            body: JSON.stringify(this.state)
        }).then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <StyledEditArticle>
                    <StyledHeader>
                        Amateur Astronomers
                    </StyledHeader>
                    <StyledForm>
                        <StyledInput 
                        name="url"
                        type="text"
                        value={this.state.url}
                        placeholder="Web Address"
                        onChange={this.handleValueChange}
                        />
                    </StyledForm>
                    <StyledForm>
                        <StyledInput 
                        name="title"
                        type="text"
                        value={this.state.title}
                        placeholder="Title"
                        onChange={this.handleValueChange}
                        />
                    </StyledForm>
                    <StyledForm>
                        <StyledInput 
                        name="author"
                        type="text"
                        value={this.state.author}
                        placeholder="Author Name"
                        onChange={this.handleValueChange}
                        />
                    </StyledForm>
                    <StyledForm>
                        <StyledInput 
                        name="description"
                        type="text"
                        value={this.state.description}
                        placeholder="Short Description"
                        onChange={this.handleValueChange}
                        />
                        <Link to={'/Amateur'}>
                            <StyledSubmitClick onClick={this.submitImage}>
                                Submit Image
                            </StyledSubmitClick>
                        </Link>
                    </StyledForm>
                </StyledEditArticle>
            </div>
        )
    }
}

export default AmateurCreate