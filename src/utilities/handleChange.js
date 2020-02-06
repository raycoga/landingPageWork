export default function handleChange(event, values, setData) {
    /* The handle change function works with 3 variables, firts: with the event, wich what i use to obtain de name of the input and his value, second: the actual values of the state, and third: the function wich set the state perse */

    setData({ ...values, [event.target.name]: event.target.value })
}