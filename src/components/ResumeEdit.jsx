import PropTypes from "prop-types";
import InputField from "./InputField";

const ResumeEdit = ({
  firstName,
  handleFirstChange,
  handleSecondChange,
  handleClick,
  lastName,
  schoolName,
  handleSchoolChange,
  companyName,
  handleCompanyChange,
}) => {
  return (
    <div className="resume-edit">
      <h1>My Personal Info</h1>
      <InputField
        labelName="FirstName"
        name={firstName}
        funcChange={handleFirstChange}
        placeholder="FirstName"
      />
      <InputField
        labelName="LastName"
        name={lastName}
        funcChange={handleSecondChange}
        placeholder="LastName"
      />
      <InputField
        labelName="SchoolName"
        name={schoolName}
        funcChange={handleSchoolChange}
        placeholder="SchoolName"
      />
      <h1>This is my Work experience</h1>
      <InputField name={companyName} funcChange={handleCompanyChange} labelName="CompanyName" placeholder="CompanyName"/>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

ResumeEdit.propTypes = {
  firstName: PropTypes.string.isRequired,
  handleFirstChange: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  schoolName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSecondChange: PropTypes.func.isRequired,
  handleSchoolChange: PropTypes.func.isRequired,
  companyName: PropTypes.string.isRequired,
  handleCompanyChange: PropTypes.func.isRequired,
};
export default ResumeEdit;
