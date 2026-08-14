import React, { createContext, useState } from "react";

type NUZContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
 
};

export const NUZContext = createContext<NUZContextType>({
  token: "",
  setToken: () => {},
});

const NUZProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState('');
  const [studentClass, setStudentClass] = useState();
 

  const [studentInfo, setStudentInfo] = useState({
    name : "",
    email: "" ,
    studentID: "" ,
    password: ""
  });




  const value = {
    token,setToken, studentInfo, setStudentInfo
   };

  

  return (
    <NUZContext.Provider value={value}>
      {children}
    </NUZContext.Provider>
  );
};

export default NUZProvider;