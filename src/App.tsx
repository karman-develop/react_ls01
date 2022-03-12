import { useState } from "react";
import { LANGUAGES } from "./const/languages";
import { Form } from "./Form";
import { List } from "./List";

function App() {

  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(LANGUAGES);

  const addLang = (lang: string) => {
    setLangs([...langs, lang]);
    setTab('list');
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr />
      {
        tab == 'list' ? <List langsParent={langs} /> : <Form addLangParent={addLang} />
      }
    </div>
  );
}

export default App;
