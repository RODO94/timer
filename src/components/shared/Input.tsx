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
    <div className='w-min min-w-[54px]'>
      <input
        id={name}
        name={name}
        type='text'
        onChange={handleChange}
        value={!value || value === "0" ? "" : value}
        onFocus={(e) => e.target.select()}
        onBlur={onBlur}
        pattern='[0-9]{1,2}'
        aria-live='polite'
        aria-label={`${name} input`}
        className='outline-none w-full text-5xl border-none bg-transparent'
      />
    </div>
  );
}
