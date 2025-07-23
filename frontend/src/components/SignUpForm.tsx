import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function SignUpForm() {
	const navigate = useNavigate();
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [agreed, setAgreed] = useState<boolean>(false);

	const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!agreed) {
			alert('You must agree to the Terms and Conditions before signing up.');
			return;
		}

		try {
			await axios.post("http://localhost:5000/api/signup", { name, email });
			alert("Sign up successfully!");
			setName("");
			setEmail("");
			setAgreed(false);

			navigate('/getting-started');

		} catch (error: unknown) {
			if(axios.isAxiosError(error)){
				console.error(error.response?.data || error.message)
			}
			else{
				console.error(error);
			}
			alert("sign up failed");		
		}
	};


	return (
		<form onSubmit={handleSubmit}>
			<div className="form-section flex flex-col items-center justify-center max-w-full">
				<div className="input-section 
				w-[70%] 
				flex gap-[10px]
				max-lg:w-[90%]
				max-sm:flex-col
				">
					<input
					className="
					flex-[2] 
					py-[15px] 
					px-[20px] 
					text=[1.2rem] 
					bg-white
					max-md:text-[1rem]

					"
					
						type="text"
						placeholder="Your name"
						value={name}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setName(e.target.value);
						}}
						required
					/>

					<input
					className="flex-[2] py-[15px] px-[20px] text=[1.2rem] bg-white"
						type="email"
						placeholder="Your email"
						value={email}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setEmail(e.target.value);
						}}
						required
					/>
					<button type="submit" className='signUpButton 
					flex-[1] 
					bg-transparent 
					text-center 
					text-white 
					border-3 
					border-solid 
					border-[rgb(199,233,61)]
					max-sm:p-[15px]
					'>SIGN UP!</button>
				</div>

				<div className="terms-section 
				pt-[5px] 
				w-[70%]
				text-left
				max-lg:w-[90%]
				max-sm:w-[90%] 
				max-sm:text-center">
					<input
					className='mr-[5px]'
						type="checkbox"
						id="terms"
						checked={agreed}
						onChange={(e : React.ChangeEvent<HTMLInputElement>) => { setAgreed(e.target.checked); }}
						required
					/>
					<label
					className='text-white text-[0.9rem]'
						htmlFor="terms">
						By checking this box, you consent to having us
						send information about our webinars & business program to
						the email address that you have provided on this form.
					</label>
				</div>

			</div>
		</form>
	);
}

export default SignUpForm;