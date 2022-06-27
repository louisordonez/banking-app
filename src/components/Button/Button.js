import './Button.css';

export default function Button({ variant = 'btn-primary', textValue }) {
  return <button className={`btn ${variant}`}>{textValue}</button>;
}
