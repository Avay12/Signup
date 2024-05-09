export default function Company() {
  return (
    <sidebar className="mx-[48px] mb-[2px] box-border flex h-[34rem] w-96 flex-col items-center  justify-between bg-green-600 pb-[6rem] pt-[2px]">
      <div className="mx-[18px] mt-[20px] h-[72px] w-[292px] bg-white">
        <img src="https://sbrcinfosys.com/images/logo%20dark.png" alt="logo" />
      </div>
      <div className="mb-[24px]  basis-1/2 pt-[52px]">
        <p className="top-0  mb-[12px] text-center text-[18px] font-bold text-white">
          Join us Today
        </p>
        <p className="textself-center px-[18px] py-[18px] text-left text-[18px] font-bold text-white">
          We are excited to have you here. Digitize your business with out
          hassie-free software solutions.
        </p>
      </div>

      <div className="mt-[24px] basis-1/2 ">
        <button className="w-100 rounded-full bg-blue-700 px-[24px] py-[8px] font-bold text-[18] text-white">
          Already have an account? Signin
        </button>
      </div>
    </sidebar>
  );
}
