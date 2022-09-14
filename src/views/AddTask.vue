<template>
  <div class="add-task">
    <el-card class="box-card">
      <el-input
        type="textarea"
        :rows="2"
        size="small"
        placeholder="Enter your task"
        v-model="taskName"
        @keyup.enter="addTask()"
      >
      </el-input>

      <el-row>
        <el-button type="primary">Submit</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task from "@/models/TaskModel";

export default defineComponent({
  name: "AddTask",
  data() {
    return {
      taskName: "",
    };
  },
  methods: {
    addTask(): void {
      if (this.taskName !== "") {
        const newTask = new Task(this.taskName);
        this.$store.commit("setTask", newTask);
        this.taskName = "";
        this.$router.push("/");
      }
    },
  },
});
</script>
