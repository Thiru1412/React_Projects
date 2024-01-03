import React ,{useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Search = () => {
    const navigate = useNavigate();
    const [searchQuery,setSearchQuery] = useState('');

    useEffect(() => {
        const delay = setTimeout(()=>{
            if(searchQuery){
                navigate('/search?s='+searchQuery);
            }
        },500)

        return () => clearTimeout(delay);
    },[searchQuery,navigate])
    const handleChange = ev => {
        setSearchQuery(ev.target.value);
    }

  return (
    <div>
        <label>Search</label>
        <input type='text' name='search' onChange={handleChange} />
    </div>
  )
}

export default Search