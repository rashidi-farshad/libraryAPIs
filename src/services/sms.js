import FarazSMS from "farazsms";
const sms = new FarazSMS(process.env.FARAZ_SMS_API_KEY);

// console.log(await sms.balance());

export const sendOtp = async (phone) => {
  const randonCode = Math.floor(Math.random() * 99999);
  await sms.sendPattern(process.env.FARAZ_SMS_PATTERN, phone, {
    code: String(randonCode),
  });

  return randonCode;
};
