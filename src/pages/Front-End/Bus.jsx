
import ban from '../../assets/slider_image_bus.png'
import Marquee from "react-fast-marquee";
import BookingForm from '../../Front-End-Component/Form/BookingForm'

export default function Bus() {
  return (
    <div>
      <div className='mx-3'>
      <Marquee className='bg-success p-2 mt-5  text-light border border-info rounded-pill' behavior="scroll" direction="left" >   সহজ থেকে প্রথমবার টিকেট কাটছেন? ব্যবহার করুন কুপন কোড : <span className="bg-danger rounded-pill p-1"> PROTHOM </span> <span> আর উপভোগ করুন ৳১৫০ পর্যন্ত নিশ্চিত ছাড় ! </span>
      </Marquee>
      </div>

        <div className='d-flex bd-highlight mt-4 '>
            <BookingForm />
            <div className=' flex-fill bd-highlight '>
              <img src={ban} alt="banner" />
            </div>
            </div>
            <p className='p-3' style={{borderBottom:"5px solid green", marginLeft:"30px",marginRight:"30px" }}></p>
        
      <div>saho</div>
      <div>katim</div>

    </div>
  )
}
