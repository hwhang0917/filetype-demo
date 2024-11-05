<template>
  <main class="container">
    <div class="input-box">
      <input
        type="file"
        ref="fileInputRef"
        @change="handleFileChange"
      >
      <button @click="reset">
        RESET
      </button>
    </div>
    <div class="result-box">
      <div class="file-type">
        <h3>
          <a href="https://www.npmjs.com/package/file-type" target="_blank">
            <code>file-type</code>
          </a>
        </h3>
        <ul>
          <li>
            <span>EXT: </span>
            <span>{{ fileTypeResult?.ext || "unknown" }}</span>
          </li>
          <li>
            <span>MIME: </span>
            <span>{{ fileTypeResult?.mime || "unknown" }}</span>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import "@picocss/pico/css/pico.min.css";
import { fileTypeFromBlob, type FileTypeResult } from "file-type";

const fileInputRef = ref<HTMLInputElement>();
const fileTypeResult = ref<FileTypeResult>();

const handleFileChange = async () => {
  if (fileInputRef.value && fileInputRef.value.files) {
    const file = fileInputRef.value.files[0] || null;
    if (file) {
      const blob = new Blob([file], { type: file.type });
      fileTypeResult.value =  await fileTypeFromBlob(blob);
    }
  }
}

const reset = () => {
  if (!fileInputRef.value) return;
  fileInputRef.value.value = "";
  fileTypeResult.value = undefined;
}

</script>
<style lang="scss" scoped>
@import "https://hangeul.pstatic.net/hangeul_static/css/nanum-square-neo.css";
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: "NanumSquareNeo";
}
</style>
