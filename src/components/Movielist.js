import React, { useEffect, useState } from "react";
import Movieitem from './Movieitem';
import axios from "axios";

const Movielist=()=>{
    const[items,setitems]=useState([]);

        useEffect(()=>{
            const getmoviedata = async() =>{
                const key = "2c2ff111934687367af0997b76d1507c";
                const res = await axios.get(`http://api.themoviedb.org/3/trending/all/day?api_key=${key}`);
                setitems(res.data.results);
        };
        getmoviedata();
   
    }, []);
        

    return (<div>
        < div className="container">
            <div className="row">

                {items.map((item)=>(
                    <Movieitem key={item.id} item={item} />
                ))}
            
            </div>

        
    </div>
    </div>
    );
}

export default Movielist;