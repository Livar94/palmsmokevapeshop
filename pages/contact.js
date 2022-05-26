// import Image from "next/image";
// import Logo from "../assets/logo.png"
import Find from "../components/Find";
//<h1 className="p-3 m-3">About Us</h1>

const Contact = () => {
    return ( 
        <main className="min-h-screen bg-zinc-100">
            <div className="container py-10">

                <h2 className=' relative z-10 text-3xl uppercase font-semibold text-zinc-800 mx-auto max-w-max'>Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center"> 
                    <div className="" data-aos="fade-right">
                        <h1 className="font-bold text-xl animate-bounce w-100 h-100">
                            <a href="tel:619 477 1388">Phonenumber: 619 477 1388</a>
                        </h1>
                        
                        <p className="my-5 leading-8 text-zinc-600 font-medium poppins tracking-wide text-xl">Business hours: <br/> Sunday – Thursday ( 10:00 am to 10:00 pm ) <br/> Friday and Saturday – ( 10:00 am to 11:00 pm )</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Find />
                    </div>
                </div>
            </div>


        </main>
     );
}
 
export default Contact;