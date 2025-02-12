import { useState } from "react";
import { useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef()

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setplaying] = useState(false)
  return(
    <>
    <video style={{maxWidth: "100%"}}>
    <source src="./sample.mp4"></source>
    </video>
    <button onClick={() => {
      setplaying(prev => !prev);
    }}>
      {playing ? "stop" : "play"}
    </button>
    </>

  )
};

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example;



// import { useRef } from "react";

// function App(){
//   //userefを適用する変数を定義
//   const inputref = useRef(null);
//   //集中する関数を定義
//   const focusInput = () => {
//     inputref.current.focus();
//   };

// return(
//   <>
//   <input ref={inputref} type="text" placeholder="初期値"/>
//   <button onClick={focusInput}>フォーカスを当てる</button>
//   </>
//   );
// }

// export default App;