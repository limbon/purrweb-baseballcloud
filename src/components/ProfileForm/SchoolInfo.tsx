import * as React from 'react';
import { Field, FieldInputProps } from 'react-final-form';

import { ProfileFormField, SchoolYear } from '../../utils/enums';

import { useTeams } from '../../hooks/useTeams';
import { useSchools } from '../../hooks/useSchools';
import { useFacilites } from '../../hooks/useFacilities';

import { Team, Facility } from 'baseballcloud/types';

import Select from '../UI/Select/Select';

import styles from './ProfileForm.scss';
import { faChessKing } from '@fortawesome/free-solid-svg-icons';

type ChangeType = 'school' | 'team' | 'facility' | 'school-year';

const schoolYears = Object.entries(SchoolYear).map(([label, value]) => ({ label, value }));

const SchoolInfo: React.FC = () => {
	const { teams, teamOptions } = useTeams();
	const { schools, schoolOptions } = useSchools();
	const { facilities, facilityOptions } = useFacilites();

	const handleChange = React.useCallback(
		(type: ChangeType, input: FieldInputProps<any, HTMLElement>) => {
			return (data?: any) => {
				switch (type) {
					case 'school': {
						const school = schools[data?.value] || { id: data.value, name: data.value };
						const e = { target: { value: school } };
						return input.onChange(e);
					}
					case 'school-year': {
						const e = { target: { value: data.value } };
						return input.onChange(e);
					}
					case 'team': {
						const _teams = data?.map((d: any) => teams[d.value] || { id: d.value, name: d.value });
						const e = { target: { value: _teams ?? [] } };
						return input.onChange(e);
					}
					case 'facility': {
						const _facilities = data?.map((d: any) => facilities[d.value]) || [];
						const e = { target: { value: _facilities } };
						return input.onChange(e);
					}
				}
			};
		},
		[teams, schools, facilities],
	);

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
								creatable
								options={schoolOptions}
								value={{ label: input.value.name, value: input.value.name }}
								placeholder='School'
								onChange={handleChange('school', input)}
							/>
						)}
					</Field>
					<Field name={ProfileFormField.SchoolYear}>
						{({ input }) => (
							<Select
								placeholder='School years'
								options={schoolYears}
								isSearchable={false}
								value={schoolYears.find((y) => y.value === input.value)}
								defaultValue={schoolYears[0]}
								onChange={handleChange('school-year', input)}
							/>
						)}
					</Field>
					<Field name={ProfileFormField.Teams}>
						{({ input }) => (
							<Select
								creatable
								isMulti
								hideSelectedOptions
								placeholder='Team'
								options={teamOptions as any}
								value={
									input.value
										? input.value.map((t: Team) => ({
												label: t.name,
												value: t.name,
										  }))
										: []
								}
								onChange={handleChange('team', input)}
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
								onChange={handleChange('facility', input)}
							/>
						)}
					</Field>
				</div>
			</div>
		</div>
	);
};

export default SchoolInfo;
