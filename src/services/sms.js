import FarazSMS from "farazsms";
const sms = new FarazSMS(process.env.FARAZ_SMS_API_KEY);

const sendOtpSms = async (phone, code) => {
  return sms.sendPattern(process.env.FARAZ_SMS_PATTERN, phone, {
    code: String(code),
  });
};
export default sendOtpSms;
