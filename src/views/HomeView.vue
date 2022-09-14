<template>
  <div class="home">
    <el-table :data="tasks" border style="width: 100%">
      <el-table-column prop="name" label="Nhiệm vụ" width="500">
      </el-table-column>
      <el-table-column
        prop="completed"
        label="Trạng thái"
        :formatter="formatStatus"
        width="200"
      >
      </el-table-column>
      <el-table-column label="Thao tác">
        <template #default="scope">
          <el-button @click="setTaskComplete(scope.row)" type="text" size="mini"
            >Completed</el-button
          >
          <el-button
            @click="deleteTask(scope.row)"
            type="text"
            size="mini"
            style="color: white; background-color: #f44336"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task from "@/models/TaskModel";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      tasks: [] as Task[],
    };
  },

  methods: {
    setTaskComplete(task: Task): void {
      this.$store.commit("completeTask", task);
    },

    deleteTask(task: Task) {
      this.$store.commit("deleteTask", task);
    },

    formatStatus(task: Task): string {
      return task.completed ? "Đã hoàn thành" : "Chưa hoàn thành";
    },
  },

  mounted() {
    this.tasks = this.$store.state.tasks;
  },
});
</script>

<style lang="scss" scoped>
</style>
