import Head from 'next/head'
import Image from 'next/image'
import Header from '@/Components/GeneralComponents/Header'
import wall from '../../public/images/wall.webp';
import SlideShow from '@/Components/GeneralComponents/SlideShow';


export default function Home() {

  return (
    // <div className='overflow-x-hidden flex flex-col h-screen bg-[#000000] dark:bg-[#000000]'>
    //   <Header />
    //   <main className={`flex flex-col justify-center h-screen`}>

    //     {/* ================== */}
    //     {/* FIRST MAIN SECTION */}


    //     <div className='flex flex-row md:flex-col-reverse w-full'>

    //       <div className='w-6/12 md:w-full md:h-[55%] md:mx-auto relative contrast-[1.1]'>
    //         <Image layout={'responsive'} alt={'Neon Hub'} src={wall} />
    //         <div className="neon-text text-[5rem] md:text-[2.5rem] mt-[5rem] md:mt-0 md:mb-[10rem] font-[Vibur]">
    //           <b>N<span>EON</span> H<span>U</span>B</b>
    //           <div className='w-full mt-10 md:mt-2 flex justify-center'>
    //             <p className='text-[#ebebeb] font-[Vazir] text-center w-5/12 md:w-full text-[1.7rem] md:text-[1rem] flex flex-wrap md:justify-center'>
    //               ثبت سفارش طرح های دلخواه چراغ های نئون
    //             </p>
    //           </div>
    //           <div className='w-full md:bg-[black] md:p-[2rem] flex flex-row md:flex-col mt-[5rem] md:mt-[0.5rem] justify-center'>
    //             <button className='text-[white] mx-2 md:mx-auto bg-[#a34062] hover:bg-[#5670cd] transition-all duration-100 font-[Vazir] p-2 rounded-[5px] text-center w-3/12 md:w-11/12 text-[1.25rem]'>
    //               محصولات
    //             </button>
    //             <button className='text-[white] md:hidden mx-2 bg-[#344995] hover:bg-[#953859] transition-all duration-100 font-[Vazir] p-2 rounded-[5px] text-center w-3/12 md:w-9/12 text-[1.25rem]'>
    //               ثبت سفارش
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //       <div className='w-6/12 md:w-full flex justify-center pt-[3rem] md:pt-[15rem] items-center h-[100%] md:h-[45%]'>
    //         <SlideShow data={[]} />
    //       </div>
    //     </div>


    //     {/* FIRST MAIN SECTION */}
    //     {/* ================== */}


    //   </main>
    // </div>
    <>
      <div className='h-screen relative bg-[#160430]'>

        <div className="container">


          <div className="sky">
            <div className="stars"></div>
            <div className="stars1"></div>
            <div className="stars2"></div>
            <div className="shooting-stars"></div>
            <div className="shooting-stars-2"></div>
            <div className="shooting-stars-3"></div>
          </div>
        </div>


        <div className="content ">
          <div className="planet ">
            <div className="ring"></div>
            <div className="cover-ring"></div>
            <div className="spots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className='absolute font-[Orbit] z-[10] rounded-[5px] flex top-28 bottom-28 right-40 left-40 blure bg-gradient-to-tr from-[#02010874] to-[#12093074]'>

          <div className='flex flex-row w-full justify-between pt-10'>
            <div className='w-6/12 pl-[5rem]'>
              <p className='text-[2.5rem]'>Ali Maleki</p>
              <p className='text-[1.25rem] tracking-wider text-[#a6a6a6cf]'>Front End Developer</p>
              <p className='text-[1rem] tracking-wider mt-[4rem] flex flex-wrap text-justify text-[#cecece]'>
                I am 24 years old focusing on javascript & Front End development.
                I've got 3 years of experience collaborating with team work on-site and remotely.
                I like creating mangeable complex ui and large scale applications using React And its combination with TypeScript.
                I also have a basic knowledge of back end ( Node js , Express ).
              </p>
            </div>

            <div className='w-6/12 flex justify-center items-center'>
               <div className='bg-gradient-to-br from-[#d52c6a6f] rounded-lg boxShadowLight to-[#3f3fb755] h-[90%] mb-10 w-6/12'>

               </div>
            </div>

          </div>

          <div className="space">
            <div className="ship">
              <div className="ship-rotate">
                <div className="pod"></div>
                <div className="fuselage"></div>
              </div>
            </div>
            {/* <div className="ship-shadow"></div> */}
            <div className="mars">
              {/* <div className="tentacle"></div> */}
              <div className="flag">
                {/* <div className="small-tentacle"></div> */}
              </div>
              <div className="planet ">
                <div className="surface"></div>
                <div className="crater1"></div>
                <div className="crater2"></div>
                <div className="crater3"></div>
              </div>
            </div>
          </div>



          <div className="planet_wraper planet_shadow">
            <div className="planet-green">
              <div className="crater"></div>
              <div className="crater"></div>
              <div className="crater"></div>
              <div className="crater"></div>
              <div className="crater"></div>
            </div>
          </div>










        </div>
      </div>











    </>
  )
}
