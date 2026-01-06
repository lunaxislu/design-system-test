import { useState } from "react";
import { Label } from "./components/Label";
import { DefaultTextField } from "./components/DefaultTextField";
import { TagList } from "./components/TagList";

function App() {
  const [isError, setIsError] = useState(false);
  return (
    <div className="space-y-6">
      <TagList
        tagList={["all", "react", "typescript"]}
        onTagClick={console.log}
      />
      <div>
        <Label htmlFor="id">아이디</Label>
        <DefaultTextField
          errorMessage="아이디형식 일치하지 않습니다."
          iconAlt="delete"
          iconPath="https://placehold.co/24"
          id="id"
          isError={isError}
          onChange={() => {}}
          onIconClick={() => {}}
          placeholder="아이디를 입력하세요"
          value=""
        />
      </div>
      <div>
        <Label htmlFor="email">이메일</Label>
        <DefaultTextField
          errorMessage="아이디형식 일치하지 않습니다."
          iconAlt="delete"
          iconPath="https://placehold.co/24"
          id="email"
          isError={isError}
          onChange={() => {}}
          onIconClick={() => {}}
          placeholder="아이디를 입력하세요"
          value=""
        />
      </div>
      <button onClick={() => setIsError((prev) => !prev)}>isError</button>
    </div>
  );
}

export default App;
