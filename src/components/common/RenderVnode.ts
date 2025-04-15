import { defineComponent } from 'vue'

const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [Number, String, Object],
      required: true,
    },
  },
  setup(props) {
    return () => props.vNode
  },
})
export default RenderVnode
