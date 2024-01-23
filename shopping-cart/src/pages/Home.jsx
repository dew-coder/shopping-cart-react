import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
    const url = 'https://fakestoreapi.com/products';
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    async function fetchData(){
        setLoading(true);

        try{
            const res = await fetch(url);
            const output = await res.json();
            console.log(output);
            setData(output);
        }
        catch(error){
            console.log("error occured in fetching data")
        }

        setLoading(false);
    }

    useEffect( ()=> {
        fetchData();
    }, [])

  return (
    <div>
        {
            loading ? (<Spinner/> ) : data.length > 0 ? (        
                <div className='all-products'>
                {
                data.map( (post) => (
                    <div key={post.id}>
                        <Product post = {post}/>
                    </div>
                    
                ))
            }
                </div>) : ( <div> No Posts Found</div>)
        }
    </div>
  )
}

export default Home
