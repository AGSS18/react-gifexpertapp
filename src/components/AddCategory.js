import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if(inputValue.trim().length > 2) {
            setCategories(prevState => [inputValue, ...prevState]);
        }
        setInputValue('');
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} >
            <input 
                type='text' 
                value={inputValue}
                onChange={handleInputChange}
                placeholder="search GIF"
                />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;