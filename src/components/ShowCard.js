import React from 'react';
import { Link } from 'react-router-dom';

function ShowCard() {
	return (
		<>
			<nav>
				<Link to={'/'}>back</Link>
				<Link to={'/edit'}>edit</Link>
			</nav>
			<section>
				<h1>How to make you personal brand out online</h1>
				<p>Jan 11, 2021</p>

				<p>
					President Biden ran for the White House as an apostle of
					bipartisanship, but the bitter fight over the $1.9 trillion
					pandemic measure that squeaked through the Senate on
					Saturday made clear that the differences between the two
					warring parties were too wide to be bridged by Mr. Biden’s
					good President Biden ran for the White House as an apostle
					of bipartisanship, but the bitter fight over the $1.9
					trillion pandemic measure that squeaked through the Senate
					on Saturday made clear that the differences between the two
					warring parties were too wide to be bridged by Mr. Biden’s
					good intentions. Not a single Republican in Congress voted
					for the rescue package now headed for final approval in the
					House and a signature from Mr. Biden, as they angrily
					denounced the legislation and the way in which it was
					assembled. Other marquee Democratic measures to protect and
					expand voting rights, tackle police bias and misconduct and
					more are also drawing scant to zero Republican
					backing.intentions. Not a single Republican in Congress
					voted for the rescue package now headed for final approval
					in the House and a signature from Mr. Biden, as they angrily
					denounced the legislation and the way in which it was
					assembled. Other marquee Democratic measures to protect and
					expand voting rights, tackle police bias and misconduct and
					more are also drawing scant to zero Republican backing.
				</p>
			</section>
		</>
	);
}

export default ShowCard;
