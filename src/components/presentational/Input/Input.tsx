import React, { useState, FormEvent, useEffect } from 'react';
import cx from 'classnames';

import "./Input.scss"

export interface IInput {
    label?: string;
    initialValue?: string;
    onChange: (val: string) => void;
}

export const Input = ({
    label,
    initialValue = "",
    onChange
}: IInput) => {
    const [inputValue, setInputValue] = useState(initialValue);
    const handleValueChange = (e: FormEvent<HTMLInputElement>): void => {
        setInputValue(e.currentTarget.value);
    }

    useEffect(() => {
        onChange(inputValue);
    }, [onChange, inputValue]);

    return (
        <div className={cx(
            "input",
            {
                hasValue: inputValue !== ""
            }
        )}>
            <input
                type="text"
                name={label}
                onChange={handleValueChange}
                value={inputValue}
                autoComplete="off"
            />
            <span className="inputBorder"/>
            <label htmlFor={label}>{label}</label>
        </div>
    )
}
