import SignUpForm from "./SignUpForm.tsx";

function Footer() {
	return (
		<div className="footer
		w-full
		h-fit
		bg-[#27262e]
		">
	
				<h2 className="footer-heading
				text-[rgb(199,233,61)]
				text-center
				py-[20px]
				text-[3.6vw]
				font-[600]
				">Sign Up For More Info Now!</h2>

				<SignUpForm />

				<div className="footer-text
				text-[#aba6a6]
				text-center
				text-[1rem]
				py-[10px]
				px-[20px]
				leading-[1.7]
				my-[20px]
				mx-auto
				">
					<p>As with any business, results will vary and cannot be guaranteed.</p>
					<p>Copyright   &copy; www.geoffjen.com</p>
					<p>All Rights Reserved</p>
				</div>

				<a href="https://www.geoffjen.com/policy" className="privacy-policy
				text-center
				no-underline
				text-[#aba6a6]
				block
				py-[10px]
				px-[20px]
				w-fit
				mx-auto
				mb-[20px]
				text-[1.2rem]
				hover:bg-[rgb(71,68,68)]
				hover:text-[#fff]
				hover:cursor-pointer
				hover:rounded-[5px]
				">
					Terms &#124; Privacy Policy &amp; Disclaimer
				</a>
		</div>
	);
}

export default Footer;