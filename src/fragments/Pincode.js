import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';

function Pincode() {
    const [tooglePincode,setTooglePincode] =useState(false);
    const [deliverypincode, setDeliveryPincode] = useState('851133')
    let enteringPin = (e) => {
        setDeliveryPincode(e.target.value.slice(0, 6))
    }

   
    return (
        <>
            <div className='flex justify-between items-center ps-4 pe-4'>
                <p>
                    <LocationOnIcon color='primary' /> Delivery to <strong>{deliverypincode}</strong>
                </p>
                <Button variant="outlined" size='small' onClick={()=> {setTooglePincode(true)}}>Change</Button>
            </div>
           {tooglePincode && <div className='fixed w-3/4 top-5  shadow-lg  mx-auto z-10 bg-white p-6' style={{ left: '12.5%' }}>
                <h5 className='my-4'>Enter Delivery Pincode</h5>

                <p className='text-xs my-4'>Delivery is available in selected cities</p>

                <input className='border-0 outline-0 w-full borber-b-2 border-gray-500' name='deliveryPincode ' type='number' placeholder='Enter..' value={deliverypincode} onChange={enteringPin} />

                <p className=' text-center border-t-2 border-primary' onClick={()=> {setTooglePincode(false)}} >
                    <Button variant="text" >Submit</Button>
                </p>
            </div>}
            <h6 className='bg-yellow-100 pt-2 pl-4 pb-2 font-bold my-2'>Delivery by Tommorow </h6>
        </>
    );
}

export default Pincode;
