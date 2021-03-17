import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../store';
import styled from 'styled-components';

const StyledDIV = styled.div`
display: flex;
flex-flow: column wrap;
margin: 3px;
margin-top: 5px;
margin-bottom:5px;
justify-content: center;
align-content: center;
`;
const StyledPROPS = styled.div `
padding-top: 5px;
text-decoration: overline;
font-size: 115%;
`;
const StyledIMG = styled.img`
width: 30%;
height: auto;
border-radius: 30%;
`;

const StyledLi = styled.li`
list-style-type: none;
padding: 15px;
`;

const Shwifters = (props) => {
    const handleChars = () => {
        props.fetchData()
    }

    return (
        <div>
            <p>Hi, would you like to see the Galaxy's Finest?</p>
            <button className='charBtn' onClick={handleChars}>Get Da Finest</button>
            {props.isLoading ? <h2>Loading Da Best..</h2> : null}
            
                <div>
                <ul>
                {props.isLoading ||  props.name.map((item) => {
                  return <StyledLi key={item.id} >
                            <StyledDIV className='charList'>
                                <StyledIMG src={item.image} />
                                <StyledPROPS>{item.name}<br></br>status: {item.status}</StyledPROPS>
                            </StyledDIV>
                        </StyledLi>
                  
                })}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        name: state.name,
    }
}

export default connect(mapStateToProps, {fetchData})(Shwifters);
