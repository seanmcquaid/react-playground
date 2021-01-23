import { memo } from 'react';

const TextInput = memo(({ value, onChange, name }) => (
  <>
    {console.log(name, value)}
    <input value={value} onChange={onChange} name={name} />
  </>
));

export default TextInput;
