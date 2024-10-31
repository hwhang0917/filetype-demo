<template>
  <div class="container">
    <div class="input-box">
      <label :for="fileInputId">
        파일 입력
      </label>
      <input
        :id="fileInputId"
        type="file"
        ref="fileInputRef"
        @change="handleFileChange"
      >
    </div>
    <div class="result-box">
      <div class="file-type">
        <h3>
          <a href="https://www.npmjs.com/package/file-type" target="_blank">
            <code>file-type</code>
          </a>
        </h3>
        <textarea :value="fileTypeResult" disabled />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import "~/assets/reset.css";
import { fileTypeFromBlob } from "file-type";

const fileInputId = useId();
const fileInputRef = ref<HTMLInputElement>();

const fileTypeResult = ref<string>("");

const handleFileChange = async () => {
  if (fileInputRef.value && fileInputRef.value.files) {
    const file = fileInputRef.value.files[0] || null;
    if (file) {
      const blob = new Blob([file], { type: file.type });
      const res = await fileTypeFromBlob(blob);
      let resString = "unknown";
      if (res) resString = JSON.stringify(res, null, 4);
      fileTypeResult.value = resString;
    }
  }
}

</script>
<style lang="css" scoped>
@import "https://hangeul.pstatic.net/hangeul_static/css/nanum-square-neo.css";

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "NanumSquareNeo";
}

.input-box {
  width: 50rem;
  height: 5rem;
  padding: 2rem 5rem 5rem 5rem;
  border: 1px solid gray;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
}
    .result-box {
      display: flex;
    }

    textarea {
      width: 15rem;
      height: 8rem;
      resize: none;
    }
</style>
