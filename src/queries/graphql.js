import gql from 'graphql-tag';

export const GET_InstitutionList = gql`
{
  	getInstitutionList
  
  {
    id
    institutionId
  	institutionName
    licenseBedCount
  }

}
`





export const ADD_INS = gql`
mutation($institutionId:ID!,$institutionName:String!,$licenseBedCount:Int!,$openBedCount:Int!) 
{
  newInstitution(institutionId:$institutionId,institutionName:$institutionName,licenseBedCount:$licenseBedCount,openBedCount:$openBedCount)
   {
    institutionId
    institutionName
    licenseBedCount
    openBedCount
  }
}`

