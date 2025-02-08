const Example = () => {
  const clickHandler = () =>{
    alert('ボタンをクリックしました')
  }

  return (
    <>
    <button onClick={clickHandler}>クリックしてね</button>
    <button onClick={clickHandler}> クリックしてね</button>
    </>
  );
};

export default Example;
