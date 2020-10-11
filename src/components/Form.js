import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        addArtcile: article => dispatch(addArticle(article))
    }
}

function ConnectedForm(props) {
    let [title, setTitle] = useState('');
    const handleChange = (e) => {
        setTitle(e.target.value);
    };  
    const save = () => {
        props.addArtcile({ title: title });
    };
    return (
        <div>
            <input value={title} onChange={handleChange} />
            <button onClick={save}>Save</button>
            <hr />
      </div>  
    ); 
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
