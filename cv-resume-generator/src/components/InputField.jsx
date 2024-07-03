import PropTypes from 'prop-types';

const InputField = ({ name, funcChange, placeholder, labelName }) => {
  return (
    <label>
      {labelName}:
      <input
        value={name}
        onChange={funcChange}
        type="text"
        placeholder={placeholder}
      />
    </label>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  funcChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};
export default InputField;
