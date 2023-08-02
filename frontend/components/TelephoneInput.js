import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const TelephoneInput = ({phone, setTelCountry, setPhone}) => {
  const [country, setCountry] = useState({value: 'de'});
  const [value, setValue] = useState(phone);
  const handleOnChange = (phone, country) => {
    setValue(phone);
    setPhone(phone);
    setCountry(country);
    setTelCountry(country)
  };

  const customStyles = {
    backgroundColor: 'white',
    fontSize: '16px',
    color: '#333',
  }

  return (
    <>
     <PhoneInput
       style={customStyles}
       international
       countryCallingCodeEditable={false}
       defaultCountry="DE"
       value={phone}
       onChange={handleOnChange}
       />
    </>
  );
};

export default TelephoneInput;
