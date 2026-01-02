import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-xs ">Vite + React</p>

      <div className="hover:tab-active">
        마우스를 올리면 파란색이 되고, 화면이 커져도 적용됩니다.
      </div>
    </>
  );
}

export default App;
