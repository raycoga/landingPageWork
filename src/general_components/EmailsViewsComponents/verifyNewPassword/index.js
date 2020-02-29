import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert2'
const Index = (props) => {
    let data = props.history.location.pathname
    let aux = data.split('/')
    console.log("cabra", aux[2])
    const [validated, setvalidated] = useState(false)
    const [Token, setToken] = useState(false)
    useEffect(() => {
        axios.get(`/password/getUser/${aux[2]}`)
            .then(response => {
                if (response.data.ok) {
                    setvalidated(!validated)
                } else {
                    console.log(response.data.error)
                    sendTokenAgain()
                }

            })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (Token) return <Redirect to={{ pathname: '/email_send' }} />
    if (validated) return <Redirect to={{ pathname: '/change_password', state: 'Your account has been validated' }} />

    /* MODAL */
    const buttonsSwalModalStyle = swal.mixin({
        customClass: {
            confirmButton: 'confirm-button',
            cancelButton: 'cancel-button'
        },
        buttonsStyling: false
    })
    const sendTokenAgain = () => {
        buttonsSwalModalStyle.fire({
            title: 'We have a problem',
            text: `Please send your mail again`,
            input: 'email',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Send',
            showLoaderOnConfirm: true,
            preConfirm: (email) => {

                axios.post('/password/errorToken ', { email: email })
                    .then(response => {
                        console.log(response)
                        if (response.data.ok) {
                            setToken(!Token)
                        } else {
                            sendTokenAgain()
                        }

                    })
            },
            allowOutsideClick: () => !swal.isLoading()
        })

    }


    return (
        <div className="loader">
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    );
};

export default Index;