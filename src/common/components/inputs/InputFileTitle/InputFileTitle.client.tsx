'use client';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { InputFileTitleMode, InputFileTitleProps } from './InputFileTitle.types';

/*
 * 인풋 파일 타이틀 컴포넌트
 */
const InputFileTitle = ({
  mode = InputFileTitleMode.DEFAULT,
  value,
  onSave,
  onCancel,
}: InputFileTitleProps) => {
  const [inputValue, setInputValue] = useState<string>(value);
  
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSave?.(inputValue);
    } else if (e.key === 'Escape') {
      setInputValue(value);
      onCancel?.();
    }
  };

  const handleBlur = () => {
    onSave?.(inputValue);
  };
  return (
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className={clsx('flex w-676pxr h-36pxr items-center px-2 py-0.5 rounded-4pxr text-t1-sb text-black outline-none focus:outline-none bg-white', {
        'border border-stroke-100': mode === InputFileTitleMode.EDITABLE,
        })}
        readOnly={mode !== InputFileTitleMode.EDITABLE}
        autoFocus
      />
  );
};

export default InputFileTitle;
