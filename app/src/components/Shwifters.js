import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../store'



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
                  return <li key={item.id}><img src={item.image} />{item.name}status:{item.status}</li>
                  
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
        //mainCharacter: state.name.find(character => character.name === 'Rick') || {}
        //image: state.image,
        //status: state.status,
    }
}

export default connect(mapStateToProps, {fetchData})(Shwifters);
