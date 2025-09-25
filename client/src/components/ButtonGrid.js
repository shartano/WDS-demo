import Button from './Button'

function ButtonGrid({ onButtonClick }) {
  const buttons = ["7","8","9", "+","4","5","6","x","1","2","3","-","0","="];

  return (
    <div className="grid">
      {buttons.map((b, i) => (
        <Button key={i} label={b} onClick={onButtonClick} />
      ))}
    </div>
  );
}



export default ButtonGrid;