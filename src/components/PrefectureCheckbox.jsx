const PrefectureCheckbox = ({
  checked,
  disabled,
  prefName,
  prefCode,
  onChange,
}) => {
  return (
    <div
      style={{
        margin: '4px',
        paddingleft: '10%',
        display: 'inline-block',
        width: '6em',
      }}>
      <input
        type="checkbox"
        id={prefCode + 'checkbox_pref'}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={prefCode + 'checkbox_pref'}>{prefName}</label>
    </div>
  );
};

export { PrefectureCheckbox };
