<template>
  <div class="about">
    <form @submit.prevent="onSubmitHandler">
      <input type="text" placeholder="ID" v-model="institutionId">
      <input type="text" placeholder="Name" v-model="institutionName">
      <input type="text" placeholder="BedCount" v-model="licenseBedCount">
      <input type="text" placeholder="openBedCount" v-model="openBedCount">
      <button>submit</button>
    </form>
      <!-- <div class="alert alert-danger" role="alert">{{err}}</div> -->
  </div>
</template>
<script>

import { ADD_INS } from "../queries/graphql";
export default {
  data: () => ({
    institutionId:"",
    institutionName:"",
    licenseBedCount:0,
    openBedCount:0,
    err:""
  }),
  methods: {
    onSubmitHandler() {
      this.$apollo.mutate({
        mutation: ADD_INS,
        variables: {
          institutionId: this.institutionId,
          institutionName: this.institutionName,
          licenseBedCount: this.licenseBedCount*1,
          openBedCount:this.openBedCount*1
        }

//       }).then(res => {
//         // router.push('home')
// }).catch(error => {
//     console.log(error.graphQLErrors)
//     // this.err="大哥你東西沒打完整"+error.graphQLErrors[0].message;
});
    }
  }
};
</script>
