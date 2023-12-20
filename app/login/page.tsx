"use client";

import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography-h1";
import Image from "next/image";
import loginHero from "./login.png";

export default function LoginPage() {
  return (
    <div className="flex h-full">
      <div className="flex grow flex-col justify-center p-4 xl:px-16 xl:py-6">
        <TypographyH1 className="mt-12">Login or Sign up</TypographyH1>
        <div className="mt-8 text-sm">
          <label className="mb-2 inline-block" htmlFor="phone-number">
            Enter mobile number
          </label>
          <input
            type="tel"
            id="phone-number"
            className="inline-block w-full rounded-md px-4 py-3 ring-[0.4px] ring-gray-500 focus:outline-none focus:ring-1"
          />
          <div className="mt-8 flex gap-4">
            <input type="checkbox" />
            <span className="text-gray-700">
              By continuing I agree to the
              <a className="font-semibold text-primary-500" href="#">
                Terms of use & Privacy Policy
              </a>
            </span>
          </div>
          <Button className="mt-4 w-full">Continue</Button>
        </div>
      </div>
      <Image src={loginHero} className="hidden h-full w-auto xl:block" alt="" />
    </div>
  );
}

// function OTPScreen() {
//   const [otp, setOtp] = useState("");
//   return (
//     <>
//       <Heading className="mt-12">Verify with OTP</Heading>
//       <form className="mt-8 text-sm">
//         <span>Sent to 1234567890</span>
//         <OtpInput
//           value={otp}
//           onChange={setOtp}
//           numInputs={4}
//           containerStyle="gap-8 mt-4"
//           inputStyle="w-16 text-center aspect-square focus:outline-none focus:ring-1 rounded-md px-4 py-3 ring-[0.4px] ring-gray-500"
//           renderInput={(props) => (
//             <input {...props} style={{ width: "" }} required />
//           )}
//         />
//         <div className="mt-8 flex gap-4">
//           <input type="checkbox" required />
//           <span className="text-gray-700">
//             By continuing I agree to the
//             <a className="font-semibold text-primary-500" href="#">
//               Terms of use & Privacy Policy
//             </a>
//           </span>
//         </div>
//         <Button className="mt-4 w-full">Continue</Button>
//       </form>
//     </>
//   );
// }
