import './Button.css';

export default function Button({ variant = 'btn-primary', text }) {
  return <button className={`btn ${variant}`}>{text}</button>;
}
