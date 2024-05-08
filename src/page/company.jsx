export default function Company() {
  return (
    <sidebar className="flex flex-col bg-green-600 mx-12 justify-center items-center w-96  p-14">
      <div>
        <img />
      </div>
      <div>
        <p className="text-center top-0">Join us Today</p>
        <p className="text-center">
          We are excited to have you here. Digitize your business with out
          hassie-free software solutions
        </p>
      </div>

      <div>
        <button className="px-14  bg-blue-700 w-100 rounded-full text-sm/[26px] font-bold text-white">
          Already have an account? Signin
        </button>
      </div>
    </sidebar>
  );
}
