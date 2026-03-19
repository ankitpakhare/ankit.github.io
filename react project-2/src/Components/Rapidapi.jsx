import React, { useState } from 'react'
import axios from 'axios'


const Rapid = () => {
    const [value, setValue] = useState([]);

    const getData = () => {

        const options = {
            method: 'GET',
            url: 'https://the-cocktail-db3.p.rapidapi.com/',
            headers: {
                'x-rapidapi-key': '3cddf0b557mshb1d0e8ce4bb561dp15456ejsn64164700a71c',
                'x-rapidapi-host': 'the-cocktail-db3.p.rapidapi.com'
            }
        };
        axios.request(options).then((response) => {
            setValue(response.data);

        }).catch((error) => {
            console.error(error);
        })
    }



    return (
        <div>
            <div className=' bg-warning'>


                <div className='text-center'>
                    <button className='btn btn-outline-primary  ps-4 pe-4 fs-5 m-5 text-center' onClick={getData}>Foods & Drinks</button>
                </div>


                <div className="container">
                    <div className="row">
                        {value.map ((item, index) => {
                            return (
                                <div className="col-12 col-md-6 col-lg-3" key={index}>
                                    <div className="card mb-5 border-warning rounded-5">
                                        <img src={item.image} style={{ height: 300 }} className=" rounded-5 card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.id}</h5>
                                            <p className="card-text">{item.title}</p>
                                            <p className="card-text">{item.difficulty}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Rapid

