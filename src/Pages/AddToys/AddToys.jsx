import React from 'react';
import Swal from 'sweetalert2';

const AddToys = () => {
    const handleAddToy=event=>{
        event.preventDefault();

        const form=event.target;
        const toyName=form.toyName.value;
        const sellerName=form.sellerName.value;
        const email=form.email.value;
        const category=form.category.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const quantity=form.quantity.value;
        const photo=form.photo.value;
        const detail=form.detail.value;

        const newToy={toyName,sellerName,email,category,price,rating,quantity,photo,detail}
        console.log(newToy);

        // send data to the server
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Successfully Added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className='py-8 bg-base-200 px-4 rounded-xl'>
            <h2 className='text-5xl font-extrabold text-center py-8'>Add A Toys</h2>
            <form onSubmit={handleAddToy}>
                <div className='lg:flex justify-between gap-4'>
                    <div className="form-control lg:w-full">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered"/>
                    </div>
                    <div className="form-control lg:w-full">
                        <label className="label">
                            <span className="label-text">Seller Name </span>
                        </label>
                        <input type="text" name='sellerName' placeholder="Seller Name" className="input input-bordered" />
                    </div>
                    <div className="form-control lg:w-full">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Seller Email" className="input input-bordered" />
                    </div>
                </div>
                <div className='lg:flex justify-between gap-4'>
                    <div className="form-control lg:w-full">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <input type="text" name='category' placeholder="Category Name" className="input input-bordered" />
                    </div>
                    <div className="form-control lg:w-full">
                        <label className="label">
                            <span className="label-text">Price </span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control lg:w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                    </div>
                </div>
                <div className='lg:flex justify-between gap-4'>
                    <div className="form-control lg:w-full">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control lg:w-full">
                        <label className="label">
                            <span className="label-text">Toy Picture URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Picture URL" className="input input-bordered" />
                    </div>
                    <div className="form-control lg:w-full">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <input type="text" name='detail' placeholder="Detail Description" className="input input-bordered" />
                    </div>
                </div>
                <input type="submit" value="Add A Toy" className='btn btn-block mt-8'/>
            </form>
        </div>
    );
};

export default AddToys;