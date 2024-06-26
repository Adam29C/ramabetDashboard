
export const Email_regex = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|ymail|rediffmail|hotmail|outlook|aol|icloud|protonmail|example)\.(com|co\.in|in|net|org|edu|gov|uk|us|info|biz|io|...)[a-zA-Z]{0,}$/;
  return emailRegex.test(email);
};

export const Name_regex = (name) => {
  const emailRegex = /^[a-zA-Z ]+$/;
  return emailRegex.test(name);
};

export const Stg_regex = (name) => {
  const StgRegex = /^[a-zA-Z ]+$/;
  return StgRegex.test(name);
};

export const Mobile_regex = (mobile) => {
  const MobileRegex = /^[0-9]{10}$/;
  return MobileRegex.test(mobile);
};
export const Password_Rejex = (mobile) => {
  const password = /^.{8,15}$/;
  return password.test(mobile);
};

export const No_Negetive_Input_regex = (mobile) => {
  const value = /^(?!0*(\.0*)?$)\d+(\.\d+)?$/;
  return value.test(mobile);
};

export const ValidYoutubeUrl = (url) => {
  // Regular expression to match a YouTube URL
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)[\w-]+(&[\w%=]*)?$/;

  return youtubeRegex.test(url);
};


export const Image_Regexp = (value)=>{
  if(value?.type){
    return  ["image/jpeg", "image/jpg", "image/png"].includes(value?.type);
  }else {
    let val = value?.split(".").pop().toLowerCase(); // Get the file extension
        return ["jpeg", "jpg", "png"].includes(val);
  }
  
}