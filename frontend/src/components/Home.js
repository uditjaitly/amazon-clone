import React, {useEffect, useState} from 'react'
import Product  from './Product'
import axios from 'axios'
import Loading from '../components/Loading'
import MessageBox from '../components/MessageBox'
const Home = () =>{
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    useEffect(()=>{
        const fetchData = async () => {
            try{
                setLoading(true);
                const {data} = await axios.get('/api/products');
                setProducts(data);
                setLoading(false);
                
            }
            catch(err){
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    },[])

    return(
        <div >
            {loading ? (<Loading/> ) : error ? (<MessageBox variant="danger">{error}</MessageBox>):
            <div className="row center">
            {
                products.map((product)=>(

                    <Product key={product._id} product={product}/>
                ))
            }
            
            </div>}
           




            <footer className="footer-row">
                <div> All Rights Reserved</div>

            </footer>
        </div>

    )

}

export default Home