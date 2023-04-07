import React from 'react'
import { useForm } from 'react-hook-form';
import './Filter.scss'

type Props = {}

const Filter = (props: Props) => {

    const {
		register,
		// reset,
		handleSubmit,
		// formState: { errors },
	} = useForm({
		mode: 'all',
	});

	const onSubmit = (data: any) => {
		if (data) {
			// console.log(data);
		}
	};

  return (
    <div className='user-filter-container'>
        <form className="user-filter-form" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group">
				<label htmlFor="organization">Organization</label>
				<select
					{...register('organization', {
						required: false,
					})}
				>
					<option value="">Select</option>
				</select>
			</div>
			<div className="form-group">
				<label htmlFor="username">Username</label>
				<input
					type="text"
                    placeholder='User'
					{...register('username', {
						required: false,
					})}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="email"
                    placeholder='Email'
					{...register('email', {
						required: false,
					})}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="date">Date</label>
				<input
					type="date"
                    placeholder='Date'
					{...register('date', {
						required: false,
					})}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="phone">Phone Number</label>
				<input
					type="tel"
                    placeholder='Phone Number'
					{...register('phone', {
						required: false,
					})}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="status">Status</label>
				<select
					{...register('status', {
						required: false,
					})}
				>
					<option value="">Select</option>
				</select>
			</div>
			<div>
				<button type="reset">Reset</button>
				<button type="submit">Filter</button>
			</div>
		</form>
    </div>
  )
}

export default Filter