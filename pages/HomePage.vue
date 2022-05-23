<template>
  <div>
    HomePage
  </div>
</template>

<script>
import {db} from "../plugins/firebase";
import {collection, getDocs, deleteDoc, doc, onSnapshot, limit, query, orderBy, where} from 'firebase/firestore';
export default {
  name: "HomePage",
  mounted() {
    let unsub = null;
    (async () => {
      const collectionRef = collection(db, 'jobs');

      unsub = onSnapshot(collectionRef, (snapShot) => {
        const localTodos = [];
        console.log("Có sự thay đổi dữ liệu");
        snapShot.forEach(doc => {
          localTodos.push({
            id: doc.id,
            job: doc.data().job
          });
        });
        console.log(localTodos)
      });
    })();
  },

}
</script>

<style scoped>

</style>


