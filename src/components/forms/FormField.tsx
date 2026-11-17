import type { ReactNode } from 'react';

type FormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
};

export default function FormField({ label, htmlFor, required, error, hint, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-charcoal-800">
        {label}
        {required && <span className="ml-1 text-error-600">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-charcoal-500">{hint}</p>}
      {error && (
        <p role="alert" className="text-sm text-error-600">
          {error}
        </p>
      )}
    </div>
  );
}
