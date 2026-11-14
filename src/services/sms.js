import FarazSMS from "farazsms";
const sms = new FarazSMS(process.env.FARAZ_SMS_API_KEY);

// console.log(await sms.balance());

export const otp = async (phone, code) => {
  await sms.sendPattern(process.env.FARAZ_SMS_PATTERN, phone, {
    code: code,
  });
};
