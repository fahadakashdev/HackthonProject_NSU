import { LoginData, OtpData, RegisterData } from "../utils/details";



class authSystem{
   
  constructor(){

  }

      createAccount(data: RegisterData) : boolean {
        return true;
      }

      loginAccount(data : LoginData) : boolean  {
        return true;

      }

      checOTP(data : OtpData) : boolean {
        return true;
      }

      resendOtp(email : string) : boolean {
        return true;
      }

      forgotPassword(email : string) : boolean {
        return true;
      }

}

export default  new authSystem();
