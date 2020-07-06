import * as React from 'react';
import { Field } from 'react-final-form';

import { SchoolYear } from '../../../utils/enums';

import { useSchools } from '../../../hooks/useSchools';
import { useTeams } from '../../../hooks/useTeams';
import { useFacilities } from '../../../hooks/useFacilities';

import ProfileSelectInput from '../Inputs/ProfileSelectInput/ProfileSelectInput';

import styles from './ProfileFormSection.scss';

const SchoolInfo: React.FC = () => {
	const { requestMoreSchools, schoolLoading, schools, schoolOptions } = useSchools();
	const { requestMoreTeams, teamOptions, teams, teamsLoading } = useTeams();
	const { facilities, facilityOptions } = useFacilities();

	const schoolYears = React.useMemo(() => {
		return Object.entries(SchoolYear).map(([label, value]) => ({ label, value }));
	}, []);

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
								label='School'
								creatable
								options={schoolOptions}
								searchable
								onInputChange={requestMoreSchools}
								loading={schoolLoading}
								getValue={(data) => schools[data?.value] || { id: data.value, name: data.value }}
								value={{ label: props.input.value.name, value: props.input.value.name }}
								changeDeps={[schools]}
								{...props}
							/>
						)}
					</Field>
					<Field name='school_year'>
						{(props) => (
							<ProfileSelectInput
								label='School Year'
								options={schoolYears}
								searchable
								getValue={(data) => data.value}
								defaultValue={schoolYears.find((y) => y.value === props.input.value)}
								changeDeps={[]}
								{...props}
							/>
						)}
					</Field>
					<Field name='teams'>
						{(props) => (
							<ProfileSelectInput
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
								changeDeps={[teams]}
								{...props}
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
								label='Facilites'
								options={facilityOptions}
								multi
								hideSelected
								getValue={(data) => data?.map((d: any) => facilities[d.value]) ?? []}
								value={props.input.value.map((f: any) => ({
									label: f.u_name,
									value: f.u_name,
								}))}
								changeDeps={[facilities]}
								{...props}
							/>
						)}
					</Field>
				</div>
			</div>
		</div>
	);
};

export default SchoolInfo;
