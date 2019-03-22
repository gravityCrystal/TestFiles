import React from 'react';
export default ({ changeText, name }) => <div>
  <input type="text" onChange={changeText} value={name} />
</div>

