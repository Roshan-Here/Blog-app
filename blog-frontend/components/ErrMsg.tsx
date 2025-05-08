interface ErrorMessageProps {
    message: string
  }
  
  export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
        <p className="text-red-700">{message}</p>
      </div>
    )
  }
  