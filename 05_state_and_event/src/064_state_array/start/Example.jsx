import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);

  const shuffle = () => {
  const newnums = [ ...nums ];
  const value = newnums.pop()
  newnums.unshift(value); 
  setNums(newnums);
  }

  return (
    <>
      {nums}
      <button onClick={shuffle}>シャッフルボタン</button>
    </>
  );
};

export default Example;
