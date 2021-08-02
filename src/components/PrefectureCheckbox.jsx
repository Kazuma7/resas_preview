const PrefectureCheckbox = ({
  checked,
  disabled,
  prefName,
  prefCode,
  onChange,
}) => {
  return (
    <div className="checkboxOut">
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
