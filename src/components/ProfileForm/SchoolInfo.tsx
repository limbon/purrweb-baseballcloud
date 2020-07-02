import * as React from 'react';
import { Field } from 'react-final-form';

import { ProfileFormField, SchoolYear } from '../../utils/enums';

import { useTeams } from '../../hooks/useTeams';
import { useSchools } from '../../hooks/useSchools';
import { useFacilites } from '../../hooks/useFacilities';

import { Team, Facility } from 'baseballcloud/types';

import Select from '../UI/Select/Select';

import styles from './ProfileForm.scss';

const schoolYears = Object.entries(SchoolYear).map(([label, value]) => ({ label, value }));

const SchoolInfo: React.FC = () => {
	const { teams, teamOptions } = useTeams();
	const { schools, schoolOptions } = useSchools();
	const { facilities, facilityOptions } = useFacilites();

	return (
		<div className={styles.schoolInfo}>
			<div className={styles.school}>
				<div className={styles.heading}>
					<span>School</span>
				</div>
				<div className={styles.info}>
					<Field name={ProfileFormField.School}>
						{({ input }) => (
							<Select
								options={schoolOptions}
								defaultValue={{ label: input.value.name, value: input.value.name }}
								placeholder='School'
								onChange={(data?: any) => {
									const school = schools[data?.value];
									const e = { target: { value: school } };
									input.onChange(e);
								}}
							/>
						)}
					</Field>
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
					<Field name={ProfileFormField.Facilites}>
						{({ input }) => (
							<Select
								isMulti
								options={facilityOptions}
								defaultValue={
									input.value
										? input.value.map((f: Facility) => ({
												label: f.u_name,
												value: f.u_name,
										  }))
										: []
								}
								placeholder='Facility'
								onChange={(data?: any) => {
									const _facilities = data?.map((d: any) => facilities[d.value]) || [];
									const e = { target: { value: _facilities } };
									input.onChange(e);
								}}
							/>
						)}
					</Field>
				</div>
			</div>
		</div>
	);
};

export default SchoolInfo;
