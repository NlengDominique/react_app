import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';

function Contact() {

  const [loading,setLoading] = useState(false)

  const notify = () => toast.success("Message envoye avec succes");

  const [formDta, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target, { publicKey: import.meta.env.VITE_PUBLIC_KEY })
    .then(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      })
      notify()
    }).catch((error) => {
      console.error(error)
    }).finally(()=>{
      setTimeout(()=>{
        setLoading(false)
      },1000)
     
    })
  
  }
  return (
    <section className='min-h-screen flex items-center justify-center ' id='contact'>

        <div className='w-150 px-4 '>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Get In Touch </h2>
            <form action="" className='space-y-6 mt-8' onSubmit={handleSubmit}>
                <div className='relative'>
                <input type="text" name='name' id='name' required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                 focus:border-blue-500 focus:bg-blue-500/5' placeholder='Name.......' value={formDta.name} onChange={(e) => setFormData({...formDta, name: e.target.value})}/>
                </div>
                <div className='relative'>
                <input type="email" name='email' id='email' required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                 focus:border-blue-500 focus:bg-blue-500/5' placeholder='example@gmail.com' value={formDta.email} onChange={(e) => setFormData({...formDta, email: e.target.value})} />
                </div>
                <div className='relative'>
                <textarea type="text" name='message' id='message' required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                 focus:border-blue-500 focus:bg-blue-500/5' rows={4} placeholder='Your message' value={formDta.message} onChange={(e) => setFormData({...formDta, message: e.target.value})}></textarea>
                </div>
                <button type='submit' className='w-full bg-blue-500/10 border border-blue-500/20 rounded px-6 py-3 font-medium text-white transition relative overflow-hidden hover:bg-blue-500' disabled={loading}>{loading ? (
                  <span className='flex items-center justify-center'>En cours.... </span>
                ):"Send Message"}</button>
                <ToastContainer />
            </form>
        </div>

    </section>
  )
}

export default Contact