import { createRoutine, promisifyRoutine, PromiseCreator } from 'redux-saga-routines';
import { createAsyncAction } from 'typesafe-actions';

import {
	FetchProfileActions,
	FetchProfileByIdActions,
	UpdateProfileActions,
	UploadAvatarActions,
	FetchLeaderboardBattingActions,
	FetchLeaderboardPitchingActions,
	FetchNetworkActions,
	FetchTeamsActions,
	FetchSchoolsActions,
	FetchFacilitiesActions,
} from './actionTypes';

import {
	Profile,
	ProfileForm,
	Team,
	School,
	Facility,
	LeaderboardFilterOptions,
	LeaderboardBattingData,
	LeaderboardPitchingData,
	NetworkFilterOptions,
	NetworkUserData,
} from 'baseballcloud/types';

import { PromisifiedActionMeta } from '../../utils/promisifiedActions/PromisifiedActionMeta';

export const fetchProfile = createAsyncAction(
	FetchProfileActions.request,
	FetchProfileActions.success,
	FetchProfileActions.failure,
)<[undefined, undefined], [Profile, undefined], [Error, undefined]>();

export const fetchProfileById = createAsyncAction(
	FetchProfileByIdActions.request,
	FetchProfileByIdActions.success,
	FetchProfileByIdActions.failure,
)<[string, undefined], [Profile, undefined], [Error, undefined]>();

export const updateProfile = createAsyncAction(
	UpdateProfileActions.request,
	UpdateProfileActions.success,
	UpdateProfileActions.failure,
	UpdateProfileActions.cancel,
)<
	[Partial<ProfileForm>, PromisifiedActionMeta],
	[Profile, PromisifiedActionMeta],
	[Error, PromisifiedActionMeta],
	[undefined, PromisifiedActionMeta]
>();

export const updateAvatar = createAsyncAction(
	UploadAvatarActions.request,
	UploadAvatarActions.success,
	UploadAvatarActions.failure,
	UploadAvatarActions.cancel,
)<
	[{ name: string; data: File }, PromisifiedActionMeta],
	[string, PromisifiedActionMeta],
	[Error, PromisifiedActionMeta],
	[undefined, PromisifiedActionMeta]
>();

export const fetchLeaderboardBatting = createAsyncAction(
	FetchLeaderboardBattingActions.request,
	FetchLeaderboardBattingActions.success,
	FetchLeaderboardBattingActions.failure,
	FetchLeaderboardBattingActions.cancel,
)<
	[LeaderboardFilterOptions, PromisifiedActionMeta],
	[LeaderboardBattingData[], PromisifiedActionMeta],
	[Error, PromisifiedActionMeta],
	[undefined, PromisifiedActionMeta]
>();

export const fetchLeaderboardPitching = createAsyncAction(
	FetchLeaderboardPitchingActions.request,
	FetchLeaderboardPitchingActions.success,
	FetchLeaderboardPitchingActions.failure,
	FetchLeaderboardPitchingActions.cancel,
)<
	[LeaderboardFilterOptions, PromisifiedActionMeta],
	[LeaderboardPitchingData, PromisifiedActionMeta],
	[Error, PromisifiedActionMeta],
	[undefined, PromisifiedActionMeta]
>();

export const fetchNetwork = createAsyncAction(
	FetchNetworkActions.request,
	FetchNetworkActions.success,
	FetchNetworkActions.failure,
	FetchNetworkActions.cancel,
)<
	[NetworkFilterOptions, PromisifiedActionMeta],
	[NetworkUserData, PromisifiedActionMeta],
	[Error, PromisifiedActionMeta],
	[undefined, PromisifiedActionMeta]
>();

export const fetchTeams = createAsyncAction(
	FetchTeamsActions.request,
	FetchTeamsActions.success,
	FetchTeamsActions.failure,
	FetchTeamsActions.cancel,
)<
	[string, PromisifiedActionMeta],
	[{ [index: string]: Team }, PromisifiedActionMeta],
	[Error, PromisifiedActionMeta],
	[undefined, PromisifiedActionMeta]
>();

export const fetchSchools = createAsyncAction(
	FetchSchoolsActions.request,
	FetchSchoolsActions.success,
	FetchSchoolsActions.failure,
	FetchSchoolsActions.cancel,
)<
	[string, PromisifiedActionMeta],
	[{ [index: string]: School }, PromisifiedActionMeta],
	[Error, PromisifiedActionMeta],
	[undefined, PromisifiedActionMeta]
>();

export const fetchFacilities = createAsyncAction(
	FetchFacilitiesActions.request,
	FetchFacilitiesActions.success,
	FetchFacilitiesActions.failure,
	FetchFacilitiesActions.cancel,
)<
	[string, PromisifiedActionMeta],
	[{ [index: string]: Facility }, PromisifiedActionMeta],
	[Error, PromisifiedActionMeta],
	[undefined, PromisifiedActionMeta]
>();

export default {
	fetchProfile,
	fetchProfileById,
	updateProfile,
	updateAvatar,
	fetchLeaderboardBatting,
	fetchLeaderboardPitching,
	fetchNetwork,
	fetchTeams,
	fetchSchools,
	fetchFacilities,
};
