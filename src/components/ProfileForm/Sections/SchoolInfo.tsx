import * as React from 'react';
import { Field } from 'react-final-form';

import { useSchools } from '../../../hooks/useSchools';
import { useTeams } from '../../../hooks/useTeams';
import { useFacilities } from '../../../hooks/useFacilities';

import ProfileSelectInput from '../Inputs/ProfileSelectInput/ProfileSelectInput';

import styles from './ProfileFormSection.scss';

const schoolYearsOptions = [
	{ label: 'Junior', value: 'junior' },
	{ label: 'Senior', value: 'senior' },
	{ label: 'Freshman', value: 'freshman' },
	{ label: 'Sophomore', value: 'sophomore' },
];

const SchoolInfo: React.FC = () => {
	const { requestMoreSchools, schools, schoolOptions, schoolLoading } = useSchools();
	const { requestMoreTeams, teamOptions, teams, teamsLoading } = useTeams();
	const { facilities, facilityOptions } = useFacilities();

	return (
		<div className={styles.schoolInfo}>
			<div className={styles.school}>
				<div className={styles.heading}>
					<span>School</span>
				</div>
				<div className={styles.info}>
					<Field name='school'>
						{(props) => (
							<ProfileSelectInput
								{...props}
								label='School'
								creatable
								options={schoolOptions}
								searchable
								onInputChange={requestMoreSchools}
								loading={schoolLoading}
								getValue={(data) =>
									schools[data?.value] || { id: data.value, name: data.value }
								}
								value={{ label: props.input.value.name, value: props.input.value.name }}
								changeDeps={[schools]}
							/>
						)}
					</Field>
					<Field name='school_year'>
						{(props) => (
							<ProfileSelectInput
								{...props}
								label='School Year'
								options={schoolYearsOptions}
								searchable
								getValue={(data) => data.value}
								value={schoolYearsOptions.find((y) => y.value === props.input.value)}
								defaultValue={schoolYearsOptions[0]}
								changeDeps={[]}
							/>
						)}
					</Field>
					<Field name='teams'>
						{(props) => (
							<ProfileSelectInput
								{...props}
								label='Teams'
								creatable
								options={teamOptions}
								searchable
								multi
								hideSelected
								onInputChange={requestMoreTeams}
								loading={teamsLoading}
								getValue={(data) =>
									data?.map((d: any) => teams[d.value] || { id: d.value, name: d.value }) ?? []
								}
								value={props.input.value?.map((t: any) => ({
									label: t.name,
									value: t.name,
								}))}
								defaultValue={[]}
								changeDeps={[teams]}
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
					<Field name='facilities'>
						{(props) => (
							<ProfileSelectInput
								{...props}
								label='Facilites'
								options={facilityOptions}
								multi
								hideSelected
								getValue={(data) => data?.map((d: any) => facilities[d.value]) ?? []}
								value={props.input.value?.map((f: any) => ({
									label: f.u_name,
									value: f.u_name,
								}))}
								defaultValue={[]}
								changeDeps={[facilities]}
							/>
						)}
					</Field>
				</div>
			</div>
		</div>
	);
};

export default SchoolInfo;
