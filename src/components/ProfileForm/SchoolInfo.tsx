import * as React from 'react';
import { Field } from 'react-final-form';

import { ProfileFormField } from '../../utils/enums';

import SchoolField from './Fields/SchoolInput';
import SchoolYearInput from './Fields/SchoolYearInput';
import TeamsInput from './Fields/TeamsInput';
import FacilitiesInput from './Fields/FacilitiesInput';

import styles from './ProfileForm.scss';

const SchoolInfo: React.FC = () => {
	return (
		<div className={styles.schoolInfo}>
			<div className={styles.school}>
				<div className={styles.heading}>
					<span>School</span>
				</div>
				<div className={styles.info}>
					<Field name={ProfileFormField.School} render={SchoolField} />
					<Field name={ProfileFormField.SchoolYear} render={SchoolYearInput} />
					<Field name={ProfileFormField.Teams} render={TeamsInput} />
				</div>
			</div>
			<div className={styles.facilities}>
				<div className={styles.heading}>
					<span>Facility</span>
				</div>
				<div className={styles.info}>
					<Field name={ProfileFormField.Facilites} render={FacilitiesInput} />
				</div>
			</div>
		</div>
	);
};

export default SchoolInfo;
