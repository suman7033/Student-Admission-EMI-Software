import React from 'react'
import IdCardTop from "../../component/img/IdCard.png";
import Academilcon from "../../component/img/AcademyIcon.png";
import RoundIcon from "../../component/img/RoundIcon.png";

const IdCard = () => {
  return (
    <div className='ml-96 h-2/3 mt-[-35rem]  bg-gray-300 w-1/2'>
       <img src={IdCardTop}/>
       <img className='mt-[-6rem] pl-4'src={Academilcon}/>

        <div className=' ml-[30rem] h-60'> 
         <img className='w-40 mr-10 pb-3' src={RoundIcon}/>
        <img className='w-28 mt-[-9rem] ml-6 h-28 rounded-full' src='https://static.vecteezy.com/system/resources/thumbnails/011/675/374/small_2x/man-avatar-image-for-profile-png.png'/><br/>
        <label className='mx-1 my-5 font-bold text-xl'>Kunal Choudhary</label><br/>
        <label className='mx-6 text-sm font-semibold'>UX/UI DESIGNER</label>
       </div>

       <div className=' mt-[-8rem] ml-4'>
       <label className='font-bold'>STUDENT ID NO. - </label>
       <label>32145698778965</label><br/>
       <label className='font-bold'>Gender:- </label>
       <label>Male</label><br/>
       <label className='font-bold'>Blood Group:- </label>
       <label>O+</label><br/>
       <label className='font-bold'>Branch:- </label>
       <label>Delhi-Ncr</label><br/>
       <label className='font-bold'>EMAIL:- </label>
       <label>kunal21kumar@gmail.com</label><br/>
       <label className='font-bold'>Phone no.:- </label>
       <label>7677295031</label><br/>
       <label className='font-bold'>Address:- </label>
       <label>At + Po - Delhi-Ncr, P.S- Gandhi medhan, Pin no.- 834001, Delhi, India</label>
       </div>
    </div>
  )
}

export default IdCard
