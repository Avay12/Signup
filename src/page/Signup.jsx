import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Header from '../components/Header';
import Sites from '../components/Sites';
import { grey } from '@mui/material/colors';

const accountSignup = [
  {
    id: 1,
    site: 'google',
    src: 'https://cdn.icon-icons.com/icons2/2642/PNG/512/google_logo_g_logo_icon_159348.png',
  },
  {
    id: 1,
    site: 'facebook',
    src: 'https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg',
  },
  {
    id: 3,
    site: 'linden',
    src: 'https://t3.ftcdn.net/jpg/04/37/88/86/360_F_437888641_XrjjuAwATXWNx10jQurCDaXXJnobhDi4.jpg',
  },
];

export default function Signup() {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className="flex flex-col space-y-8">
        <Header>SIGNUP</Header>
        <form className=" flex flex-col space-y-4">
          <div className="flex flex-col space-y-6">
            <label>
              <input
                className="border-2 border-gray-50 py-2 pl-4 pr-24 placeholder-shown:border-gray-500"
                type="text"
                id="otp"
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
                placeholder="Enter OTP"
              />
            </label>
            <label>
              <input
                className="... border-grey-50 border-2 py-2  pl-4 pr-24 placeholder-shown:border-gray-500"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
            </label>
            <label>
              <input
                className="... border-grey-50 border-2  py-2 pl-4 pr-24 placeholder-shown:border-gray-500"
                type="Confirm"
                id="email"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Confirm Password"
              />
            </label>
            <label>
              <Checkbox
                sx={{
                  color: grey[800],
                  backgroundColor: grey[50],
                }}
              />
              <span className="text-xs/4 text-blue-800">
                i agree with terms and service and privacy policy
              </span>
            </label>
          </div>

          <div>
            <button className="w-100 rounded-full bg-blue-700 px-32 py-2 font-bold text-white">
              SignUp
            </button>
          </div>

          <div>
            <p className="font sans-serif text-center font-bold text-black">
              Or Signin with
            </p>
            <ul className="flex justify-center space-x-2">
              {accountSignup.map((site) => (
                <Sites site={site.site} key={site.id} img={site.src} />
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
