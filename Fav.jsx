import React, { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'

export default function Fav(user) {
    try{
        const [favs, setFavs] = useState([])
        useEffect(() => {
            setFavs(JSON.parse(localStorage.getItem("favoriler") ?? []))
        }, [])
    
        return (<>
         {console.log(favs)}
            <h3>Favoriler</h3>
            <div className='row row-cols-sm-3 row-cols-md-4'>
                {favs.map(fav_item =>
                    <div className='col shadow m-1' key={fav_item.id}>
                        <div className="card" style={{ width: "100%", border: "0px" }}>
                            <Link to={`/urunler/${fav_item.id}`} className='text-decoration-none'>
                                <img className="card-img-top" src={fav_item.image} style={{ width: "100%", height: "15vw", objectFit: "cover" }} />
                            </Link>
                            <div className="card-body text-center">
                                <Link to={`/urunler/${fav_item.id}`} className='text-decoration-none'>
                                    <h5 className="card-title text-dark fw-bold fs-6 text-start">{fav_item.title.substring(0, 20)}...</h5>
                                    <p className='text-secondary text-center w-100'>{fav_item.price} $</p>
                                </Link>
                                <button className='btn add-box fs-4' style={{ border: "0px", outline: "none" }}><i className="bi bi-basket"></i></button>
                            </div>
                        </div>
                    </div>
               )}
            </div>
        </>)
    }catch{
        return <Navigate to="/urunler"/>
    }
}