import { useState } from "react";
import "./App.css";
import ResumeDisplay from "./components/ResumeDisplay";
import ResumeEdit from "./components/ResumeEdit";

const App = () => {
  const [firstName, setFirstName] = useState("Emmanuel");
  const [lastName, setLastName] = useState("Ogbuefi");
  const [schoolName, setSchoolName] = useState('');
  const [click, setClick] = useState(false);
  const [companyName, setCompanyName] = useState('');


  const handleFirstChange = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };
  const handleSecondChange = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
  };
  const handleSchoolChange = (e) => {
    setSchoolName(e.target.value);
    console.log(schoolName);
  };

  const handleCompanyChange = (e) => {
    setCompanyName(e.target.value);
  }
  const handleClick = () => {
    setClick(!click);
    console.log(click);
  };


  return (
    <div className="app">
      <ResumeEdit
        firstName={firstName}
        lastName={lastName}
        handleSecondChange={handleSecondChange}
        handleFirstChange={handleFirstChange}
        handleClick={handleClick}
        schoolName={schoolName}
        handleSchoolChange={handleSchoolChange}
        handleCompanyChange={handleCompanyChange}
        companyName={companyName}
      />
      {click && (
        <ResumeDisplay
          handleClick={handleClick}
          firstName={firstName}
          lastName={lastName}
          schoolName={schoolName}
          companyName={companyName}
        />
      )}
    </div>
  );
};

export default App;
