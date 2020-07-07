export const REQUEST_NETWORK = `
    query Profiles($input:FilterProfilesInput!) { 
        profiles(input: $input) { 
            profiles {
                id
                first_name
                last_name
                events {
                  id
                }
                school {
                  id
                  name
                }
                teams {
                  id
                  name
                }
                favorite
            }
            total_count
        }
    }`;
