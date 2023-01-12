import './search-box.styles.css';

const SearchBox =({className, placeholder, onSearchHandler}) => (
    <div>        
        <input 
        className= { `search-box ${className}` } 
        placeholder= {placeholder} 
        type='search' 
        onChange={onSearchHandler}/>
    </div>
);

export default SearchBox;