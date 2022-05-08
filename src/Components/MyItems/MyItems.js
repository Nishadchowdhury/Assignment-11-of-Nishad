import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosSecret from '../../api/axiosSecret';
import { auth } from '../../firebase.init';
import SingleCard from '../Cards/SingleCard';

const MyItems = () => {

    const [myCars, setCars] = useState([]);

    const [user] = useAuthState(auth);

    const navigate = useNavigate();


    useEffect(() => {
        const getCars = async () => {

            const url = `https://hidden-shore-66811.herokuapp.com/getCarByUser?email=${user?.email}`

            try {
                const { data } = await axiosSecret.get(url, {

                });
                setCars(data);
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getCars();

    }, [user]);


    const HandleDeleteItem = id => {
        // console.log(id);

        const proceed = window.confirm('Are you sure to delete the item ?')

        if (proceed) {
            console.log("deleting ");


            axios.delete(`https://hidden-shore-66811.herokuapp.com/delete/${id}`)
                .then(res => {
                    console.log(res);
                    const restCar = myCars.filter(car => car._id != id);
                    setCars(restCar)
                })

        }

    }


    return (
        <div className='flex flex-wrap gap-2 my-2 justify-center ' >



            {
                myCars.map(car => <SingleCard workFor={'myCars'} key={car._id} card={car} handler={HandleDeleteItem} ></SingleCard>)
            }

        </div>
    );
};

export default MyItems;