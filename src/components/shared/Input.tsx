export default function Input({
  name,
  value,
  handleChange,
  onBlur,
}: {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}) {
  return (
    <div className='w-min min-w-[40px] md:min-w-[136px]'>
      <input
        id={name}
        name={name}
        autoFocus
        type='text'
        onChange={handleChange}
        value={!value || value === "0" ? "" : value}
        onFocus={(e) => e.target.select()}
        onBlur={onBlur}
        pattern='[0-9]{1,2}'
        aria-live='polite'
        aria-label={`${name} input`}
        className='outline-none w-full text-4xl border-none bg-transparent md:text-9xl'
      />
    </div>
  );
}
