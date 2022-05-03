import axios from 'axios';
import React from 'react';

const AddItem = () => {




    const handleImport = e => {
        e.preventDefault();

        const newData = {

            name: e.target.name.value,
            price: e.target.price.value,
            picture: e.target.picture.value,
            quantity: e.target.quantity.value,
            about: e.target.about.value,
            supplierName: e.target.supplierName.value,
            email: e.target.email.value

        }

        axios.post('http://localhost:5000/inventory', newData)
            .then(res => console.log(res))


    }

    const email = "okvai@ok.com"

    return (
        <div style={{ backgroundImage: "url(" + 'https://i.ibb.co/KW3Vf0L/import-car.png' + ")" }} className='h-screen bg-cover' >

            <div className="block  p-6 rounded-lg shadow-lg bg-[#4DD3F5] bg-opacity-30  max-w-sm h-auto lg:float-right float-none w-96 mr-9 mt-9  backdrop-blur-sm">
                <form className='capitalize' onSubmit={handleImport} >

                    <div className="">
                        <div className="mb-3 flex flex-col justify-center items-center">

                            <h1 className='text-center mb-5 text-blue-700 ' >Import A New Car</h1>

                            <input
                                name='name'
                                required
                                type="text"
                                className=" 
                                form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none capitalize"
                                id="exampleFormControlInput1"
                                placeholder="name"
                            />

                            <input
                                name='price'
                                required
                                type="number"

                                defaultValue={1}
                                min={1}
                                id="exampleNumber0"
                                className=" mt-6
                                form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none capitalize"
                                placeholder="price"
                            />


                            <input
                                name='email'
                                required
                                type="text"
                                className=" mt-6 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-400 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput5"
                                aria-label="Disabled input example"
                                disabled
                                value={email}
                                placeholder="Email"
                            />

                            <input
                                name='picture'
                                required
                                type="url"
                                className=" mt-6
                                form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                id="exampleFormControlInput1"
                                placeholder="picture Url (https://img.com) "
                                value={'https://images.unsplash.com/photo-1614491001156-427a045f94f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                            />

                            <input
                                name='quantity'
                                required type="number"

                                defaultValue={1}
                                min={1}
                                id="exampleNumber0"
                                className=" mt-6
                                form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none capitalize"
                                placeholder="quantity"
                            />

                            <input
                                name='about'
                                required
                                type="text"
                                className=" mt-6
                                form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none capitalize
      "
                                id="exampleFormControlInput1"
                                placeholder="description"
                            />

                            <input
                                name='supplierName'
                                required
                                type="text"
                                className=" mt-6
                                form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none capitalize
      "
                                id="exampleFormControlInput1"
                                placeholder="supplierName"
                            />

                            <input
                                type="submit" value="Import the Car "
                                className='inline-block px-6 py-2.5 mt-8 bg-blue-600 text-white font-medium  text-base leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none capitalize focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddItem;