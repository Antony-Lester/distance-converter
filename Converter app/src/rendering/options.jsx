



const Option = () => {
    const distances = [
        'millimetres',
        'centimeters',
        'meters',
        'kilometers',
        'miles',
        'Nautical miles',
        'inches',
        'feet',
        'yards']
    return (distances.map((unit) => {
        return <option key={unit} value={unit}>{unit}</option>}))
}

export default Option