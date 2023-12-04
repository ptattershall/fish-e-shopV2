"use client"

import { FormEvent, useState } from "react"

export const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            })
            console.log(res)
        } catch (error: any) {
            console.log(error)
        }
    }


    return (
        <div>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}