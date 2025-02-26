import flower from "../assets/flower2.jpg"

const MyAccount = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center m-auto w-[50vw] md:h-[40vh] h-fit">
      <h2 className="mt-15 mb-5">My Account</h2>

      <div className="flex flex-col items-center justify-center w-full h-full border border-black rounded-lg p-3 gap-5">
        <p className="mt-10 font-semibold">Created by:</p>
        <div className="md:w-60 md:h-60 w-40 h-40 rounded-full">
          <img src={flower} alt="" className="rounded-full w-full h-full object-cover" />
        </div>
        <p>Chaitanya Bhake ❤️</p>
        <div className="flex flex-col items-center justify-center">
          <a href="/anonymous" target="_blank" rel="noopener noreferrer" className= "underline">
            @Chaitanya
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
