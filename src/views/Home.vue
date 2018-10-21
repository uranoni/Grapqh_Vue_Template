<template>
  <div class="home">
  <div class="container">
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">institutionId</th>
      <th scope="col">institutionName</th>
      <th scope="col">licenseBedCount</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="item in getInstitutionList">
      <th scope="row">1</th>
      <td>{{item.id}}</td>
      <td>{{item.institutionId}}</td>
      <td>{{item.institutionName}}</td>
      <td>{{item.licenseBedCount}}</td>
    </tr>
  </tbody>
</table>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { GET_InstitutionList } from "../queries/graphql";

export default {
  name: "home",
  data: () => ({
    getInstitutionList:[]
  }),
  apollo: {
    getInstitutionList: {
      query: GET_InstitutionList
    }
  }
};
</script>
