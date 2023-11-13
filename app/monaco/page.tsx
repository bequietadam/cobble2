'use client'
import React, { useState, useEffect } from 'react';
import CodeEditor from '@components/CodeEditor';
import axios from 'axios';
import languageOptions from '@constants/languageOptions';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Button } from '@nextui-org/react';

import defineTheme from "@lib/defineTheme";
import useKeyPress from "@hooks/useKeyPress";
// import OutputWindow from "@components/OutputWindow";
// import OutputDetails from "@components/OutputDetails";

import LanguageDropdown from "@components/LanguageDropdown";
import { MonacoTheme } from '@/constants/monacoThemes';
import ThemeDropdown from "@components/ThemeDropdown";
import TabsPage from '@/components/Tabs';
import CodeViewer from '@/components/CodeViewer';
import OutputWindow from '@/components/OutputWindow';





export default function App() {
  const [code, setCode] = useState('');
  const [customInput, setCustomInput] = useState('');
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [theme, setTheme] = useState<MonacoTheme>('vs-dark');
  const [language, setLanguage] = useState(languageOptions[0]);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");


  const onChangeCodeEditor = (code: string) => {
    setCode(code);
  }

  const onSelectChange = (newValue: unknown) => {
    const selectedLanguage = languageOptions.find((item) => item.name === newValue as string);
    setLanguage(state => !!selectedLanguage ? selectedLanguage : state);
  };

  // is the first action necessary??
  // try rapidapi's version

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const testFormData = {
      language_id: 52,
      source_code: 'I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=',
      stdin: 'SnVkZ2Uw'
    }
    
    const options = {
      method: 'POST',
      url: process.env.NEXT_PUBLIC_RAPIDAPI_URL,
      params: {
        base64_encoded: 'true',
        fields: '*'
      },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
      },
      data: formData,
    };

    axios
      .request(options)
      .then((response) => {
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        const error = !!err.response ? err.response.data : err;
        setProcessing(false);
        console.error('handleCompile error', error);
      })
  }

  const checkStatus = async (token: string) => {

    const options = {
      method: "GET",
      url: process.env.NEXT_PUBLIC_RAPIDAPI_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
    };
    try {
      const response = await axios.request(options);
      const statusId = response.data.status?.id;

      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token)
        }, 2000)
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast('Compiled successfully!');
        return;
      }
    } catch (err) {
      console.error('checkStatus error', err);
      setProcessing(false);
      showErrorToast();
    }
  };

  // useEffect(() => {
  //   if (enterPress && ctrlPress) {
  //     console.log('enterPress', enterPress);
  //     console.log('ctrlPress', ctrlPress);
  //     handleCompile()
  //   }
  // }, [enterPress, ctrlPress, handleCompile]);

  const onChange = (action: string, data: string) => {
    switch (action) {
      case 'code': {
        setCode(data);
        break;
      }
      default: {
        console.warn('case not handle!', action, data)
      }
    }
  }



  const handleThemeChange = (newValue: unknown) => {
    const selectedTheme = newValue as MonacoTheme
    // if (['light', 'vs-dark'].includes(selectedTheme)) {
    // setTheme(selectedTheme);
    // } else {
    defineTheme(selectedTheme).then(() => setTheme(selectedTheme));
    // }

  };

  // useEffect(() => {
  //   defineTheme('oceanic-next').then(() => {
  //     setTheme('oceanic-next');
  //   })
  // }, []);

  const showSuccessToast = (msg: string) => {
    toast.success(msg || 'Compiled succesfully!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showErrorToast = (msg?: string) => {
    toast.error(msg || 'Something went wrong! Please try again :)', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const editorTab = () => {
    return (
      <>

        <div className="w-full flex justify-end">
          <Button
            onClick={handleCompile}
            disabled={!code}
            size="sm"
            variant="bordered"
          >
            Compile
          </Button>
          <LanguageDropdown onSelect={onSelectChange} />
        </div>
        <div className="flex grow space-x-4 py-4">
          <div className="flex flex-col w-1/2">
            <CodeEditor
              // code={code}
              onChange={onChangeCodeEditor}
              lang={language.name}
              theme={theme}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <OutputWindow outputDetails={outputDetails} />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <TabsPage files={[{ title: 'monaco', content: editorTab() }]} />
    </>
  )
}
