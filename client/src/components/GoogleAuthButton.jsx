import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";

const GoogleAuthButton = ({ onSuccess, buttonText = "Sign in with Google" }) => {
  return (
    <div className="flex justify-center w-full">
      <GoogleLogin
        onSuccess={onSuccess}
        onError={(error) => {
          console.error("Google login error:", error);
          toast.error("Google login failed. Please try again.");
        }}
        useOneTap={false}
        flow="implicit"
        type="standard"
        theme="filled_blue"
        size="large"
        text="continue_with"
        shape="rectangular"
        cookiePolicy={'single_host_origin'}
        width={250}
      />
    </div>
  );
};

export default GoogleAuthButton;