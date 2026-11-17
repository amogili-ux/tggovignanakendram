import { CheckCircle2, AlertCircle } from 'lucide-react';

type FormStatusProps = {
  kind: 'success' | 'error';
  message: string;
};

export default function FormStatus({ kind, message }: FormStatusProps) {
  const isSuccess = kind === 'success';
  return (
    <div
      role={isSuccess ? 'status' : 'alert'}
      className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
        isSuccess ? 'border-success-600/30 bg-success-100 text-success-600' : 'border-error-600/30 bg-error-100 text-error-600'
      }`}
    >
      {isSuccess ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" /> : <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />}
      <p>{message}</p>
    </div>
  );
}
