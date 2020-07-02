import * as React from 'react';
import { Field } from 'react-final-form';

import Select from '../UI/Select/Select';

import styles from './ProfileForm.scss';
import { ProfileFormField, SchoolYear } from '../../utils/enums';

const schoolYears = Object.entries(SchoolYear).map(([label, value]) => ({ label, value }));

const SchoolInfo: React.FC = () => {
	return (
		<div className={styles.schoolInfo}>
			<div className={styles.school}>
				<div className={styles.heading}>
					<span>School</span>
				</div>
				<div className={styles.info}>
					<Field name={ProfileFormField.School}>{() => <Select placeholder='School' />}</Field>
					<Field name={ProfileFormField.SchoolYear}>
						{({ input }) => (
							<Select
								placeholder='School years'
								options={schoolYears}
								defaultValue={schoolYears.find((y) => y.value === input.value) || schoolYears[0]}
							/>
						)}
					</Field>
					<Field name={ProfileFormField.Teams}>{() => <Select placeholder='Team' />}</Field>
				</div>
			</div>
			<div className={styles.facilities}>
				<div className={styles.heading}>
					<span>Facility</span>
				</div>
				<div className={styles.info}>
					<Field name={ProfileFormField.Facilites}>{() => <Select placeholder='Facility' />}</Field>
				</div>
			</div>
		</div>
	);
};

export default SchoolInfo;
