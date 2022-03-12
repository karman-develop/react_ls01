import { useState } from "react";
import { IaddLang } from "./types";

export const Form = ({ addLangParent }: IaddLang) => {

  const [text, setText] = useState('');

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addLangParent(text);
  }

  return (
    <div>
      <h4>新しい言語の追加</h4>
      <form onSubmit={submitForm}>
        <div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <button>追加</button>
        </div>
      </form>
    </div>
  )
}