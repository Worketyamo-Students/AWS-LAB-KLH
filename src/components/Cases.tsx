import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';

interface OTPFormProps {
  length?: number;
}

const OTPForm: React.FC<OTPFormProps> = ({ length = 4 }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string, event: ChangeEvent<HTMLInputElement>) => {
    if (value.length > 1) return; // Limit to single character
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input on value entry
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Move to previous input on backspace
    if (event.nativeEvent.inputType === 'deleteContentBackward' && !value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    console.log('Submitted OTP:', otpValue);
    // Add your OTP verification logic here
  };

  return (
    <div>
      <div>
        <h2 className="text-[16px] font-500 mb-4">Code OTP</h2>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value, e)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-[73px] h-[72px] text-center border-2 border-[#E4E4E7] bg-[#F4F4F580] focus:outline-none text-[30px] font-semibold rounded-lg focus:ring-2 focus:ring-[#E4E4E7] focus:border-transparent"
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPForm;