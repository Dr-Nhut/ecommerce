function Radio({ options, group, value, onChange }) {
    return (
        <>
            {options.map((option, index) => {
                let checked;
                +value === option.value ? checked = true : checked = false;
                return <div key={index}>
                    <input onChange={(e) => onChange(e.target.value)} type='radio' value={option.value} id={option.value} name={group} checked={checked} />
                    <label htmlFor={option.value}>{option.label}</label>
                </div>
            })}
        </>
    );
}

export default Radio;