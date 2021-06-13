export type Props = {
  text: string
  type: 'text' | 'password'
  name?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Container: React.FC<Props> = ({
  text,
  type,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <input
        value={text}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
export default Container
