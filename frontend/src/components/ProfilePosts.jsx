import logo from '../assets/growtika-nGoCBxiaRO0-unsplash.jpg'

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">

    {/*left*/}
     <div className="w-[35%] h-[200px] flex justify-center items-center">
         <img src={logo} alt="" className="h-full w-full object-cover"/>

     </div>

    {/*right*/}
     <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
         10 Uses of Artificial Intelligence in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
           <p>@snehasishdev</p>
           <div className="flex space-x-2">
                 <p>16/06/2023</p>
                 <p>16:45</p>
           </div>
        </div>
        <p className="text-sm md:text-lg">
         Prominent examples of AI software used in everyday life include Google Maps, Netflix, and Siri. These applications use 
         AI to provide personalized recommendations, predict user behavior, and improve the user experience. AI is also used in
         healthcare, finance, and transportation to automate processes, analyze data, and make predictions.
        </p>
     </div>

 </div>
  )
}

export default ProfilePosts