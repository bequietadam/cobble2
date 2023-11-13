import loader from '@monaco-editor/loader';
import monacoThemes, { MonacoTheme } from '../constants/monacoThemes';


const defineTheme = (theme: MonacoTheme) => {
  return new Promise((resolve) => {
    Promise.all([
      loader.init(),
      import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
    ]).then((result) => {
      const [monaco, themeData] = result;
      
      monaco.editor.defineTheme(theme, themeData);
      resolve(result);
    })
  })
}

export default defineTheme;
