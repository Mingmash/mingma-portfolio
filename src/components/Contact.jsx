import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import emailjs from '@emailjs/browser';
//wRHCyvzcUB3CkpYeW
//service_me6nau9
//template_99i6ayc
const Contact = () => {
  const fromRef = useRef();
 const [form, setForm] = useState({
name: '',
email:'',
message:'',
 });
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;

  setForm({ ...form, [name]: value })
}

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

//wRHCyvzcUB3CkpYeW
//service_me6nau9
//template_99i6ayc

  emailjs.send(
'service_me6nau9',
'template_99i6ayc',
{
  from_name: form.name,
  to_name: 'Mingma',
  from_email: form.email,
  to_email: 'mkmingma@gmail.com',
  message: form.message,
},
'wRHCyvzcUB3CkpYeW'
  )
  .then(() => {
    setLoading(false);
    alert('Thank you. I will reach back to you as soon as possible.');

    setForm({
      name:'',
      email:'',
      message:'',
    })
    }, (error) => {
      setLoading(false)

      console.log(error);
      alert('Something went wrong.')
    })
  
}


  return (
    
<div className="flex flex-col-reverse lg:flex-row gap-10 overflow-hidden">
<motion.div 
variants={slideIn('left', "tween", 0.2, 1)}
className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
<p className={styles.sectionSubText}>Get in touch</p>
<h3 className={styles.sectionHeadText}>Contact.</h3>
<form 
ref={fromRef}
onSubmit={handleSubmit}
className="mt-12 flex flex-col gap-8"
>
<label  className="flex flex-col">
<span className="text-white font-medium mb-4">Your Name</span>
<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
placeholder="What's your name?"
className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"

/>
</label>
<label  className="flex flex-col">
<span className="text-white font-medium mb-4">Your Email</span>
<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="What's your Email?"
className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"

/>
</label>
<label  className="flex flex-col">
<span className="text-white font-medium mb-4">Your Message</span>
<textarea
rows="7"
name="message"
value={form.message}
onChange={handleChange}
placeholder="What are your thoughts?"
className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"

/>
</label>

<button
type="submit"
className="bg-tertiary py-3 px-8 ouline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
>
{loading ? 'Sending...' : 'Send'}
</button>
</form>
</motion.div>

<motion.div variants={slideIn('right', "tween", 0.2, 1)}
className="lg:flex-1 h-[350px] md:h-[550px] lg:h-auto"
>
<EarthCanvas />
</motion.div>
</div>
  )
}

export default SectionWrapper (Contact, "contact");