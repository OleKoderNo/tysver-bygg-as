interface MailButtonProps {
  email: string; // Email address to send the mail to
  text: string; // Button text
  className?: string; // Additional classes
}

const MailButton: React.FC<MailButtonProps> = ({ email, text, className }) => {
  return (
    <button
      className={`bg-orange-500 px-10 my-6 py-6 rounded text-2xl font-bold text-white ${className}`}
      onClick={() => (window.location.href = `mailto:${email}`)}
    >
      {text}
    </button>
  );
};

export default MailButton;
