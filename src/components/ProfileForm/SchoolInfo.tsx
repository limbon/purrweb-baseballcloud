import * as React from 'react';
import { Field } from 'react-final-form';

import { ProfileFormField, SchoolYear } from '../../utils/enums';
import { useTeams } from '../../hooks/useTeams';

import { Team } from 'baseballcloud/types';

import Select from '../UI/Select/Select';

import styles from './ProfileForm.scss';

const schoolYears = Object.entries(SchoolYear).map(([label, value]) => ({ label, value }));

const SchoolInfo: React.FC = () => {
	const { teams, teamOptions } = useTeams();

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
								onChange={(data?: any) => {
									const e = { target: { value: data?.value } };
									input.onChange(e);
								}}
							/>
						)}
					</Field>
					<Field name={ProfileFormField.Teams}>
						{({ input }) => (
							<Select
								isMulti
								hideSelectedOptions
								placeholder='Team'
								options={teamOptions as any}
								defaultValue={
									input.value
										? input.value.map((t: Team) => ({
												label: t.name,
												value: t.name,
										  }))
										: []
								}
								onChange={(data?: any) => {
									const _teams = data?.map((d: any) => teams[d.value]);
									const e = { target: { value: _teams } };
									input.onChange(e);
								}}
							/>
						)}
					</Field>
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
