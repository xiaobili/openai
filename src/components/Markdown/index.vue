<template>
  <div>
    <mavon-editor
      class="md"
      :value="source"
      :editable="editable"
      :scrollStyle="scrollStyle"
      :subfield="subfield"
      :defaultOpen="defaultOpen"
      :toolbarsFlag="toolbarsFlag"
    ></mavon-editor>
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  components: {
    mavonEditor,
  },
  props: {
    source: String,
  },
  data() {
    return {
      defaultOpen: "preview",
      editable: false,
      scrollStyle: true,
      subfield: false,
      toolbarsFlag: false,
    };
  },
};
</script>