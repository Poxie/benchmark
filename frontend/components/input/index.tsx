import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Input.module.scss';

export const Input: React.FC<{
    focusOnMount?: boolean;
    placeholder?: string;
    containerClassName?: string;
    inputClassName?: string;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    value?: string;
    name?: string;
    label?: string;
}> = ({ focusOnMount, placeholder, containerClassName, inputClassName, onChange, onSubmit, name, label, value: _value }) => {
    const [value, setValue] = useState(_value || '');
    const ref = useRef<HTMLInputElement>(null);

    // Handling change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        onChange && onChange(e.currentTarget.value);
    }
    // Handling keypress
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && e.currentTarget.value) {
            onSubmit && onSubmit(e.currentTarget.value);
        }
    }
    // Focusing on mount
    useEffect(() => {
        if(focusOnMount) {
            ref.current?.focus();
        }
    }, [focusOnMount]);

    containerClassName = [
        styles['container'],
        containerClassName
    ].join(' ');
    inputClassName = [
        styles['input'],
        inputClassName
    ].join(' ');
    return(
        <div className={containerClassName}>
            {label && (
                <label htmlFor={name}>
                    {label}
                </label>
            )}
            <input 
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={inputClassName}
                value={value}
                name={name}
                ref={ref}
            />
        </div>
    )
}