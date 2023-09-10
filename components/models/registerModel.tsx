import useLoginModel from "@/hooks/useLoginModel";
import { useCallback, useState } from "react";
import Input from "../input";
import Model from "../model";
import useRegisterModel from "@/hooks/useRegisterModel";

const RegisterModel=()=>{

    
    const registerModel = useRegisterModel();

    const loginModel=useLoginModel();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onToggle=useCallback(()=>{
    if(isLoading){
        return;
    }
    registerModel.onClose();
    loginModel.onOpen();
  },[isLoading,registerModel,loginModel])

  const onSubmit=useCallback(async() => {
    try{
        setIsLoading(true);

        registerModel.onClose();
    }catch(err){
        console.log(err);
    }finally{
        setIsLoading(false);
    }
  },[registerModel]  )

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}  
      />
       <Input 
        disabled={isLoading}
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <Input 
        disabled={isLoading}
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input 
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading} 
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>Already Have an account?
        <span 
          onClick={onToggle}
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
          > Sign in</span>
      </p>
    </div>
  )
  
    return(
    <Model
    disabled={isLoading}
    isOpen={registerModel.isOpen}
    title="Create an Account"
    actionLabel="Register"
    onClose={registerModel.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}
   
    />
    )
}

export default RegisterModel;