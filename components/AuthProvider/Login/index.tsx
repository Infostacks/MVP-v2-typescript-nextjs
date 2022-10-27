
export interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueEmail: string;
  valuePass: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LogInCard = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs text-bgColor">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={props.valueEmail}
          onChange={props.onChange}
          className={`w-72 h-7 pl-2 border-2 rounded-sm text-md z-12 focus:outline-none`}
        />
        <label htmlFor="password" className="text-xs text-bgColor">
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={props.valuePass}
          onChange={props.onChange}
          className={`w-72 h-7 pl-2 border-2 rounded-sm text-md z-12 focus:outline-none`}
        />
      </div>
    </div>
  );
};

export default LogInCard;
