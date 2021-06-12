export type Props = {
  value: string
  type: 'text' | 'password'
  name?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Container: React.FC<Props> = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <input
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
export default Container
