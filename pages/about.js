import Image from "next/image";
import Logo from "../assets/logo.png"
//<h1 className="p-3 m-3">About Us</h1>

const About = () => {
    return ( 
        <main className="min-h-screen bg-zinc-100">
            <div className="container py-10">

                <h2 className=' relative z-10 text-3xl uppercase font-semibold text-zinc-800 mx-auto max-w-max'>About <span className='font-thin'>Palm Smoke & Vape</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center"> 
                    <div className="">
                        <p className="my-5 leading-8 text-lg text-zinc-600 font-medium poppins tracking-wide">The services we specialize in at Palm smoke and Vape include the selling of tobacco products at an affordable price. We sell water pipes, hand pipes, hookahs, grinders vaporizers, puff bars, cbd, rolling papers, sanitation and cleaning products for all your smoking needs and essentials. We promise to provide you an  amazing experience while shopping with us!</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src={Logo} alt="load" layout="fixed" className=" max-w-50 " />
                    </div>
                </div>
            </div>


        </main>
     );
}
 
export default About;