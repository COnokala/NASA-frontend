import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const backendURL = "https://great-beyond-photos.herokuapp.com/amateur/"

const StyledEditArticle = styled.article`
    background-color: black;
    border: 7px solid #F9D31C;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 48px auto;
    max-width: 700px;
    padding: 40px;
`
const StyledHeader = styled.h1`
    color: #F9D31C;
    background: black;
    align-items: center;
    display: flex;
    font-size: 30px;
    justify-content: space-between;
    
    text-align: center;
    text-shadow: 3px 2px #3359A5;
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
    border: 2px solid #F9D31C;
    margin: 10px;
`

const StyledUpdateClick = styled.div`
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
    text-shadow: 1px 1px 1px black;
`

export default class updateImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      author: '',
      description: ''
    }
    this.handleValueChange = this.handleValueChange.bind(this)
    this.updateImage = this.updateImage.bind(this)
  }

  componentDidMount() {
    fetch(backendURL + this.props.match.params.title)
      .then(response => response.json()
        .then((parsedJson) => {
          this.setState({
            ...parsedJson
          })
        }))
  }

  handleValueChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  updateImage() {
    fetch(backendURL + this.props.match.params.title, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Host": "https://great-beyond-photos.herokuapp.com/amateur",
        "Connection": "keep-alive"
      },
      body: JSON.stringify(this.state)
    }).then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <StyledEditArticle>
          <StyledForm>
            <StyledHeader>Update Image</StyledHeader>
            <StyledInput
              name="url"
              type="text"
              placeholder="Web Address"
              value={this.state.url}
              onChange={this.handleValueChange}
            />
            <StyledInput
              name="author"
              type="text"
              placeholder="Author Name"
              value={this.state.author}
              onChange={this.handleValueChange}
            />
            <StyledInput
              name="description"
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleValueChange}
            />
            <Link to={`/amateur/${this.state.title}`}>
              <StyledUpdateClick onClick={this.updateImage}>
                Submit
            </StyledUpdateClick>
            </Link>
          </StyledForm>
        </StyledEditArticle>
      </div>
    )
  }
}
