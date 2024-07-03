import PropTypes from 'prop-types';

const ResumeDisplay = ({ handleClick, firstName, lastName, schoolName, companyName }) => {
    return (
      <div className="resume-display">
        <h2>
          Name: {firstName} {lastName}
        </h2>
        <h2>
          SchoolName: {schoolName}
        </h2>
        <h2>Company Info:{companyName}</h2>
        <button onClick={handleClick}>Edit</button>
      </div>
    );
  };

ResumeDisplay.propTypes = {
    handleClick: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    schoolName: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
}
export default ResumeDisplay;  