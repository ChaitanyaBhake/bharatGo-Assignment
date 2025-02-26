import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="mt-20 mx-auto flex flex-col items-center text-center">
      <h1 className="text-4xl font-extrabold text-red-600 mb-4 animate-bounce">
        404 - You found the special page! 
      </h1>
      <p className="text-lg font-medium mb-6 text-center p-6 m-6">
        Congratulations! 🎉 You just found a page that doesn&apos;t exist.  
        Legend says those who land here are either <span className="text-blue-500 font-bold">time travelers ⏳</span>,  
        <span className="text-green-500 font-bold">hackers 🕵️‍♂️</span>, or just very lost. 🧭  
        But don’t worry, I have a **special fix button** just for you. 😉  
      </p>
      <img 
        src="https://media.giphy.com/media/JsAtmKFjb61Uc/giphy.gif" 
        alt="Confused Travolta"
        className="w-72 h-auto rounded-lg shadow-lg mb-4"
      />
      <NavLink 
        to="/" 
        className="px-6 py-2 bg-yellow-300 text-black text-lg font-bold rounded-lg mt-4"
      >
        🚀 Click here to fix
      </NavLink>
      <p className="mt-4 text-sm text-gray-500 ">
        *No pages were harmed in the making of this 404 error. Except this one.*  
      </p>
    </div>
  );
};

export default Error404;
