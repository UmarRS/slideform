// Import React and its types
import React from 'react';

// Define types for Button component
export interface ButtonProps {
  children?: React.ReactNode;
  color?: string;
  onClick?: () => void;
  type?: string;
}

// Define types for Form component
export interface FormProps {
  title?: string;
  children?: React.ReactNode;
  onSubmit: (formData: any) => void;
}

// Define types for Input component
export interface InputProps {
  name: string;
  title?: string;
  type?: string;
  hint?: string;
  updateFormData: (name: string, value: any, isValid: boolean) => void;
  mandatory?: boolean;
}

// Define types for Page component
export interface PageProps {
  number: number;
  children?: React.ReactNode;
  currentPage: number;
}

// Define types for SliderInput component
export interface SliderInputProps {
  name: string;
  min: number;
  max: number;
  step: number;
  updateFormData: (name: string, value: any) => void;
  label?: string;
  color?: string;
}

// Declare components with their respective props
export declare const Button: React.ComponentType<ButtonProps>;
export declare const Form: React.ComponentType<FormProps>;
export declare const Input: React.ComponentType<InputProps>;
export declare const Page: React.ComponentType<PageProps>;
export declare const SliderInput: React.ComponentType<SliderInputProps>;
