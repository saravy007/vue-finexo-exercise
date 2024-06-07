<template>
  <Form @submit="onSubmit">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <Field type="email" name="email" :rules="emailRule" v-model="email" />
      <ErrorMessage name="email" />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <Field
        type="password"
        name="password"
        :rules="passwordRule"
        v-model="password"
      />
      <ErrorMessage name="password" />
    </div>
    <div class="form-group">
      <label>Upload File</label>
      <input
        type="file"
        @change="onFileChange"
        ref="file"
        multiple="multiple"
      />
    </div>
    <button class="btn btn-primary">Submit</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      password: "",
      files: [],
      emailRule: Yup.string().email().required(),
      passwordRule: Yup.string().min(6).required(),
      validExtensions: ["jpg", "jpeg", "png", "gif"],
      maxSize: 2 * 1024 * 1024,
    };
  },
  methods: {
    async onSubmit() {
      //   console.log(this.email);
      //   console.log(this.password);
      //   const { data } = await axios.post("http://172.23.128.93:3000/register", {
      //     //name: this.formData.name,
      //     email: this.email,
      //     password: this.password,
      //     //repeat_pass: this.formData.repeat_pass,
      //   });
      //   console.log(data);

      // Create a FormData instance
      const formData = new FormData();
      formData.append("email", this.email);
      formData.append("password", this.password);
      //formData.append("file", this.file);
      for (let i = 0; i < this.files.length; i++) {
        formData.append("files", this.files[i]);
      }
      const { data } = await axios.post(
        "http://172.23.128.93:3000/upload-multiple", //"http://172.23.128.93:3000/upload-single"
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
    },
    onFileChange(event) {
      //   const file = event.target.files[0];
      //   if (file) {
      //     const fileExtension = file.name.split(".").pop().toLowerCase();
      //     if (!this.validExtensions.includes(fileExtension)) {
      //       alert(
      //         "Invalid file type. Only jpg, jpeg, png, and gif files are allowed."
      //       );
      //       this.file = null;
      //       return;
      //     }
      //     if (file.size > this.maxSize) {
      //       alert("File size exceeds the 2 MB limit.");
      //       this.file = null;
      //       return;
      //     }
      //     this.file = file;
      //     console.log(file);
      //   }
      // Logic to handle file check
      //console.log(event.target.files);
      const myLists = [...event.target.files];
      //console.log(myLists);
      myLists.forEach((file) => {
        if (file) {
          // check extension
          const fileExtension = file.name.split(".").pop().toLowerCase();
          if (!this.validExtensions.includes(fileExtension)) {
            alert(`${file.name} not allowed`);
            this.$refs.fileUpload.value = "";
          }
          if (file.size > this.maxSize) {
            alert(`${file.name} exceeded file size 2MB`);
            this.$refs.fileUpload.value = "";
          }
          this.files.push(file);
          // this.file = file;
          // console.log(file);
        }
      });
    },
  },
};
</script>
