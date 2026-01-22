'use client';

import { useState } from "react";

export default function FormSubmission() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

        const data = await response.json();

        if (data.success) {
          setStatus({
            type: "success",
            message: data.message || "Thank you! We’ll contact you shortly.",
          });

          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            message: "",
          });
        } else {
          setStatus({
            type: "error",
            message: data.message || "Something went wrong. Please try again.",
          });
        }
      } catch (error) {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
        <>
            <div className="contact-form-fields">
              	<form className="contact-form" onSubmit={handleSubmit}>
					{status.message && (
    			    <div className={`p-4 rounded mb-4 ${
            			status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800" }`} >
          				{status.message}
        			</div>)}

              		<div className="contact-form-label"><label htmlFor="name" className="text-18 text-rg">Name</label> <span>*</span> </div>
	                <input type="text" name="name" id="" className="site-radius-10 text-18 text-rg" value={formData.name} onChange={handleChange} />

    	            <div className="contact-form-label"><label htmlFor="email" className="text-18 text-rg">Email</label> <span>*</span> </div>
        	        <input type="email" name="email" id="" className="site-radius-10 text-18 text-rg" value={formData.email} onChange={handleChange} />

            	    <div className="contact-form-label"><label htmlFor="phone" className="text-18 text-rg">Phone</label> <span>*</span> </div>
                	<input type="tel" name="phone" id="" className="site-radius-10 text-18 text-rg" value={formData.phone} onChange={handleChange} />

          			<div className="contact-form-label"><label htmlFor="course" className="text-18 text-rg">Course Name</label> <span>*</span> </div>
            	    <input type="text" name="course" className="site-radius-10 text-18 text-rg" value={formData.course} onChange={handleChange} />

                	<div className="contact-form-label"><label htmlFor="message" className="text-18 text-rg">Message</label></div>
	                <textarea name="message" id="" className="site-radius-10 text-18 text-rg" value={formData.message} onChange={handleChange} ></textarea>

					<button className="link-padding site-radius-10 cnct-submit-btn text-18 text-rg" type="submit">Send message</button>
    	        </form>
            </div>
        </>
    );
}