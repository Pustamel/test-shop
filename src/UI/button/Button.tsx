import './Button.css'

type buttonProps = {
  text: string
  onClick?: () => void
  color?: 'green' | 'blue'
}

export const Button = ({ text, onClick, color = 'green' } : buttonProps) => {
  return (
    <button className={`button ${color}`} onClick={onClick}>
      {text}
    </button>
  )
}
