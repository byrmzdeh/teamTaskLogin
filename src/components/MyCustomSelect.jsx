import React from 'react'
import Select from 'react-select';

const options = [
    { value: 'github', label: 'GitHub', icon: <i className="fab fa-github"></i> },
    { value: 'youtube', label: 'YouTube', icon: <i className="fab fa-youtube"></i> },
    { value: 'github', label: 'GitHub', icon: <i className="fab fa-github"></i> },
    { value: 'youtube', label: 'YouTube', icon: <i className="fab fa-youtube"></i> },
    { value: 'github', label: 'GitHub', icon: <i className="fab fa-github"></i> },
    { value: 'youtube', label: 'YouTube', icon: <i className="fab fa-youtube"></i> },
    { value: 'github', label: 'GitHub', icon: <i className="fab fa-github"></i> },
    { value: 'youtube', label: 'YouTube', icon: <i className="fab fa-youtube"></i> },
    { value: 'github', label: 'GitHub', icon: <i className="fab fa-github"></i> },
    { value: 'youtube', label: 'YouTube', icon: <i className="fab fa-youtube"></i> },
    { value: 'github', label: 'GitHub', icon: <i className="fab fa-github"></i> },
    { value: 'youtube', label: 'YouTube', icon: <i className="fab fa-youtube"></i> },
    { value: 'github', label: 'GitHub', icon: <i className="fab fa-github"></i> },
    { value: 'youtube', label: 'YouTube', icon: <i className="fab fa-youtube"></i> },
];

const MyCustomSelect = () => {
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '48px',                                
            padding: '0 16px',                        
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#FFFFFF',
            color: state.isSelected ? '#633CFF' : '#333333',
            backgroundColor: state.isSelected || state.isFocused ? '#fff' : '#FFFFFF',
            borderBottom: '1px solid #D9D9D9',
            boxSizing: 'border-box',
            '&:active': {
                backgroundColor: 'transparent',
            },
            '&:focus': {
                backgroundColor: 'transparent', 
            }
        }),
        control: (provided, state) => ({
            ...provided,

            borderRadius: '8px',
            backgroundColor: '#fff',
            cursor: 'pointer',
            margin: '0',
            padding: '0', 
            width: '100%',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: state.isFocused ? '0px 0px 32px 0px #633CFF40' : 'none',
            border: state.isFocused ? '1px solid ##633CFF' : '1px solid #D9D9D9',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
                border: state.isFocused ? '1px solid ##633CFF' : '1px solid #D9D9D9', 
            }
        }),
        singleValue: (provided) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            color: '#333333',
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '0 16px',  
            display: 'flex',
            alignItems: 'center',
            height: '48px', // Control ilə uyğun hündürlük
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#633CFF',
            padding: '4px',
            fontSize: '18px',
        }),
        menu: (provided) => ({
            ...provided,
            marginTop: '52px', 
            backgroundColor: '#FFFFFF',
            maxHeight: '307px',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
        }),
        menuList: (provided) => ({
            ...provided,
            padding: '0 16px',
            '::-webkit-scrollbar': {
                display: 'none',
            },
        }),
    };





    return (
        <div className="select-container">
            <Select
                styles={customStyles}
                options={options}
                defaultValue={options[0]}
                getOptionLabel={(e) => (
                    <div style={{ display: "flex", gap: "12px", alignItems: "center", height: "100%" }}>
                        <span style={{ width: "16px", height: "16px" }}>{e.icon}</span>
                        <span style={{ fontSize: "16px", fontWeight: "400", color: "#333333" }}>{e.label}</span>
                    </div>
                )}
            />
        </div>
    )
}

export default MyCustomSelect